"use client";

import MessageBubble from "@/components/messages/chat/MessageBubble";

import MessageDate from "@/components/messages/chat/MessageDate";

import TypingIndicator from "@/components/messages/chat/TypingIndicator";

import SystemMessage from "@/components/messages/chat/SystemMessage";

import MessageInput from "@/components/messages/input/MessageInput";

import {
  ArrowLeft,
  Phone,
  Video,
} from "lucide-react";

const messages = [

  {
    id: 1,

    sender: "vendor" as const,

    text:
      "Hi Cruz, thanks for reaching out to us regarding your wedding decor.",

    time: "10:32 AM",
  },

  {
    id: 2,

    sender: "user" as const,

    text:
      "We loved your floral stage concepts. Can you share premium packages?",

    time: "10:34 AM",
  },

  {
    id: 3,

    sender: "vendor" as const,

    text:
      "Absolutely. Here’s one of our recent premium stage concepts.",

    time: "10:36 AM",

    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",

    title:
      "Royal Floral Stage",
  },

  {
    id: 4,

    sender: "vendor" as const,

    time: "10:40 AM",

    type: "quotation" as const,

    quotation: {

      title:
        "Luxury Floral Stage Package",

      price:
        "₹1.85L",

      description:
        "Premium floral stage styling, lighting setup, entrance decor, and guest backdrop included.",
    },
  },

];

export default function MessageDetailPage() {

  return (

    <main
      className="
        min-h-screen

        bg-[#FAF7F2]

        flex
        flex-col
      "
    >

      {/* =========================
          HEADER
      ========================= */}

      <header
        className="
          sticky
          top-0
          z-20

          bg-[#FAF7F2]/92
          backdrop-blur-xl

          border-b
          border-[#EFE4D8]
        "
      >

        <div
          className="
            max-w-[430px]
            mx-auto

            px-[18px]
            py-4

            flex
            items-center
            justify-between
          "
        >

          {/* LEFT */}

          <div className="flex items-center gap-3">

            <button>

              <ArrowLeft
                size={22}
                className="text-[#111111]"
              />

            </button>

            <div>

              <h1
                className="
                  text-[15px]
                  font-semibold
                  text-[#111111]
                "
              >

                Meera Events

              </h1>

              <p
                className="
                  text-[11px]
                  text-[#9B8F84]
                "
              >

                Online now

              </p>

            </div>

          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-3">

            <button
              className="
                w-[36px]
                h-[36px]

                rounded-full

                bg-white

                border
                border-[#EFE4D8]

                flex
                items-center
                justify-center
              "
            >

              <Phone
                size={16}
                className="text-[#111111]"
              />

            </button>

            <button
              className="
                w-[36px]
                h-[36px]

                rounded-full

                bg-white

                border
                border-[#EFE4D8]

                flex
                items-center
                justify-center
              "
            >

              <Video
                size={16}
                className="text-[#111111]"
              />

            </button>

          </div>

        </div>

      </header>

      {/* =========================
          CHAT AREA
      ========================= */}

      <section
        className="
          flex-1

          max-w-[430px]
          w-full
          mx-auto

          px-[18px]
          py-5

          flex
          flex-col
          gap-3
        "
      >

        <MessageDate label="Today" />

        {messages.map((message) => (

          <MessageBubble
            key={message.id}

            sender={message.sender}
            text={message.text}
            time={message.time}
            image={message.image}
            title={message.title}
            type={message.type}
            quotation={message.quotation}
          />

        ))}

        <SystemMessage
          text="
            Vendor shared a premium quotation
          "
        />

        <TypingIndicator />

      </section>

      {/* =========================
          INPUT
      ========================= */}

      <div className="max-w-[430px] w-full mx-auto px-[18px]">

        <MessageInput />

      </div>

    </main>

  );

}