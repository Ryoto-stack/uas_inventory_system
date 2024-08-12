"use client";
import React, { useState, useEffect } from "react";
import {
  CreateLicenseSchema,
  createLicenseSchema,
} from "@/lib/validation/license";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Nav from "@/app/sidenav/Nav";

export default function CreateLicense() {
  const [reviewMessage, setReviewMessage] = useState<React.ReactNode>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const form = useForm<CreateLicenseSchema>({
    resolver: zodResolver(createLicenseSchema),
    defaultValues: {
      softwareName: "",
      category: "",
      productKey: "",
      manufacturer: "",
      licensedto_name: "",
      licensedto_email: "",
      purchaseDate: "",
      purchaseCost: "",
      expirationDate: "",
    },
  });
  async function handleOnSubmit(input: CreateLicenseSchema) {
    try {
      const reviewMessage = (
        <div>
          <p>
            <strong>Software Name:</strong> {input.softwareName}
          </p>
          <p>
            <strong>Category:</strong> {input.category}
          </p>
          <p>
            <strong>Product Key:</strong> {input.productKey}
          </p>
          <p>
            <strong>Manufacturer:</strong> {input.manufacturer}
          </p>
          <p>
            <strong>Licensed To_Name:</strong> {input.licensedto_name}
          </p>
          <p>
            <strong>Licensed To_Email::</strong> {input.licensedto_email}
          </p>
          <p>
            <strong>Purchase Date:</strong> {input.purchaseDate}
          </p>
          <p>
            <strong>Purchase Cost:</strong> {input.purchaseCost}
          </p>
          <p>
            <strong>Expiration Date:</strong> {input.expirationDate}
          </p>
        </div>
      );
      setReviewMessage(reviewMessage);
      setIsConfirmed(true);
    } catch (error) {
      console.error("Error during form submission:", error);
      // Handle any errors here, if necessary
    }
  }
  async function confirmSubmission(input: CreateLicenseSchema) {
    try {
      const response = await fetch("/api/license", {
        method: "POST",
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw Error("Status code: " + response.status);
      } else {
        setIsConfirmed(false); // Close the modal first
        setShowAlert(true); // Show the alert
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      // Handle any errors here, if necessary
    }
  }
  function handleCancel() {
    setIsConfirmed(false);
  }

  function handleAlertOK() {
    setShowAlert(false); // Hide the alert
    window.location.reload(); // Reload the window
  }
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (showAlert) {
      timeoutId = setTimeout(() => {
        setShowAlert(false); // Hide the alert
        window.location.reload(); // Reload the window
      }, 10000); // 10 seconds
    }

    return () => clearTimeout(timeoutId);
  }, [showAlert]);

  return (
    <div className="flex min-h-screen w-full flex-col ">
      <Nav />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="flex items-center justify-center  py-10 ml-56 mr-56 bg-white rounded-md">
          <div className="mx-auto grid w-[600px] gap-6">
            <h1 className="text-3xl font-bold">Create New License</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                <FormField
                  control={form.control}
                  name="softwareName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Software Name</FormLabel>
                      <FormControl>
                        <Input placeholder="...." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Textarea placeholder="...." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productKey"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Key </FormLabel>
                      <FormControl>
                        <Textarea placeholder="...." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="manufacturer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Manufacturer</FormLabel>
                      <FormControl>
                        <Textarea placeholder="...." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="licensedto_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Licensed to (Name)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="...." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="licensedto_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Licensed to (Email)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="...." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="purchaseDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Purchase Date</FormLabel>
                      <FormControl>
                        <Textarea placeholder="...." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="purchaseCost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Purchase Cost</FormLabel>
                      <FormControl>
                        <Textarea placeholder="...." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="expirationDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expiration Date</FormLabel>
                      <FormControl>
                        <Textarea placeholder="...." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className=" mt-4" type="submit">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </main>
      </div>
        {/* Modal for review message and confirmation */}
        {isConfirmed && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 fixed inset-0"></div>
          <div className="bg-white p-8 rounded-md z-50">
            <h2 className="text-lg font-semibold mb-4">
              Please review the details.
            </h2>
            <p>{reviewMessage}</p>
            <div className="mt-5 flex justify-center">
              <button
                onClick={handleCancel}
                className="px-4 py-2 mr-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={() => confirmSubmission(form.getValues())}
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 fixed inset-0"></div>
          <div className="bg-white p-8 rounded-md z-50">
            <h2 className="text-lg font-semibold mb-4">Successfully Added!</h2>
            <p className="mb-4">This window will reload after 10 seconds</p>
            <button
              onClick={handleAlertOK}
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
