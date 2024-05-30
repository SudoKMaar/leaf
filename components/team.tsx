import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/moving-borders";

export const teamDetails = [
  {
    id: 1,
    title: "Abhishek Kumar",
    desc: "Assisted in the development of LEAF using Next.js, enhancing interactivity and backend functanility",
    className: "md:col-span-2",
    thumbnail: "/kmaar.png",
    alt: "Abhishek KMaar",
  },
  {
    id: 2,
    title: "Anmol Sahni",
    desc: "Designed and developed mobile app for Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/anmol.png",
    alt: "Anmol Sahni",
  },
  {
    id: 3,
    title: "Kajal Rawat",
    desc: "Assisted the dev of a mobile app, from initial concept to deployment on app stores",
    className: "md:col-span-2",
    thumbnail: "/kajal.png",
    alt: "Kajal Rawat",
  },
  {
    id: 4,
    title: "Prince Singh",
    desc: "Designed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/prince.png",
    alt: "Prince Singh",
  },
];

const Team = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        Meet our <span className="text-green-500">Team Members</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {teamDetails.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "white",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black border-neutral-200"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                height={32}
                width={32}
                src={card.thumbnail}
                alt={card.alt}
                className="lg:w-32 md:w-20 w-16 rounded-full"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-green-500 text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-neutral-700 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Team;
