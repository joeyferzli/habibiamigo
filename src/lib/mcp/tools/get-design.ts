import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { DESIGNS } from "../catalog";

export default defineTool({
  name: "get_design",
  title: "Get design details",
  description: "Fetch a single Habibi Amigo design by its id.",
  inputSchema: {
    id: z.string().min(1).describe("Design id, e.g. 'tequila-run-club'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const design = DESIGNS.find((d) => d.id === id);
    if (!design) {
      return {
        content: [{ type: "text", text: `No design found with id '${id}'.` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(design, null, 2) }],
      structuredContent: { design },
    };
  },
});
