import React from "react";
import { Button } from "@/components/ui/button";
import {
  PackageIcon,
  File,
  Keyboard,
  Droplets,
  Inbox,
  ArmchairIcon,
  CarIcon,
  MicrowaveIcon,
  Link,
} from "lucide-react";

export function Side() {
  return (
    <div className=" max-h-max h-screen">
      <div>
        <p>Inventory</p>
        <a href="/assets">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <PackageIcon className="mr-2 h-4 w-4" />
            Assets
          </Button>
        </a>
        <a href="/license">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <File className="mr-2 h-4 w-4" />
            License
          </Button>
        </a>
        <a href="/accessories">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Keyboard className="mr-2 h-4 w-4" />
            Accessories
          </Button>
        </a>
        <a href="/consumables">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Droplets className="mr-2 h-4 w-4" />
            Consumables
          </Button>
        </a>
        <a href="/component">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Inbox className="mr-2 h-4 w-4" />
            Component
          </Button>
        </a>
        <a href="/furniture">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <ArmchairIcon className="mr-2 h-4 w-4" />
            Furnitures
          </Button>
        </a>
        <a href="/vehicles">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <CarIcon className="mr-2 h-4 w-4" />
            Vehicles
          </Button>
        </a>
        <a href="/appliances">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <MicrowaveIcon className="mr-2 h-4 w-4" />
            Appliances
          </Button>
        </a>
      </div>
      <div>
        <p>Create New</p>
        <a href="/createpages/createassets">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <PackageIcon className="mr-2 h-4 w-4" />
            Assets
          </Button>
        </a>
        <a href="/createpages/createlicense">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <File className="mr-2 h-4 w-4" />
            License
          </Button>
        </a>
        <a href="/createpages/createaccessories">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Keyboard className="mr-2 h-4 w-4" />
            Accessories
          </Button>
        </a>
        <a href="/createpages/createconsumables">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Droplets className="mr-2 h-4 w-4" />
            Consumables
          </Button>
        </a>
        <a href="/createpages/createcomponent">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Inbox className="mr-2 h-4 w-4" />
            Component
          </Button>
        </a>
        <a href="/createpages/createfurniture">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <ArmchairIcon className="mr-2 h-4 w-4" />
            Furnitures
          </Button>
        </a>
        <a href="/createpages/createvehicle">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <CarIcon className="mr-2 h-4 w-4" />
            Vehicles
          </Button>
        </a>
        <a href="/createpages/createappliances">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <MicrowaveIcon className="mr-2 h-4 w-4" />
            Appliances
          </Button>
        </a>
      </div>
    </div>
  );
}