"use client";

import React, { useState, FormEvent } from "react";
import {
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
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

  const donationValues = ['10', '25', '50', '100', '250', '1']

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const session = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/create-checkout-session`, {
        priceId: parseInt(value),
      }
      )
      const url = session.data.url;
      router.push(url);
    } catch (error) {
      toast.error("Payment failed, Please try again");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="shadow-lg rounded-full mb-6 w-45 h-15 flex items-center p-2 gap-3">
        <span className="rounded-full h-full aspect-square flex items-center justify-center text-white bg-[#f78da7]">
          <DollarSign size={24} />
        </span>
        <input
          name="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onEmptied={(e) => setValue("100")}
          type="tel"
          className="w-25 h-10 focus:outline-none focus:ring-0 focus:border-transparent text-zinc-600 text-xl font-semibold"
        />
      </div>
      <div className="font-bold flex items-center gap-2">
        {donationValues.map((v) => (
          <Button variant={"outline"} key={v} onClick={() => setValue(v)} className={cn(v == value && "bg-black text-white hover:bg-black hover:text-white", "border-2 border-zinc-300 rounded-full  hover:text-[#f78da7] duration-500 w-20")}>
            ${v}
          </Button>
        ))}
        <Button variant={"outline"} className={cn(!donationValues.includes(value) && "bg-black text-white hover:bg-black hover:text-white", "border-2 border-zinc-300 rounded-full  hover:text-[#f78da7] duration-500")}>
          CUSTOM AMOUNT
        </Button>
      </div>
      <h1 className="text-2xl font-semibold text-zinc-600 mt-8">
        Personal Info
      </h1>
      <Separator className="border-2 my-4 rounded-full" />
      <div className="grid grid-cols-2 gap-4">
        <label>
          First Name <span className="text-red">*</span>
          <Input
            placeholder="John"
            className="w-full rounded-full px-6 h-15"
          />
        </label>
        <label>
          Last Name
          <Input
            placeholder="Doe"
            className="w-full rounded-full px-6 h-15"
          />
        </label>
        <label className="col-span-2">
          Email <span className="text-red">*</span>
          <Input
            placeholder="Email"
            className="w-full rounded-full px-6 h-15"
          />
        </label>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <Image src={'/images/logo/stripe.svg'} width={180} height={40} alt="stripe" />
        <p className="text-zinc-600 font-bold">Donate quickly and securely with Stripe</p>
        <div className="mt-5 text-center">
          <span className="text-zinc-600 font-bold">How it works:</span> A Stripe window will open after you click the Donate Now button where you can securely make your donation. You will then be brought back to this page to view your receipt.
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <Button onClick={handleSubmit} variant={"secondary"} className="font-satoshi p-6 font-bold w-full max-w-50">
        <Image src={'/images/logo/stripe.svg'} width={50} height={50} alt="stripe" />
        </Button>
        <div className="font-satoshi text-xl font-bold">
          Donation Total:
          <span className="text-orange-600 ml-1">
            ${value}
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-2">
      <PaypalButton value={value} />
      <Image src={'/images/zelle-qr.png'} width={180} height={180} alt="zelle" />
      </div>
    </>
  );
};

export default CheckoutForm;
