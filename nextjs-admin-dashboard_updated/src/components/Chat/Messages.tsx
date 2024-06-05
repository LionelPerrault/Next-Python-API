"use client"
import { BsSend } from "react-icons/bs";
import { Badge } from "../ui/badge";
import Message from "./MessageCard";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const Messages = ({ role = "super-admin", user }: { role?: string, user?: any }) => {
    const [content, setContent] = useState("")
    const [messageList, setMessageList] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    const inputRef = useRef<HTMLInputElement | null>(null)
    const session = useSession()
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/gpt/get-chats?id=${role === "super-admin" ? searchParams.get('user') : session.data?.user.id}`)
                setMessageList(data)
                if (user) {
                    await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/gpt/update-read`, {
                        id: session.data?.user.id,
                        userid: user._id
                    })
                    router.refresh()
                }
            } catch {
                setMessageList([])
            }
        }
        fetchMessages()
    }, [searchParams])

    const proceedMessage = async () => {
        try {
            setLoading(true)
            const msg = {
                sender: session.data?.user.id,
                receiver: "gpt",
                message: content,
                created_at: new Date(),
                read_by: [session.data?.user.id]
            }
            setMessageList(prev => [...prev, msg])
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/gpt/chat`,
                {
                    id: session.data?.user.id,
                    query: content,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': "*",
                        'API-Key': 'secret',
                    }
                }
            )

            setMessageList(prev => [...prev, data])
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
            inputRef.current?.focus
        }
    }

    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setContent("")
        if (content.length > 0) {
            proceedMessage();
        }
    }

    return (
        <div className="flex-1 bg-white h-screen">
            <div className={cn(role !== "super-admin" && "pt-35", "flex flex-col px-6 h-screen")}>
                {role === "super-admin" &&
                    <div className="flex-none pt-7 pb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-solid border-b-2 border-[#E9E9E9]">
                        <h2 className="text-title-md2 font-semibold text-black">{user?.name}</h2>
                        <nav>
                            <Badge className="bg-rose-300 text-red hover:bg-rose-300">Urgent</Badge>
                        </nav>
                    </div>
                }
                {/* Show messages here */}
                <Message data={messageList} />
                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="flex-none flex items-center gap-6 pt-3 pb-8 bottom-0">
                    <div className="flex-1 h-14">
                        <input
                            ref={inputRef}
                            className="w-full h-full placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Message..."
                            type="text"
                            name="message"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="flex-none right-0 px-6 py-4 rounded-md bg-slate-600 h-14 flex items-center" disabled={loading || !content}>
                        <BsSend color="white" />
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Messages;