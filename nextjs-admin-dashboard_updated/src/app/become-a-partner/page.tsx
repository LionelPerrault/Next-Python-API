import BecomeAPartnerClient from "./BecomeAPartnerClient";

import Navbar from "@/components/LandingPage/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col justify-center px-40 py-20">
        <div>
          <div className="text-zinc-500">
            <b>
              Ava Abehsera was a beautiful soul who loved to do Chessed. After
              her passing, her uncle Edan decided to create Ava&apos;s Project.
              In short, Ava is a phone number that anyone can text at any time,
              24/7. She is an Artificial Intelligence that is designed to learn
              and help Jews in need of any Chessed. Any request received is then
              sent out to the appropriate organization right away who can then
              get involved and help the user with what&apos;s needed. For
              example; a struggling mom in need of a Shabbat meal, a sick child
              who has no one to turn to, or a boy who needs a big brother to
              walk him to shul, etc. Ava can be trained for any purpose and
              connect with any organization. She is a great source of help for
              people in need when no one is around to help them.{" "}
            </b>
            <br />
            <br />
            <b>
              If you received this form, we&apos;d like to add your
              organization. Please fill out to the best of your ability.
              Whatever is{" "}
            </b>
            <span>
              <b>inserted</b>
            </span>
            <b> will </b>
            <span>
              <b>generate</b>
            </span>
            <b> how Ava answers a user. For more information, email us at </b>
            <a href="mailto:ava@avasproject.com">
              <span className="text-[#F78DA7] hover:text-black">
                ava@avasproject.com
              </span>
            </a>
            <span>.</span>
          </div>
        </div>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle className="text-3xl">Become A Partner</CardTitle>
            <CardDescription>
              Your email address will not be published. Required fields are
              marked *
            </CardDescription>
          </CardHeader>

          <CardContent>
            <BecomeAPartnerClient />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default page;
