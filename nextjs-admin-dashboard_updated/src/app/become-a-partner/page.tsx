import Navbar from "@/components/LandingPage/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
    return (
        <div>
            <Navbar />
            <main className="flex justify-center flex-col py-20 px-40">
                <div>
                    <div className="text-zinc-500">
                        <b>Ava Abehsera was a beautiful soul who loved to do Chessed. After her passing, her uncle Edan decided to create Ava&apos;s Project. In short, Ava is a phone number that anyone can text at any time, 24/7. She is an Artificial Intelligence that is designed to learn and help Jews in need of any Chessed. Any request received is then sent out to the appropriate organization right away who can then get involved and help the user with what&apos;s needed. For example; a struggling mom in need of a Shabbat meal, a sick child who has no one to turn to, or a boy who needs a big brother to walk him to shul, etc. Ava can be trained for any purpose and connect with any organization. She is a great source of help for people in need when no one is around to help them. </b>
                        <br />
                        <br />
                        <b>If you received this form, we&apos;d like to add your organization. Please fill out to the best of your ability. Whatever is </b><span><b>inserted</b></span><b> will </b><span><b>generate</b></span><b> how Ava answers a user. For more information, email us at </b><a href="mailto:ava@avasproject.com"><span className="text-[#F78DA7] hover:text-black">ava@avasproject.com</span></a><span>.</span>
                    </div>
                </div>
                <Card className="mt-10">
                    <CardHeader>
                        <CardTitle className="text-3xl">Become A Partner</CardTitle>
                        <CardDescription>
                            Your email address will not be published. Required fields are marked *
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col space-y-4">
                            <label>
                                What is the full name of your organization?(required)
                                <br />
                                <Input size={40} aria-required="true" aria-invalid="false" value="" type="text" name="your-organization" />
                            </label>
                            <label>
                                Mission statement of organization ?(required)
                                <br />
                                <Input size={40} aria-required="true" aria-invalid="false" value="" type="text" name="mission-statement" />
                            </label>
                            <label>
                                Contact Email (required)
                                <br />
                                <Input size={40} aria-required="true" aria-invalid="false" value="" type="email" name="your-email" />
                            </label>
                            <label>
                                Contact Phone Number (required)
                                <br />
                                <Input size={40} aria-required="true" aria-invalid="false" value="" type="tel" name="tel-592" />
                            </label>
                            <label> What services does your organization offer?<br />
                                <Input size={40} aria-invalid="false" value="" type="text" name="services-offered" />
                            </label>
                            <label> What are your trigger words?
                                <br />
                                <Textarea cols={40} rows={10} aria-invalid="false" name="trigger-words" />
                            </label>
                            <label>
                                Link Or Contact To Volunteer
                                <br />
                                <Input size={40} aria-invalid="false" value="" type="text" name="services-offered" />
                            </label>
                            <label>
                                What email/ number should be contacted for a user who needs help? *(required)
                                <br />
                                <Input size={40} aria-invalid="false" value="" type="text" name="help-contact" />
                            </label>

                            <label> How can people donate? (Website, Zelle, Venmo, website link, etc.) (required)
                                <br />
                                <Input size={40} aria-invalid="false" value="" type="text" name="accepted-payment-method" />
                            </label>

                            <label>What location do you service? (required)<br />
                                <Input size={40} aria-invalid="false" value="" type="text" name="locations-services" />
                            </label>

                            <label>Personal phone number &amp; email address.(required)
                                <br />
                                <Input size={40} aria-invalid="false" value="" type="text" name="personal-contact" />
                            </label>

                            <label className="flex flex-col gap-2">Would you like to be in a WhatsApp group chat with our board, or do you prefer email?
                                <br />
                                <label className="space-x-2">
                                    <Checkbox value={"Whatsapp"} />
                                    <span>WhatsApp</span>
                                </label>
                                <label className="space-x-2">
                                    <Checkbox value={"E-mail"} />
                                    <span>E-Mail</span>
                                </label>
                            </label>
                            <Button type="submit" className="mt-2 bg-[#F78DA7] rounded-full max-w-xs">Submit</Button>
                        </form>
                    </CardContent>
                </Card>
            </main >
        </div>
    );
}

export default page;