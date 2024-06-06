"use client";

import React, { useState, FormEvent } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DollarSign } from "lucide-react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import PaypalButton from "./PaypalButton";

const CheckoutForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("100");

  const donationValues = ["10", "25", "50", "100", "250", "1"];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const session = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/create-checkout-session`,
        {
          priceId: parseInt(value),
        },
      );
      const url = session.data.url;
      router.push(url);
    } catch (error) {
      toast.error("Payment failed, Please try again");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mb-6 flex h-15 w-45 items-center gap-3 rounded-full p-2 shadow-lg">
        <span className="flex aspect-square h-full items-center justify-center rounded-full bg-[#f78da7] text-white">
          <DollarSign size={24} />
        </span>
        <input
          name="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onEmptied={(e) => setValue("100")}
          type="tel"
          className="h-10 w-25 text-xl font-semibold text-zinc-600 focus:border-transparent focus:outline-none focus:ring-0"
        />
      </div>
      <div className="flex items-center gap-2 font-bold">
        {donationValues.map((v) => (
          <Button
            variant={"outline"}
            key={v}
            onClick={() => setValue(v)}
            className={cn(
              v == value &&
                "bg-black text-white hover:bg-black hover:text-white",
              "w-20 rounded-full border-2  border-zinc-300 duration-500 hover:text-[#f78da7]",
            )}
          >
            ${v}
          </Button>
        ))}
        <Button
          variant={"outline"}
          className={cn(
            !donationValues.includes(value) &&
              "bg-black text-white hover:bg-black hover:text-white",
            "rounded-full border-2 border-zinc-300  duration-500 hover:text-[#f78da7]",
          )}
        >
          CUSTOM AMOUNT
        </Button>
      </div>
      <h1 className="mt-8 text-2xl font-semibold text-zinc-600">
        Personal Info
      </h1>
      <Separator className="my-4 rounded-full border-2" />
      <div className="grid grid-cols-2 gap-4">
        <label>
          First Name <span className="text-red">*</span>
          <Input placeholder="John" className="h-15 w-full rounded-full px-6" />
        </label>
        <label>
          Last Name
          <Input placeholder="Doe" className="h-15 w-full rounded-full px-6" />
        </label>
        <label className="col-span-2">
          Email <span className="text-red">*</span>
          <Input
            placeholder="Email"
            className="h-15 w-full rounded-full px-6"
          />
        </label>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <Image
          src={"/images/logo/stripe.svg"}
          width={180}
          height={40}
          alt="stripe"
        />
        <p className="font-bold text-zinc-600">
          Donate quickly and securely with Stripe
        </p>
        <div className="mt-5 text-center">
          <span className="font-bold text-zinc-600">How it works:</span> A
          Stripe window will open after you click the Donate Now button where
          you can securely make your donation. You will then be brought back to
          this page to view your receipt.
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <Button
          onClick={handleSubmit}
          variant={"secondary"}
          className="w-full max-w-50 p-6 font-satoshi font-bold"
        >
          <Image
            src={"/images/logo/stripe.svg"}
            width={50}
            height={50}
            alt="stripe"
          />
        </Button>
        <div className="font-satoshi text-xl font-bold">
          Donation Total:
          <span className="ml-1 text-orange-600">${value}</span>
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <PaypalButton value={value} />

        <Image
          className="flex justify-between"
          src={"/images/zelle-qr.png"}
          width={180}
          height={180}
          alt="zelle"
          style={{ height: "180px !important" }}
        />
      </div>
    </>
  );
};

export default CheckoutForm;
