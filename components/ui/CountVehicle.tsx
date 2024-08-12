import prisma from "@/lib/db/prisma";

export default async function CountAssets() {
    const data = await prisma.vehicle.findMany();
  
    const vehicleCount = data.length;
  
    return (
      <div>
        <p>{vehicleCount}</p>
      </div>
    );
  }
