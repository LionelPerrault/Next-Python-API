import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="w-14 flex-none">
          <Sidebar />
        </div>
        <div className="relative flex-1 flex flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <main>
            <div className="mx-auto mt-35 w-full p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
