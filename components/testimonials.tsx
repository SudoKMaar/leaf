"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-cards";

const testimonials = [
  {
    name: "Harkirat Singh",
    title: "Software Developer",
    quote:
      "LEAF has revolutionized my language learning journey. It's interactive, engaging, and truly makes learning easy and fun!",
    src: "/harkirat.jpg",
  },
  {
    name: "Aditya Vivek",
    title: "Digital Marketer",
    quote:
      "With LEAF, I've been able to learn a new language in my spare time. The lessons are well-structured and the gamification aspect keeps me motivated.",
    src: "/aditya.jpg",
  },
  {
    name: "Sonny Sangha",
    title: "Travel Blogger",
    quote:
      "As a travel blogger, I'm constantly on the move. LEAF has made it possible for me to learn languages on-the-go. It's a game changer!",
    src: "/sonny.jpg",
  },
  {
    name: "Vikash Maurya",
    title: "Student",
    quote:
      "LEAF has made language learning so much more accessible. I love the interactive exercises and the leaderboard competition is a great motivator.",
    src: "/vikash.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        Kind words from our <span className="text-green-500">Users</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
