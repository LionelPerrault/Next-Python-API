import Footer from "@/components/LandingPage/Footer";
import Navbar from "@/components/LandingPage/Navbar";

const page = () => {
    const images = [
        "https://avasproject.com/wp-content/uploads/2023/06/AdobeStock_539298435-scaled-2560x2560.jpeg",
        "https://avasproject.com/wp-content/uploads/2023/06/AdobeStock_301970826-1-scaled-2560x2560.jpeg",
        "https://avasproject.com/wp-content/uploads/2022/06/home13-2-772x772.png",
        "https://avasproject.com/wp-content/uploads/2022/06/home13-g-1-864x864.jpg"
    ];
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center py-10 px-30 gap-10">
                <h1 className="font-amatic font-bold text-4xl text-[#C9004F]">GALLARY</h1>
                <div className="grid grid-cols-4 gap-3 mb-10">
                    {images.map((image, index) => (
                        <img src={image} alt="" key={index} className="rounded-lg aspect-square" />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default page;