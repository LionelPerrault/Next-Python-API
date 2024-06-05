"use client"

import { stripePromise } from "@/lib/stripe";
import { Elements } from "@stripe/react-stripe-js";

const StripeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Elements stripe={stripePromise}>
            {children}
        </Elements>

    );
}

export default StripeProvider;