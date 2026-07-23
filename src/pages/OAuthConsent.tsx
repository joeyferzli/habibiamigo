import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

// Beta helpers on supabase.auth — expose a minimally typed wrapper.
type OAuthResult = {
  data?: {
    redirect_url?: string;
    redirect_to?: string;
    client?: { name?: string; redirect_uri?: string } | null;
    scope?: string;
    scopes?: string[];
  };
  error?: { message: string } | null;
};
const oauth = (supabase.auth as unknown as {
  oauth: {
    getAuthorizationDetails: (id: string) => Promise<OAuthResult>;
    approveAuthorization: (id: string) => Promise<OAuthResult>;
    denyAuthorization: (id: string) => Promise<OAuthResult>;
  };
}).oauth;

const OAuthConsent = () => {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [details, setDetails] = useState<OAuthResult["data"] | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!authorizationId) {
        setError("Missing authorization_id in the URL.");
        setLoading(false);
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.replace(`/login?next=${encodeURIComponent(next)}`);
        return;
      }
      setUserEmail(sess.session.user.email ?? null);
      try {
        const { data, error } = await oauth.getAuthorizationDetails(authorizationId);
        if (cancelled) return;
        if (error) {
          setError(error.message);
          setLoading(false);
          return;
        }
        const immediate = data?.redirect_url ?? data?.redirect_to;
        if (immediate && !data?.client) {
          window.location.replace(immediate);
          return;
        }
        setDetails(data ?? null);
        setLoading(false);
      } catch (err: any) {
        if (cancelled) return;
        setError(err?.message ?? String(err));
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    try {
      const { data, error } = approve
        ? await oauth.approveAuthorization(authorizationId)
        : await oauth.denyAuthorization(authorizationId);
      if (error) {
        setError(error.message);
        setBusy(false);
        return;
      }
      const target = data?.redirect_url ?? data?.redirect_to;
      if (!target) {
        setError("The authorization server did not return a redirect URL.");
        setBusy(false);
        return;
      }
      window.location.replace(target);
    } catch (err: any) {
      setError(err?.message ?? String(err));
      setBusy(false);
    }
  }

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-md mx-auto text-center">
            {loading && <p className="text-muted-foreground">Loading authorization request…</p>}

            {error && (
              <div>
                <h1 className="font-display text-3xl text-foreground mb-4">
                  Authorization error
                </h1>
                <p className="text-destructive">{error}</p>
              </div>
            )}

            {!loading && !error && details && (
              <div className="text-left">
                <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6 text-center">
                  Connect {details.client?.name ?? "this app"} to Habibi Amigo
                </h1>
                <p className="text-muted-foreground mb-8 text-center">
                  This lets{" "}
                  <span className="text-foreground">
                    {details.client?.name ?? "the client"}
                  </span>{" "}
                  use Habibi Amigo as you
                  {userEmail ? ` (${userEmail})` : ""}.
                </p>

                <div className="rounded border border-border p-4 mb-8 space-y-2 text-sm">
                  <div>
                    <span className="uppercase tracking-widest text-muted-foreground text-xs">
                      Requested access
                    </span>
                    <p className="mt-1">
                      Call this app's enabled tools while you are signed in.
                    </p>
                  </div>
                  {details.client?.redirect_uri && (
                    <div>
                      <span className="uppercase tracking-widest text-muted-foreground text-xs">
                        Redirect URI
                      </span>
                      <p className="mt-1 break-all">{details.client.redirect_uri}</p>
                    </div>
                  )}
                </div>

                <p className="text-xs text-muted-foreground mb-8 text-center">
                  This does not bypass this app's permissions or backend policies.
                </p>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => decide(false)}
                    disabled={busy}
                  >
                    Cancel connection
                  </Button>
                  <Button
                    variant="premium"
                    size="lg"
                    className="flex-1"
                    onClick={() => decide(true)}
                    disabled={busy}
                  >
                    Approve
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OAuthConsent;
