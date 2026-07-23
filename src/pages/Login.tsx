import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

function sanitizeNext(raw: string | null): string {
  if (!raw) return "/";
  // Same-origin relative paths only.
  if (!raw.startsWith("/") || raw.startsWith("//")) return "/";
  return raw;
}

const Login = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const next = sanitizeNext(params.get("next"));

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;
    supabase.auth.getSession().then(({ data }) => {
      if (!cancelled && data.session) {
        window.location.replace(next);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [next]);

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        window.location.replace(next);
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}${next}` },
        });
        if (error) throw error;
        toast({
          title: "Check your email",
          description: "Confirm your address to finish signing up.",
        });
      }
    } catch (err: any) {
      toast({ title: "Auth error", description: err?.message ?? String(err) });
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setBusy(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: `${window.location.origin}${next}`,
      });
      if (result.error) {
        toast({ title: "Google sign-in error", description: result.error.message });
        setBusy(false);
        return;
      }
      if (result.redirected) return;
      window.location.replace(next);
    } catch (err: any) {
      toast({ title: "Google sign-in error", description: err?.message ?? String(err) });
      setBusy(false);
    }
  }

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-md mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8 text-center">
              {mode === "signin" ? "SIGN IN" : "CREATE ACCOUNT"}
            </h1>

            <Button
              variant="outline"
              size="lg"
              className="w-full mb-6"
              onClick={handleGoogle}
              disabled={busy}
            >
              Continue with Google
            </Button>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <form onSubmit={handleEmail} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  autoComplete={mode === "signin" ? "current-password" : "new-password"}
                />
              </div>
              <Button type="submit" variant="premium" size="lg" className="w-full" disabled={busy}>
                {mode === "signin" ? "Sign in" : "Create account"}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-8">
              {mode === "signin" ? (
                <>
                  New here?{" "}
                  <button
                    className="text-foreground underline"
                    onClick={() => setMode("signup")}
                  >
                    Create an account
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    className="text-foreground underline"
                    onClick={() => setMode("signin")}
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
