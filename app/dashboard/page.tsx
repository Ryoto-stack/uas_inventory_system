import AssetTable from '@/components/AssetTable'
import { Dashboard } from '@/components/homepage/dashboard'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { PackageIcon, File, Keyboard, Droplets, Inbox, ArmchairIcon, CarIcon, MicrowaveIcon, Users } from 'lucide-react'
import React from 'react'
import CountAssets from '../../components/ui/CountAssets'
import CountLicense from '@/components/ui/CountLicense'
import CountAccessories from '@/components/ui/CountAccessories'
import CountConsumables from '@/components/ui/CountConsumables'
import CountComponent from '@/components/ui/CountComponent'
import CountFurniture from '@/components/ui/CountFurniture'
import CountVehicle from '@/components/ui/CountVehicle'
import CountAppliances from '@/components/ui/CountAppliances'



export default function page() {
  return (
<>
    <div className='w-full h-screen'>  
      <Dashboard>
      <AssetTable/>
      </Dashboard>
      <div className="grid pl-44 gap-3 pr-4 lg:grid-cols-9">
    <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">Assets</CardTitle>
                <PackageIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              
              <CardContent>
                <div className="text-2xl font-bold"><CountAssets/></div>
                <a
                  href="/assets"
                  className="text-sm underline-offset-8 underline text-primary font-bold "
                >
                  View All
                </a>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">Licenses</CardTitle>
                <File className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6"><CountLicense/></div>
              <a
                href="/license"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">
                  Accessories
                </CardTitle>
                <Keyboard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6"><CountAccessories/></div>
              <a
                href="/accessories"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">
                  Consumables
                </CardTitle>
                <Droplets className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6"><CountConsumables/></div>
              <a
                href="/consumables"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">
                  Component
                </CardTitle>
                <Inbox className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6"><CountComponent/></div>
              <a
                href="/component"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">
                  Furnitures
                </CardTitle>
                <ArmchairIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6"><CountFurniture/></div>
              <a
                href="/furniture"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">Vehicles</CardTitle>
                <CarIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6"><CountVehicle/></div>
              <a
                href="/vehicle"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">
                  Appliances
                </CardTitle>
                <MicrowaveIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6"><CountAppliances/></div>
              <a
                href="/appliance"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6">123</div>
              <a
                href="/users"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
                </a>
            </Card>
            </div>
            <footer className="flex mt-4 items-center justify-center">
          <h1>&#169; Created by the OG OJT, happy coding &#128521;</h1>
        </footer>
    </div>
    </>
  )
}
