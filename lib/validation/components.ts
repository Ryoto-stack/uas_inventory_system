import { z } from "zod";

export const createComponentSchema = z.object({
  name:    z.string().min(1, { message: "Name required" }),
  serial:    z.string().min(1, { message: "Serial required" }),
  status:    z.string().min(1, { message: "Status required" }),
  category:    z.string().min(1, { message: "Category required" }),
  quantity:    z.string().min(1, { message: "Quantity required" }),
  location:    z.string().min(1, { message: "Location required" }),
  purchaseDate:  z.string().min(1, { message: "Purchase Date required" }),
  purchaseCost: z.string().min(1, { message: "Purchase Cost required" }),
});

export type CreateComponentSchema = z.infer<typeof createComponentSchema>;

export const updateComponentSchema = createComponentSchema.extend({
  id: z.string().min(1, { message: "Id required" }),
});

export const deleteComponentSchema = z.object({
  id: z.string().min(1, { message: "Id required" }),
});