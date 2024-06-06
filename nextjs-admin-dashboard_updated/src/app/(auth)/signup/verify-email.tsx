import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const VerifyEmail: React.FC = () => {
  const router = useRouter();
  const { token } = router.query;
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (token) {
      verifyEmail();
    }
  }, [token]);

  const verifyEmail = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-email?token=${token}`,
      );
      setMessage(response.data.message);
      toast.success(response.data.message);
    } catch (error) {
      setMessage("Email verification failed. Please try again.");
      toast.error("Email verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border border-stroke bg-white p-8 shadow-default">
        <h1 className="text-2xl font-bold text-black">
          {loading ? "Verifying..." : message}
        </h1>
        {!loading && (
          <div className="mt-4">
            <button
              onClick={() => router.push("/signin")}
              className="w-full rounded-lg border border-primary bg-primary py-2 text-white"
            >
              Go to Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
