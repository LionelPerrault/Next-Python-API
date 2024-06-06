"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

const PaypalButton = ({ value }: { value: string }) => {
  const createOrder = async (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: value,
            currency_code: "USD",
          },
        },
      ],
    });
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AXLuXxW9i_Oa2T39mjheZqOaJiAmoOxnNIbHBMNnhj9USL-1-713Y6LZ7bay_xclBAI2ArxXFiNWvUdc",
        currency: "USD",
        buyerCountry: "US",
        enableFunding: "venmo",
      }}
    >
      <PayPalButtons
        style={{
          shape: "rect",
          layout: "vertical",
          label: "donate",
        }}
        createOrder={createOrder}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
