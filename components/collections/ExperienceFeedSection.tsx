"use client";

import ExperienceFeedCard from "@/components/collections/ExperienceFeedCard";

type Vendor = {
  id: number;
  name: string;
  description: string;
  image: string;
  tag: string;
};

type ExperienceFeedSectionProps = {
  vendors: Vendor[];
};

export default function ExperienceFeedSection({
  vendors,
}: ExperienceFeedSectionProps) {

  return (

    <div className="flex flex-col gap-4">

      {vendors.map((vendor) => (

        <ExperienceFeedCard
          key={vendor.id}
          name={vendor.name}
          description={vendor.description}
          image={vendor.image}
          tag={vendor.tag}
          price="Starting ₹650/guest"
        />

      ))}

    </div>

  );

}