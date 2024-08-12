import prisma from "@/lib/db/prisma";

export default async function CountAssets() {
    const data = await prisma.component.findMany();
  
    const componentCount = data.length;
  
    return (
      <div>
        <p>{componentCount}</p>
      </div>
    );
  }
