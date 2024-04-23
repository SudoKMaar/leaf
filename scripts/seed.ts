import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userSubscription);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "Italian",
        imageSrc: "/it.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        id: 4,
        title: "Korean",
        imageSrc: "/ko.svg",
      },
      {
        id: 5,
        title: "German",
        imageSrc: "/de.svg",
      },
      {
        id: 6,
        title: "Japanese",
        imageSrc: "/ja.svg",
      },
      {
        id: 7,
        title: "Russian",
        imageSrc: "/ru.svg",
      },
    ]);
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 3,
        title: "Unit 1",
        description: "Learn the basics of French",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 1,
        title: "Use basic phrases",
      },
      {
        id: 2,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 2,
        title: "Greet people",
      },
      {
        id: 3,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 3,
        title: "Introduce yourself",
      },
      {
        id: 4,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 4,
        title: "Use the present tense",
      },
      {
        id: 5,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 5,
        title: "Get around town",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, //basic phrases
        type: "SELECT",
        order: 1,
        question: "Which one of these is “the cat”?",
      },
      {
        id: 2,
        lessonId: 1, //basic phrases
        type: "SELECT",
        order: 2,
        question: "Which one of these is “one”?",
      },
      {
        id: 3,
        lessonId: 1, //basic phrases
        type: "SELECT",
        order: 3,
        question: "Which one of these is “the man”?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1, // Which one of these is "the cat"?
        imageSrc: "/one.svg",
        correct: false,
        text: "un",
        audioSrc: "/fr_one.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/cat.svg",
        correct: true,
        text: "le chat",
        audioSrc: "/fr_cat.mp3",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/boy.svg",
        correct: false,
        text: "le garçon",
        audioSrc: "/fr_boy.mp3",
      },
      {
        id: 4,
        challengeId: 2, // Which one of these is "the one"?
        imageSrc: "/one.svg",
        correct: true,
        text: "un",
        audioSrc: "/fr_one.mp3",
      },
      {
        id: 5,
        challengeId: 2,
        imageSrc: "/cat.svg",
        correct: false,
        text: "le chat",
        audioSrc: "/fr_cat.mp3",
      },
      {
        id: 6,
        challengeId: 2,
        imageSrc: "/boy.svg",
        correct: false,
        text: "le garçon",
        audioSrc: "/fr_boy.mp3",
      },
      {
        id: 7,
        challengeId: 3, // Which one of these is "the man"?
        imageSrc: "/man.svg",
        correct: true,
        text: "l'homme",
        audioSrc: "/fr_man.mp3",
      },
      {
        id: 8,
        challengeId: 3,
        imageSrc: "/one.svg",
        correct: false,
        text: "un",
        audioSrc: "/fr_one.mp3",
      },
      {
        id: 9,
        challengeId: 3,
        imageSrc: "/boy.svg",
        correct: false,
        text: "le garçon",
        audioSrc: "/fr_boy.mp3",
      },
    ]);
    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
