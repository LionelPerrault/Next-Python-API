"use client"
import Chat from "@/components/Chat/ChatCard";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import FilterTab from "./FilterTab";
import { ICard } from "@/types/card";
  
  const filters = [
    { id: 0, name: "All" },
    { id: 1, name: "Not Read" },
    { id: 2, name: "Completed" },
    { id: 3, name: "Reassigned" },
    { id: 4, name: "Read" },
  ];

const ChatList = ({cards}:{cards:ICard[]}) => {
    const [filterType, setFilterType] = useState(0)

  const filterData = filterType == 0 ? cards : cards.filter((e) => e.type === filterType)
    return (
        <div className="basis-1/4 flex flex-col bg-[#EFF2F8] max-h-screen" >
            {/* Search Bar */}
            <div className="p-5">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <BsSearch />
                    </span>
                    <input
                        className="ps-8 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md 
                  py-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search"
                        type="text"
                        name="search"
                    />
                </div>
            </div>
            <div className="px-3 item-center pb-3">
                {filters.map((e) => (
                    <FilterTab
                        key={e.id}
                        selected={filterType === e.id}
                        onClick={() => setFilterType(e.id)}
                        label={e.name}
                    />
                ))}
            </div>
            {/* Cards List */}
            <Chat data={filterData} />
        </div>
    );
}

export default ChatList;