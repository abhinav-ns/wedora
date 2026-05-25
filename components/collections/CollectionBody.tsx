"use client";

import FeaturedCollectionCard from "@/components/collections/FeaturedCollectionCard";

import CollectionPromptCard from "@/components/collections/CollectionPromptCard";

import ExperienceFeedSection from "@/components/collections/ExperienceFeedSection";

import {
  COLLECTIONS_DATA,
} from "@/constants/collectionsData";

interface Props {

  activeCategory: string;

}

export default function CollectionBody({
  activeCategory,
}: Props) {

  /* =========================
     CATEGORY COLLECTIONS
  ========================= */

  const categoryKey =
    activeCategory.charAt(0).toUpperCase() +
    activeCategory.slice(1);

  const activeCollection =
    COLLECTIONS_DATA[
      categoryKey as keyof typeof COLLECTIONS_DATA
    ];

  if (!activeCollection) {

    return null;

  }

  return (

    <div>

      {/* FEATURED */}

      <section className="px-[18px]">

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

      {/* EXPERIENCE FEED */}

      <section className="px-[18px] mt-6">

        <ExperienceFeedSection
          vendors={
            activeCollection.vendors
          }
        />

      </section>

    </div>

  );

}
