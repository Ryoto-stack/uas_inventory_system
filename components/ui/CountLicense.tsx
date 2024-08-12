import prisma from "@/lib/db/prisma";

export default async function CountAssets() {
    const data = await prisma.license.findMany();
  
    const licenseCount = data.length;
  
    return (
      <div>
        <p>{licenseCount}</p>
      </div>
    );
  }
