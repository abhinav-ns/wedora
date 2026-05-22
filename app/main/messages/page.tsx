"use client";

import ConversationCard from "@/components/messages/cards/ConversationCard";

import MessagesHeader from "@/components/messages/layout/MessagesHeader";

import MessagesSearch from "@/components/messages/layout/MessagesSearch";

import { CONVERSATIONS } from "@/constants/messagesData";

export default function MessagesPage() {

  return (

    <main
      className="
        min-h-screen
        bg-[#FAF7F2]

        px-[18px]
        pt-4
        pb-[120px]
      "
    >

      <div className="max-w-[430px] mx-auto">

        <MessagesHeader />

        <MessagesSearch />

        <div className="mt-5 flex flex-col gap-3">

          {CONVERSATIONS.map((item) => (

            <ConversationCard
              key={item.id}
              {...item}
            />

          ))}

        </div>

      </div>

    </main>

  );

}