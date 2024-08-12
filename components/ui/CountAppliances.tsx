import prisma from "@/lib/db/prisma";

export default async function CountAssets() {
    const data = await prisma.appliances.findMany();
  
    const appliancesCount = data.length;
  
    return (
      <div>
        <p>{appliancesCount}</p>
      </div>
    );
  }
