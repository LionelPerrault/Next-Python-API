import Navbar from "@/components/LandingPage/Navbar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import CheckoutForm from "@/components/Stripe/CheckoutForm";
import { Separator } from "@/components/ui/separator";

const page = () => {
    const cards = [
        {
            href: "",
            img: "https://avasproject.com/wp-content/uploads/2023/05/New-Project-1-200x200.jpg",
            title: "Chai Lifeline"
        },
        {
            href: "",
            img: "",
            title: "Shabbat Angels"
        },
        {
            href: "",
            img: "https://avasproject.com/wp-content/uploads/2023/06/lng-200x200.png",
            title: "Love N Groceries"
        },
        {
            href: "",
            img: "",
            title: "Ahava Baby"
        },
        {
            href: "",
            img: "https://avasproject.com/wp-content/uploads/2023/06/avaround-200x200.png",
            title: "Avas Project"
        },
        {
            href: "",
            img: "",
            title: "Fountain of Kindness"
        },
        {
            href: "",
            img: "https://avasproject.com/wp-content/uploads/2023/06/New-Project-200x200.jpg",
            title: "Avas Project"
        },
        {
            href: "",
            img: "",
            title: "SBH"
        },
        {
            href: "",
            img: "https://avasproject.com/wp-content/uploads/2023/06/tsf-1-200x200.png",
            title: "The Safe Foundation"
        },
        {
            href: "",
            img: "https://avasproject.com/wp-content/uploads/2023/06/YelloHouse-200x200.png",
            title: "The Yellow House"
        },
        {
            href: "",
            img: "",
            title: "A Giving Hand"
        },
        {
            href: "",
            img: "https://avasproject.com/wp-content/uploads/2023/06/habayit-200x200.png",
            title: "Habayit"
        },
        {
            href: "",
            img: "https://avasproject.com/wp-content/uploads/2023/06/MKF-200x200.png",
            title: "Michael Kameo Foundation"
        },
        {
            href: "",
            img: "https://avasproject.com/wp-content/uploads/2023/06/ohrnavaa-200x200.png",
            title: "Ohr Naava"
        },
        {
            href: "",
            img: "https://avasproject.com/wp-content/uploads/2023/06/ECBF2-200x200.png",
            title: "Ezra Cornman Fund"
        },
        {
            href: "",
            img: "",
            title: "Semahot"
        },
        {
            href: "",
            img: "https://avasproject.com/wp-content/uploads/2023/06/BIK4FRIENDSHIP-200x200.png",
            title: "Bike 4 Friendship"
        },
        {
            href: "",
            img: "",
            title: "A Time"
        },
        {
            href: "",
            img: "",
            title: "Rccs"
        },
    ]
    return (
        <div>
            <Navbar />
            <div>
                <div className="bg-[url('https://avasproject.com/wp-content/uploads/2023/06/ava2.png')] bg-cover bg-no-repeat h-[396px] bg-center flex justify-center items-center text-3xl text-white font-semibold">
                    DONATE
                </div>
                <div className="mt-20 px-45">
                    <h1 className="text-2xl font-semibold text-zinc-600">Ava&apos;s GPT</h1>
                    <Separator className="border-2 my-4 rounded-full" />
                    <CheckoutForm />
                </div>
                <div className="my-10 flex flex-col items-center justify-center">
                    <h1>ORGANIZATIONS</h1>
                    <h3 className="text-2xl font-semibold">FRIENDS & PARTNERS</h3>
                    <div className="grid grid-cols-5 gap-5 px-16 mt-4">
                        {cards.map((card) => (
                            <Card key={card.title} className="space-y-2">
                                <CardContent className="flex flex-col items-center justify-center">
                                    <Link href={card.href}>
                                        <img src={card.img} alt="" />
                                    </Link>
                                    <CardTitle className="text-center">
                                        <Link href={card.href}>
                                            {card.title}
                                        </Link>
                                    </CardTitle>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;