import { authOptions } from "@/lib/authOptions"
import axios from "axios"
import { getServerSession } from "next-auth"

interface HeaderResponse {
    ava_fees:number | string
    total_users:number | string
}

export const getDashboardHeaders = async () => {
    try{

        const session = await getServerSession(authOptions)
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/ava-fees`,{
            headers: {
                Authorization: session?.user._id
            }
        })
        return response.data as HeaderResponse
    }catch{
        return {
            ava_fees:'--',
            total_users:'--'
        } as HeaderResponse
    }
}
