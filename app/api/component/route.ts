import prisma from "@/lib/db/prisma";
import { createComponentSchema } from "@/lib/validation/components";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parseResult = createComponentSchema.safeParse(body);

    if (!parseResult.success) {
      console.error(parseResult.error);
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    const {
      name,
      serial,
      status,
      category,
      quantity,
      location,
      purchaseDate,
      purchaseCost
    } = parseResult.data;

    const job = await prisma.component.create({
      data: {
        name,
        serial,
        status,
        category,
        quantity,
        location,
        purchaseDate,
        purchaseCost
      },
    });

    return Response.json({ job }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
