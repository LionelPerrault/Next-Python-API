import PersonInfoTab from "@/components/Chat/PersonInfoTab";
import Messages from "@/components/Chat/Messages";
import ChatList from "@/components/Chat/ChatList";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Header from "@/components/Header";
import { getAllCards } from "@/actions/get-all-cards";
import { getUser } from "@/actions/get-user";

interface ChatPageProps {
  searchParams: {
    user: string;
  }
}

const ChatPage: React.FC<ChatPageProps> = async ({
  searchParams: {
    user
  }
}) => {
  const session = await getServerSession(authOptions)
  if (session?.user.role !== "super-admin") {
    return (
      <>
        <Header />
        <Messages role="user" />
      </>
    )
  }
  const cards = await getAllCards()
  const userData = user ? await getUser(user) : null
  return (
    <div className="flex flex-row w-full">
      {/* ChatList */}
      <ChatList cards={cards} />
      {/* Messages*/}
      {user ?
        <>
          <Messages user={userData} />
          <PersonInfoTab user={userData} />
        </>
        :
        <div className="h-screen flex-1 flex items-center justify-center">
          <span className="text-2xl text-slate-500">Select a user to start chat</span>
        </div>
      }
    </div>
  );
};

export default ChatPage;