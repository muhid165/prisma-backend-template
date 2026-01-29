import { email, z } from "zod";

export const userSchema = z.object({
  email: z.email(),
  name: z.string().optional(),
});


