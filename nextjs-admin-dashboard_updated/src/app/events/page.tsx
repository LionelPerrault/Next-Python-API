import Footer from "@/components/LandingPage/Footer";
import Navbar from "@/components/LandingPage/Navbar";

const page = () => {
    return (
        <div>
            <Navbar/>
            <div className="h-[50vh] font-bold px-40 py-10">
            You have no events for this month
            </div>
            <Footer/>
        </div>
    );
}

export default page;