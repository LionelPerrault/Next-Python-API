import Footer from "@/components/LandingPage/Footer";
import Navbar from "@/components/LandingPage/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center gap-5">
                <img src="https://avasproject.com/wp-content/uploads/2020/08/contacts_01.png" alt="" />
                <div>
                    <h1 className="text-3xl font-amatic font-bold text-[#C9004F]">CONTACT US</h1>
                    <h3 className="text-4xl font-bold my-4">Get in Touch</h3>
                    <p className="text-zinc-500 font-semibold max-w-lg">
                        Thank you for your interest in supporting AVA. Your dedication to making a positive impact on the lives of those in need is truly appreciated. If you have any questions, suggestions, or would like to get involved, we are here to help. Please don&apos;t hesitate to reach out to us through any of the following channels:
                    </p>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-5">
                            <MapPin size={50} className="text-[#F74F22] rounded-full shadow p-3" />
                            <div>
                                <h1 className="text-2xl font-bold">Visit Us</h1>
                                <p className="text-zinc-500 font-semibold">92 Bowery St., New York, NY 10013, USA</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <Mail size={50} className="text-[#F74F22] rounded-full shadow p-3" />
                            <div>
                                <h1 className="text-2xl font-bold">Mail Us</h1>
                                <p className="text-zinc-500 font-semibold">contact@avasproject.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <MapPin size={50} className="text-[#F74F22] rounded-full shadow p-3" />
                            <div>
                                <h1 className="text-2xl font-bold">Call Us</h1>
                                <p className="text-zinc-500 font-semibold">+1 (880) 555 353 505</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Card className="mt-4 shadow px-30">
                    <CardHeader>
                        <CardTitle className="text-3xl">Reach out to us.</CardTitle>
                        <CardDescription>
                            Your email address will not be published. Required fields are marked *
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col space-y-4">

                            <Input size={40} aria-required="true" aria-invalid="false" value="" type="text" name="your-organization" placeholder="Your Name*" />
                            <Input size={40} aria-required="true" aria-invalid="false" value="" type="text" name="mission-statement" placeholder="Your Email*" />
                            <Input size={40} aria-invalid="false" value="" type="text" name="services-offered" placeholder="Website" />
                            <Textarea cols={40} rows={10} aria-invalid="false" name="trigger-words" placeholder="Message..." />

                            <Button type="submit" className="mt-2 bg-[#F78DA7] rounded-full max-w-xs">SEND A MESSAGE</Button>
                        </form>
                    </CardContent>
                </Card>
            <Footer />
        </div >
    );
}

export default page;