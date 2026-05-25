"use client";

import { useState } from "react";

import CollectionFilters from "@/components/collections/CollectionFilters";

import CollectionBody from "@/components/collections/CollectionBody";

import {
  FILTERS,
} from "@/constants/collectionsData";

export default function CollectionsPage() {

  const [activeTab] =
    useState("Catering");

  return (

    <main
      className="
        min-h-screen
        bg-[#FAF7F2]
        pb-[130px]
      "
    >

      <div
        className="
          max-w-[430px]
          mx-auto
        "
      >

        {/* STICKY HEADER */}

        <section
          className="
            sticky
            top-0
            z-30

            backdrop-blur-xl

            bg-[#FAF7F2]/92

            border-b
            border-[#EFE4D8]
          "
        >

          <div className="px-[18px] pt-6 pb-4">

            {/* HEADER */}

            

            {/* FILTERS */}

            <div className="mt-4">

              <CollectionFilters
                filters={FILTERS}
              />

            </div>

          </div>

        </section>

        <div className="mt-5">

          <CollectionBody
            activeCategory={activeTab}
          />

        </div>

      </div>

    </main>

  );

}
