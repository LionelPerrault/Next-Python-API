import Navbar from "@/components/LandingPage/Navbar";
import SignIn from "./(auth)/signin/page";
import Footer from "@/components/LandingPage/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <SignIn />
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
