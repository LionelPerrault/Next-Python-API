import { authOptions } from "@/lib/authOptions";
import axios from "axios";
import { getServerSession } from "next-auth";

export const getAllUsers = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return [];
    }
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/get-all`,
      {
        headers: {
          Authorization: session.user.id,
        },
      },
    );
    const data = response.data;
    // console.log("data >> ", data);
    return data;
  } catch {
    return [];
  }
};
