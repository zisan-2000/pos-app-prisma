import { z } from "zod";

export const expenseSchema = z.object({
  category: z.string().min(1),
  amount: z.number().nonnegative(),
  note: z.string().optional(),
});

