import Link from "next/link";
import { ICard } from "@/types/card";
import PreviewIcon from "../../../public/images/icon/PreviewIcon";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

const ChatCard = (props: { data: ICard[]; }) => {
  const typeArray = ["All", "Not Read", "Completed", "Reassigned", "Read"]
  const badgeArray = ["Urgent", "Not Answered", "Done", "In Progress", "In Progress"]
  const badgeColorArray = ["bg-rose-300 text-red hover:bg-rose-300", "bg-yellow-500 hover:bg-yellow-500", "bg-green-500 hover:bg-green-500", "bg-purple-500 hover:bg-purple-500", "bg-purple-500 hover:bg-purple-500"]
  const colorArray = ["", "text-slate-400 bg-slate-200", "text-slate-400 bg-slate-300", "text-sky-500 border-sky-500", "text-purple-600 border-purple-600"]
  const textArray = ["", "text-slate-400", "text-slate-400", "text-slate-400", ""]
  const bgColorArray = ["bg-white", "bg-slate-300", "bg-slate-200", "bg-slate-100", "bg-white"]
  const data = props.data;
  const searchParams = useSearchParams()
  const user = searchParams.get("user")
  return (
    <div className="col-span-12 border border-stroke py-3 dark:border-strokedark dark:bg-boxdark xl:col-span-4 overflow-auto h-2/3 lg:h-5/6">
      {data && data.map((card: ICard, key: number) => (
        <Link
          href={`?user=${card._id}`}
          className={cn('flex items-center m-2 gap-5 p-5 rounded-md shadow-default hover:bg-zinc-200 dark:hover:bg-meta-4', bgColorArray[card.type], user === card._id && "bg-zinc-200")}
          key={key}
        >
          <div className={`flex flex-col w-full gap-3 ${textArray[card.type]}`}>
            <div className="space-y-3">
              <div className="flex justify-between">
                <Badge className={cn(badgeColorArray[card.type])}>{badgeArray[card.type]}</Badge>
                {card.type !== 0 && (
                  <div className={`flex items-center justify-center rounded-md border px-2 ${colorArray[card.type]}`}>
                    <span className="text-sm font-medium">
                      {typeArray[card.type]}
                    </span>
                  </div>
                )}
              </div>
              <h1 className={`font-bold text-2xl dark:text-white`}>
                {card.name}
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <span className={`flex items-center text-sm dark:text-white ${textArray[card.type]}`}>
                <PreviewIcon className="w-4 h-4 mr-1" /> Preview Messege
              </span>
              <div className="items-center justify-center">
                <span className="text-xs font-medium">
                  {/* {card.time} min */}
                  {new Date(card.time).toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" })}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChatCard;
