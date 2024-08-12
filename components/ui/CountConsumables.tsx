import prisma from "@/lib/db/prisma";

export default async function CountAssets() {
    const data = await prisma.consumables.findMany();
  
    const consumablesCount = data.length;
  
    return (
      <div>
        <p>{consumablesCount}</p>
      </div>
    );
  }
