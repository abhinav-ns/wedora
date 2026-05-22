"use client";

import { useMemo, useState } from "react";

import CollectionFilters from "@/components/collections/CollectionFilters";

import FeaturedCollectionCard from "@/components/collections/FeaturedCollectionCard";

import CollectionPromptCard from "@/components/collections/CollectionPromptCard";

import VendorListSection from "@/components/collections/ExperienceFeedSection";

import {
  FILTERS,
  COLLECTIONS_DATA,
} from "@/constants/collectionsData";

export default function CollectionsPage() {

  const [activeTab, setActiveTab] =
    useState("Catering");

  const activeCollection = useMemo(() => {

    return (
      COLLECTIONS_DATA[
        activeTab as keyof typeof COLLECTIONS_DATA
      ] || COLLECTIONS_DATA.Catering
    );

  }, [activeTab]);

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

        {/* FEATURED */}

        <section className="px-[18px] mt-5">

          <FeaturedCollectionCard
            image={
              activeCollection.featured.image
            }
            title1={
              activeCollection.featured.title1
            }
            title2={
              activeCollection.featured.title2
            }
            label={
              activeCollection.featured.label
            }
          />

        </section>

        {/* PROMPT */}

        <section className="px-[18px] mt-5">

          <CollectionPromptCard
            label={
              activeCollection.prompt.label
            }
            title={
              activeCollection.prompt.title
            }
            options={
              activeCollection.prompt.options
            }
          />

        </section>

        {/* VENDORS */}

        <section className="px-[18px] mt-6">

          <VendorListSection
            vendors={
              activeCollection.vendors
            }
          />

        </section>

      </div>

    </main>

  );

}