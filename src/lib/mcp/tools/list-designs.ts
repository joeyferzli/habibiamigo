import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { DESIGNS } from "../catalog";

export default defineTool({
  name: "list_designs",
  title: "List designs",
  description:
    "List Habibi Amigo T-shirt designs from the public collection. Optionally filter by name or in-stock status.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Case-insensitive substring to match against design name or caption."),
    inStockOnly: z
      .boolean()
      .optional()
      .describe("When true, return only designs that are currently in stock."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, inStockOnly }) => {
    const q = query?.trim().toLowerCase();
    const results = DESIGNS.filter((d) => {
      if (inStockOnly && !d.inStock) return false;
      if (q && !`${d.name} ${d.caption}`.toLowerCase().includes(q)) return false;
      return true;
    });
    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { designs: results, count: results.length },
    };
  },
});
