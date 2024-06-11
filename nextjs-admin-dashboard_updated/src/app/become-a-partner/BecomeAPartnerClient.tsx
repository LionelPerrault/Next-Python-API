"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormValues = {
  organization: string;
  missionStatement: string;
  email: string;
  phone: string;
  services: string;
  triggerWords: string;
  volunteerContact: string;
  helpContact: string;
  paymentMethod: string;
  location: string;
  personalContact: string;
  communicationPreference: string;
};

type FormErrors = {
  organization: boolean;
  missionStatement: boolean;
  email: boolean;
  phone: boolean;
  helpContact: boolean;
  paymentMethod: boolean;
  location: boolean;
  personalContact: boolean;
};

const BecomeAPartnerClient = () => {
  const initialFormValues: FormValues = {
    organization: "",
    missionStatement: "",
    email: "",
    phone: "",
    services: "",
    triggerWords: "",
    volunteerContact: "",
    helpContact: "",
    paymentMethod: "",
    location: "",
    personalContact: "",
    communicationPreference: "",
  };

  const [isloading, setIsloading] = useState<boolean | undefined>(false);
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const [formErrors, setFormErrors] = useState<FormErrors>({
    organization: false,
    missionStatement: false,
    email: false,
    phone: false,
    helpContact: false,
    paymentMethod: false,
    location: false,
    personalContact: false,
  });

  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null,
  );

  const checkErrors = () => {
    const errors = {
      organization: formValues.organization === "",
      missionStatement: formValues.missionStatement === "",
      email: formValues.email === "",
      phone: formValues.phone === "",
      helpContact: formValues.helpContact === "",
      paymentMethod: formValues.paymentMethod === "",
      location: formValues.location === "",
      personalContact: formValues.personalContact === "",
    };

    setFormErrors(errors);
    return Object.values(errors).some((error) => error);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setSubmissionMessage(null);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: checked ? value : "",
    });
    setSubmissionMessage(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (checkErrors()) {
      setSubmissionMessage(
        "One or more fields have an error. Please check and try again.",
      );
      return;
    }

    try {
      setIsloading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/organizations`,
        formValues,
      );

      console.log("formValues >>", formValues);
      console.log("response >>", response);
      setSubmissionMessage("Thank you for your message. It has been sent.");
    } catch (error) {
      setSubmissionMessage(
        "Failed to submit the form. Please try again later.",
      );
    } finally {
      setIsloading(false);
      setFormValues(initialFormValues);
    }
  };

  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={handleSubmit}
      method="post"
      data-status="init"
    >
      <label>
        What is the full name of your organization? (required)
        <br />
        <Input
          size={40}
          aria-required="true"
          aria-invalid={formErrors.organization}
          value={formValues.organization}
          type="text"
          name="organization"
          onChange={handleChange}
          className={`rounded-3xl ${formErrors.organization ? "border-red-500" : ""}`}
        />
      </label>
      <label>
        Mission statement of organization? (required)
        <br />
        <Input
          size={40}
          aria-required="true"
          aria-invalid={formErrors.missionStatement}
          value={formValues.missionStatement}
          type="text"
          name="missionStatement"
          onChange={handleChange}
          className={`rounded-3xl ${formErrors.missionStatement ? "border-red-500" : ""}`}
        />
      </label>
      <label>
        Contact Email (required)
        <br />
        <Input
          size={40}
          aria-required="true"
          aria-invalid={formErrors.email}
          value={formValues.email}
          type="email"
          name="email"
          onChange={handleChange}
          className={`rounded-3xl ${formErrors.email ? "border-red-500" : ""}`}
        />
      </label>
      <label>
        Contact Phone Number (required)
        <br />
        <Input
          size={40}
          aria-required="true"
          aria-invalid={formErrors.phone}
          value={formValues.phone}
          type="tel"
          name="phone"
          onChange={handleChange}
          className={`rounded-3xl ${formErrors.phone ? "border-red-500" : ""}`}
        />
      </label>
      <label>
        {" "}
        What services does your organization offer?
        <br />
        <Input
          size={40}
          aria-invalid="false"
          value={formValues.services}
          type="text"
          name="services"
          onChange={handleChange}
          className="rounded-3xl"
        />
      </label>
      <label>
        {" "}
        What are your trigger words?
        <br />
        <Textarea
          cols={40}
          rows={10}
          aria-invalid="false"
          name="triggerWords"
          value={formValues.triggerWords}
          onChange={handleChange}
          className="rounded-xl"
        />
      </label>
      <label>
        Link Or Contact To Volunteer
        <br />
        <Input
          size={40}
          aria-invalid="false"
          value={formValues.volunteerContact}
          type="text"
          name="volunteerContact"
          onChange={handleChange}
          className="rounded-3xl"
        />
      </label>
      <label>
        What email/ number should be contacted for a user who needs help?
        (required)
        <br />
        <Input
          size={40}
          aria-invalid={formErrors.helpContact}
          value={formValues.helpContact}
          type="text"
          name="helpContact"
          onChange={handleChange}
          className={`rounded-3xl ${formErrors.helpContact ? "border-red-500" : ""}`}
        />
      </label>

      <label>
        {" "}
        How can people donate? (Website, Zelle, Venmo, website link, etc.)
        (required)
        <br />
        <Input
          size={40}
          aria-invalid={formErrors.paymentMethod}
          value={formValues.paymentMethod}
          type="text"
          name="paymentMethod"
          onChange={handleChange}
          className={`rounded-3xl ${formErrors.paymentMethod ? "border-red-500" : ""}`}
        />
      </label>

      <label>
        What location do you service? (required)
        <br />
        <Input
          size={40}
          aria-invalid={formErrors.location}
          value={formValues.location}
          type="text"
          name="location"
          onChange={handleChange}
          className={`rounded-3xl ${formErrors.location ? "border-red-500" : ""}`}
        />
      </label>

      <label>
        Personal phone number &amp; email address. (required)
        <br />
        <Input
          size={40}
          aria-invalid={formErrors.personalContact}
          value={formValues.personalContact}
          type="text"
          name="personalContact"
          onChange={handleChange}
          className={`rounded-3xl ${formErrors.personalContact ? "border-red-500" : ""}`}
        />
      </label>

      <label className="flex flex-col gap-2">
        Would you like to be in a WhatsApp group chat with our board, or do you
        prefer email?
        <br />
        <label className="space-x-2">
          <Checkbox
            value="WhatsApp"
            checked={formValues.communicationPreference === "WhatsApp"}
            name="communicationPreference"
            onCheckedChange={(checked: boolean) =>
              handleCheckboxChange({
                target: {
                  name: "communicationPreference",
                  value: "WhatsApp",
                  checked: checked as boolean,
                },
              } as unknown as ChangeEvent<HTMLInputElement>)
            }
          />
          <span>WhatsApp</span>
        </label>
        <label className="space-x-2">
          <Checkbox
            value="E-mail"
            checked={formValues.communicationPreference === "E-mail"}
            name="communicationPreference"
            onCheckedChange={(checked: boolean) =>
              handleCheckboxChange({
                target: {
                  name: "communicationPreference",
                  value: "E-mail",
                  checked: checked as boolean,
                },
              } as unknown as ChangeEvent<HTMLInputElement>)
            }
          />

          <span>E-Mail</span>
        </label>
      </label>
      <Button
        type="submit"
        disabled={isloading}
        className="mt-2 max-w-xs rounded-full bg-[#F78DA7]"
      >
        Submit
      </Button>
      {submissionMessage && (
        <div
          className={`mt-4 ${submissionMessage.includes("Thank you") ? "text-green-500" : "text-red-500"}`}
        >
          {submissionMessage}
        </div>
      )}
    </form>
  );
};

export default BecomeAPartnerClient;
