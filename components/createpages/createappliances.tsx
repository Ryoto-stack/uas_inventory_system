"use client";
import React, { useState, useEffect } from "react";
import {
  CreateAppliancesSchema,
  createAppliancesSchema,
} from "@/lib/validation/appliances";
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

export default function CreateAppliances() {
  const [reviewMessage, setReviewMessage] = useState<React.ReactNode>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const form = useForm<CreateAppliancesSchema>({
    resolver: zodResolver(createAppliancesSchema),
    defaultValues: {
      name: "",
      serial: "",
      category: "",
      location: "",
      purchaseDate: "",
      purchaseCost: "",
    },
  });
  async function handleOnSubmit(input: CreateAppliancesSchema) {
    try {
      const reviewMessage = (
        <div>
          <p>
            <strong>Name:</strong> {input.name}
          </p>
          <p>
            <strong>Serial:</strong> {input.serial}
          </p>
          <p>
            <strong>Category:</strong> {input.category}
          </p>
          <p>
            <strong>Location:</strong> {input.location}
          </p>
          <p>
            <strong>Purchase Date:</strong> {input.purchaseDate}
          </p>
          <p>
            <strong>Purchase Cost:</strong> {input.purchaseCost}
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
  async function confirmSubmission(input: CreateAppliancesSchema) {
    try {
      const response = await fetch("/api/appliances", {
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
        <main className="flex items-center justify-center py-10 ml-56 mr-56 bg-white rounded-md">
          <div className="mx-auto grid w-[600px] gap-6">
            <h1 className="text-3xl font-bold">Create New Appliances</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="serial"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Serial</FormLabel>
                      <FormControl>
                        <Input placeholder="..." {...field} />
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
                        <Textarea placeholder="..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Textarea placeholder="..." {...field} />
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
                <Button type="submit" className=" mt-3">
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
