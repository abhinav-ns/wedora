"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import NotificationHeader from "@/components/notifications/layout/NotificationHeader";

import NotificationTabs from "@/components/notifications/layout/NotificationTabs";

import NotificationSection from "@/components/notifications/layout/NotificationSection";

import NotificationCard from "@/components/notifications/cards/NotificationCard";

import {
  MESSAGE_NOTIFICATIONS,
  UPDATE_NOTIFICATIONS,
} from "@/constants/notificationsData";

export default function NotificationsPage() {

  const [activeTab, setActiveTab] =
    useState("All");

  return (

    <motion.main
      initial={{
        opacity: 0,
        x: 18,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 10,
      }}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        min-h-screen

        bg-[#FAF7F2]

        px-[18px]
        pt-6
        pb-[120px]
      "
    >

      <div className="max-w-[430px] mx-auto">

        <NotificationHeader />

        <NotificationTabs
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        {(activeTab === "All" ||
          activeTab === "Messages") && (

          <NotificationSection title="Messages">

            {MESSAGE_NOTIFICATIONS.map((item) => (

              <NotificationCard
                key={item.id}

                type="message"

                name={item.name}
                role={item.role}
                message={item.message}
                time={item.time}
                unread={item.unread}
                avatar={item.avatar}
              />

            ))}

          </NotificationSection>

        )}

        {(activeTab === "All" ||
          activeTab === "Updates") && (

          <NotificationSection title="Updates">

            {UPDATE_NOTIFICATIONS.map((item) => (

              <NotificationCard
                key={item.id}

                type="update"

                title={item.title}
                description={item.description}
                time={item.time}
              />

            ))}

          </NotificationSection>

        )}

      </div>

    </motion.main>

  );

}