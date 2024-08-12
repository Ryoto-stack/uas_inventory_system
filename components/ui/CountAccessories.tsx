import prisma from "@/lib/db/prisma";

export default async function CountAssets() {
    const data = await prisma.accessory.findMany();
  
    const accessoryCount = data.length;
  
    return (
      <div>
        <p>{accessoryCount}</p>
      </div>
    );
  }
