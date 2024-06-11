import { authOptions } from "@/lib/authOptions";
import axios from "axios";
import { getServerSession } from "next-auth";

export const getAllCards = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return [];
    }
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/cards`,
      {
        headers: {
          Authorization: session.user.id,
        },
      },
    );
    // console.log("cards data >> ", data);
    return data;
  } catch (e) {
    console.log("error >> ", e);
    return [];
  }
};
