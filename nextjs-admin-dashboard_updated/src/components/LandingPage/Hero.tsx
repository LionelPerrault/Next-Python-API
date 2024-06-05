import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Waves from "../../../public/images/waves.svg";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Footer from "./Footer";

const Hero = () => {
    const cards = [
        {
            title: "Become a Partner",
            image: "https://avasproject.com/wp-content/uploads/2021/06/home11-i1-1.png",
            link: "/become-a-partner"
        },
        {
            title: "Our Team",
            image: "https://avasproject.com/wp-content/uploads/2021/06/home11-i2-1.png",
            link: "/team"
        },
        {
            title: "Donate Now",
            image: "https://avasproject.com/wp-content/uploads/2021/06/home11-i3-1.png",
            link: "/donate"
        },
        {
            title: "Volunteer",
            image: "https://avasproject.com/wp-content/uploads/2021/06/home11-i4-1.png",
            link: "/volunteer"
        },
    ];
    return (
        <div className="bg-[#f78da7] text-white h-screen">
            <section className="w-full flex justify-between p-10">
                <div className="max-w-2xl p-5 pl-25 space-y-4">
                    <h1 className="text-4xl font-bold font-amatic">
                        THE AVA ABEHSERA PROJECT
                    </h1>
                    <h3 className="text-5xl font-quicksand font-bold">
                        Who is Ava?
                    </h3>
                    <p className="font-nunito font-semibold text-lg">
                        Ava Abehsera was a beautiful soul who loved to do Chessed. After her passing, her uncle Edan decided to create Ava&apos;s Project. In short, Ava is a phone number that anyone can text at any time, 24/7. She is an Artificial Intelligence that is designed to learn and help Jews in need of any Chessed. Any request received is then sent out to the appropriate organization right away who can then get involved and help the user with what&apos;s needed. She is a great source of help for people in need when no one is around to help them.
                    </p>
                    <Link href={'sms:+17163375144'}>
                        <Button variant={"outline"} size={"lg"} className="rounded-full bg-[#F7DFF5] text-[#501F54] py-6 hover:bg-[#501F54] hover:text-white duration-500 font-bold mt-10">
                            TEXT AVA
                        </Button>
                    </Link>
                </div>
                <div style={{ transitionDelay: "1200ms" }}>
                    <img decoding="async" src="https://avasproject.com/wp-content/uploads/2023/06/output-onlinegiftools.gif" alt="output-onlinegiftools" className="w-full align-bottom" />
                </div>
            </section>
            <Image src={Waves} alt="" className="absolute w-full h-auto -translate-y-8" />
            <div className="bg-white h-screen mt-30 flex items-center justify-center text-black gap-10">
                <img src="https://avasproject.com/wp-content/uploads/2023/05/home11-3-1.png" alt="home11-3-1" className="w-full max-w-2xl" />
                <div>
                    <h1 className="text-3xl font-bold font-amatic text-[#C9004F]">
                        AVA IS HERE TO HELP
                    </h1>
                    <h3 className="text-4xl font-quicksand font-bold">
                        any chessed, anytime.
                    </h3>
                    <p className="text-zinc-500 font-semibold max-w-lg">
                        Reaching out for help can sometimes be difficult. That&apos;s why we have created this virtual AI to provide a safe and welcoming space where you can seek assistance and guidance in a convenient and confidential manner. AVA is designed to offer a personalized experience tailored to your unique needs.
                    </p>
                    <ul className="mt-4 space-y-4">
                        <li>
                            <h1 className="text-xl font-bold flex items-center">
                                <Check className="text-[#C9004F] mr-2" /> We Use Donations to Help People
                            </h1>
                            <p className="text-zinc-500 font-semibold max-w-lg pl-10">
                                Our mission is to provide support, resources, and assistance to those facing various challenges.
                            </p>
                        </li>
                        <li>
                            <h1 className="text-xl font-bold flex items-center">
                                <Check className="text-[#C9004F] mr-2" /> Private and confidential.
                            </h1>
                            <p className="text-zinc-500 font-semibold max-w-lg pl-10">
                                Private and confidential.
                                We adhere to strict data protection protocols, and any information you share with us will be treated with the utmost care and respect.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#f78da7] h-screen flex items-center p-10 gap-10">
                <div className="max-w-2xl p-5 pl-25 space-y-4 text-black">
                    <h1 className="text-3xl font-bold font-amatic text-[#C9004F]">
                        EASY FUND DONATIONS
                    </h1>
                    <h3 className="text-4xl font-quicksand font-bold">
                        The Mission and Goals for Our Charity Program
                    </h3>
                    <p className="font-nunito font-semibold text-lg text-zinc-500">
                        Ultricies lacus turpis tincidunt aliquet. Eget nunc lobortis mattis aliquam faucibus purus in. Bibendum est ultricies integer quis auctor elit sed. Ultrices tincidunt arcu non sodales neque.
                    </p>
                    <div className="flex items-center gap-10">
                        <Link href={'/donate'}>
                            <Button variant={"outline"} size={"lg"} className="border-2 border-[#501F54] rounded-full py-6 text-[#501F54] bg-transparent hover:bg-[#501F54] hover:text-white duration-500 font-bold mt-4">
                                DONATE NOW ❤️
                            </Button>
                        </Link>
                        <img src="https://avasproject.com/wp-content/uploads/2021/06/home11-1.png" alt="with love" className="max-w-60" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    {cards.map((card, index) => (
                        <Link href={card.link} key={index}>
                            <Card className="flex justify-center flex-col items-center pt-5 aspect-square hover:-translate-y-5 transition-all duration-500">
                                <CardContent>
                                    <img src={card.image} alt="" />
                                </CardContent>
                                <CardHeader>
                                    <CardTitle>
                                        {card.title}
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="bg-[#D18182] h-[20vh]" />
            <div className="bg-white h-[20vh]" />
            <Footer />
        </div >
    );
}

export default Hero;