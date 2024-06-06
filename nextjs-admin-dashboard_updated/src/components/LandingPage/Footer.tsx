import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
const Footer = () => {
    return (
        <>
        <div className="bg-[#F1AFAE] flex justify-between p-30">
            <a href="https://avasproject.com">
                <img src={'https://avasproject.com/wp-content/uploads/2023/05/Ava-Abehsera-Foundation-final-file-02.png'} alt="logo" className="h-[195px]" />
            </a>
            <div className="font-bold text-[#532158] flex gap-10">
                <div>
                    <h1 className="text-2xl text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl">ava@avasproject.com</p>
                    <p className="text-xl">212 - 941 - 6456</p>
                    <p className="text-xl">433 Broadway, NY 10016</p>
                    <span className="flex gap-2 mt-4 text-white">
                        <Twitter size={35} className="bg-[#532158] p-2 rounded-full" />
                        <Facebook size={35} className="bg-[#532158] p-2 rounded-full" />
                        <Instagram size={35} className="bg-[#532158] p-2 rounded-full" />
                    </span>
                </div>
                <div>
                    <h1 className="text-2xl text-white mb-4">
                        We Make Big Changes
                    </h1>
                    <p className="text-[#EAC7E6]">We&apos;re curious, passionate, and</p>
                    <p className="text-[#EAC7E6]">committed to helping nonprofits</p>
                    <p className="text-[#EAC7E6]">learn and grow. Donate now!</p>
                    <Link href={'/donate'}>
                        <Button variant={"outline"} size={"lg"} className="border-2 border-[#501F54] rounded-full py-6 text-[#501F54] bg-transparent hover:bg-[#501F54] hover:text-white duration-500 mt-4 font-bold">
                            DONATE NOW ❤️
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="bg-[#000000] text-white px-30 py-5 flex justify-between">
            <p>Terms of use | Privacy Environmental Policy</p>
            <p>Copyright © 2024 The AVA Abehsera Project.  All Rights Reserved.</p>
        </div>
        </>
    );
}

export default Footer;