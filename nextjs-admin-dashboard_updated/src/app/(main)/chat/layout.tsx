import Sidebar from "@/components/Sidebar";

export default function DefaultLayout({
  children
}: {
    children: React.ReactNode;
}) {
  
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="w-14 flex-none">
          <Sidebar />
        </div>
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main>
            <div className="mx-auto w-full">
              {children}
            </div>
          </main>
      </div>
      </div>
    </>
  );
}
