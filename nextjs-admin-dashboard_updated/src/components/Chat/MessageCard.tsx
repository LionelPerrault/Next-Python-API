"use client"
import { cn } from "@/lib/utils";
import { IMessage } from "@/types/message";
import ReactMarkdown from 'react-markdown';

const Message = (props: { data: IMessage[]; }) => {
    const data = props.data.slice().reverse();
    return (
        <div className="h-full flex flex-col-reverse gap-2 overflow-y-scroll">
            {data.map((datum, index) => (
                <ReactMarkdown key={index} className={cn(datum.sender === "gpt" ? "me-auto bg-slate-200 rounded-md rounded-bl-none p-3 max-w-100 text-black" : "ms-auto bg-sky-400 rounded-md rounded-br-none p-3 max-w-100 text-white")}>
                    {datum.message}
                </ReactMarkdown>
            ))}
        </div>
    )
}

export default Message;