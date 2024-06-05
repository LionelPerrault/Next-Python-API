import Footer from "@/components/LandingPage/Footer";
import Navbar from "@/components/LandingPage/Navbar";

const page = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex items-center justify-center gap-10 py-10">
                <div className="font-bold max-w-xl">
                <h1 className="text-4xl mb-4">What is Ava?</h1>
                <p className="text-zinc-500">
                    Ava Abehsera was a beautiful soul who loved to do Chessed. After her passing, her uncle Edan decided to create AVA. In short, Ava is a phone number that anyone can text at any time, 24/7. She is an Artificial Intelligence that is designed to learn and help Jews in need of any Chessed. Any request received is then sent out to the appropriate organization right away who can then get involved and help the user with what&apo;s needed. For example; a struggling mom in need of a Shabbat meal, a sick child who has no one to turn to, or a boy who needs a big brother to walk him to shul, etc. Ava can be trained for any purpose and connect with any organization. She is a great source of help for people in need when no one is around to help them.
                </p>
                </div>
                <img src="https://avasproject.com/wp-content/uploads/2023/07/IMG_4051.png" alt="" className="max-w-lg rounded-lg" />
            </div>
            <Footer/>
        </div>
    );
}

export default page;