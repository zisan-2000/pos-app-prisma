import { z } from "zod";

export const cashEntrySchema = z.object({
  type: z.enum(["in", "out"]),
  amount: z.number().nonnegative(),
  reference: z.string().optional(),
});

