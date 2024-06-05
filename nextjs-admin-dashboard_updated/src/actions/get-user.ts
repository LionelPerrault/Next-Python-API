import axios from "axios";

export const getUser = async (id: string) => {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/get?id=${id}`);
        return data;
    } catch (error) {
        return null;
    }
}