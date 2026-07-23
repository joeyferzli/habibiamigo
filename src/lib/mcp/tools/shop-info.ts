import { defineTool } from "@lovable.dev/mcp-js";
import { CONTACT_EMAIL, SHOP_URL, SITE_URL } from "../catalog";

export default defineTool({
  name: "get_shop_info",
  title: "Get shop info",
  description:
    "Return the Habibi Amigo shop URL, main site URL, and contact email so a client can direct users to purchase or reach out.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = { shopUrl: SHOP_URL, siteUrl: SITE_URL, contactEmail: CONTACT_EMAIL };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
