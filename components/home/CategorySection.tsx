"use client";

import { CATEGORIES } from "@/constants/homeData";

export default function CategorySection() {

  return (
    
          <section className="mb-5">
    
            <div
              className="
                flex
                gap-4
                overflow-x-auto
                no-scrollbar
                px-[18px]
                pr-[28px]
              "
            >
    
              {CATEGORIES.map((item) => {
    
                const Icon = item.icon;
    
                return (
    
                  <div
                    key={item.id}
                    className="flex-shrink-0 flex flex-col items-center"
                  >
    
                    <div
                      className={`
                        w-[57px]
                        h-[57px]
                        rounded-[18px]
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
    
                        ${
                          item.active
                            ? "bg-[#C9A86A]"
                            : "bg-[#F2E7DF]"
                        }
                      `}
                    >
    
                      <Icon
                        size={22}
                        strokeWidth={2.1}
                        className={
                          item.active
                            ? "text-white"
                            : "text-[#B78B45]"
                        }
                      />
    
                    </div>
    
                    <p className="mt-[8px] text-[10px] text-[#1F1F1F]">
    
                      {item.title}
    
                    </p>
    
                  </div>
    
                );
    
              })}
    
            </div>
    
          </section>
  )}