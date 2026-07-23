import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listDesigns from "./tools/list-designs";
import getDesign from "./tools/get-design";
import shopInfo from "./tools/shop-info";

// Build the direct Supabase issuer from the project ref. Vite inlines
// VITE_SUPABASE_PROJECT_ID at build time so this stays import-safe.
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "habibi-amigo-mcp",
  title: "Habibi Amigo",
  version: "0.1.0",
  instructions:
    "Tools for the Habibi Amigo T-shirt brand. Use `list_designs` to browse the collection, `get_design` for details on a single design, and `get_shop_info` for shop and contact links.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listDesigns, getDesign, shopInfo],
});
