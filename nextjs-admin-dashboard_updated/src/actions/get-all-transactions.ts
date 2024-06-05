import axios from "axios"

export const getAllTransactions = async () => {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/transactions`)
        return data
    } catch (error) {
        return []
    }
}