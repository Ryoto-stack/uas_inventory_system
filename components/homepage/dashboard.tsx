"use client";
import Link from "next/link";

import Nav from "@/app/sidenav/Nav";

import {
  ArmchairIcon,
  ArrowUpRight,
  CarIcon,
  Droplets,
  File,
  Inbox,
  Keyboard,
  MicrowaveIcon,
  PackageIcon,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";

import Barchart from "@/app/analyticcomponent/barchart";
import { Side } from "@/app/sidenav/side";



export async function Dashboard({ children }: { children: React.ReactNode }) {

  return (
    <div >
    <div className=" w-full">
      <Nav />
      <div className=" absolute">
        <div className="flex justify-center w-40 bg-background px-4 md:px-6 bg-yellow-300 font-bold ">
          <Side />
        </div>
      </div>
      <div>
        <main className="flex flex-1 pl-44 flex-col pr-4 pb-4 md:gap-8 ">
          <div className="grid gap-1 md:grid-cols-2 md:gap-4 lg:grid-cols-9">
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="col-span-2" x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Assets</CardTitle>
                  <CardDescription>
                    Recent Assets from your Inventory
                  </CardDescription>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="ml-auto gap-1 bg-yellow-300 text-neutral-950"
                >
                  <Link href="/assets">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className=" h-96 w-auto rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Model</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Serial</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    {children}
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader>
                <CardTitle>Asset By Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Barchart />
              </CardContent>
            </Card>
          </div>
        </main>
        
      </div>
    </div>
    </div>
  );
}