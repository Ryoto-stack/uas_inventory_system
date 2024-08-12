import prisma from "@/lib/db/prisma";

export default async function CountAssets() {
    const data = await prisma.furniture.findMany();
  
    const furnitureCount = data.length;
  
    return (
      <div>
        <p>{furnitureCount}</p>
      </div>
    );
  }
