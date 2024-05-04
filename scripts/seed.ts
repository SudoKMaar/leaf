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
      {
        id: 2,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Spanish",
        order: 1,
      },
      {
        id: 3,
        courseId: 2,
        title: "Unit 1",
        description: "Learn the basics of Italian",
        order: 1,
      },
      {
        id: 4,
        courseId: 4,
        title: "Unit 1",
        description: "Learn the basics of Korean",
        order: 1,
      },
      {
        id: 5,
        courseId: 5,
        title: "Unit 1",
        description: "Learn the basics of German",
        order: 1,
      },
      {
        id: 6,
        courseId: 6,
        title: "Unit 1",
        description: "Learn the basics of Japanese",
        order: 1,
      },
      {
        id: 7,
        courseId: 7,
        title: "Unit 1",
        description: "Learn the basics of Russian",
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
      {
        id: 6,
        unitId: 2, // Unit 2 (Learn the basics...)
        order: 1,
        title: "Use basic phrases",
      },
      {
        id: 7,
        unitId: 2, // Unit 2 (Learn the basics...)
        order: 2,
        title: "Greet people",
      },
      {
        id: 8,
        unitId: 2, // Unit 2 (Learn the basics...)
        order: 3,
        title: "Introduce yourself",
      },
      {
        id: 9,
        unitId: 2, // Unit 2 (Learn the basics...)
        order: 4,
        title: "Use the present tense",
      },
      {
        id: 10,
        unitId: 2, // Unit 2 (Learn the basics...)
        order: 5,
        title: "Get around town",
      },
      {
        id: 11,
        unitId: 3, // Unit 3 (Learn the basics...)
        order: 1,
        title: "Use basic phrases",
      },
      {
        id: 12,
        unitId: 3, // Unit 3 (Learn the basics...)
        order: 2,
        title: "Greet people",
      },
      {
        id: 13,
        unitId: 3, // Unit 3 (Learn the basics...)
        order: 3,
        title: "Introduce yourself",
      },
      {
        id: 14,
        unitId: 3, // Unit 3 (Learn the basics...)
        order: 4,
        title: "Use the present tense",
      },
      {
        id: 15,
        unitId: 3, // Unit 3 (Learn the basics...)
        order: 5,
        title: "Get around town",
      },
      {
        id: 16,
        unitId: 4, // Unit 4 (Learn the basics...)
        order: 1,
        title: "Use basic phrases",
      },
      {
        id: 17,
        unitId: 4, // Unit 4 (Learn the basics...)
        order: 2,
        title: "Greet people",
      },
      {
        id: 18,
        unitId: 4, // Unit 4 (Learn the basics...)
        order: 3,
        title: "Introduce yourself",
      },
      {
        id: 19,
        unitId: 4, // Unit 4 (Learn the basics...)
        order: 4,
        title: "Use the present tense",
      },
      {
        id: 20,
        unitId: 4, // Unit 4 (Learn the basics...)
        order: 5,
        title: "Get around town",
      },
      {
        id: 21,
        unitId: 5, // Unit 5 (Learn the basics...)
        order: 1,
        title: "Use basic phrases",
      },
      {
        id: 22,
        unitId: 5, // Unit 5 (Learn the basics...)
        order: 2,
        title: "Greet people",
      },
      {
        id: 23,
        unitId: 5, // Unit 5 (Learn the basics...)
        order: 3,
        title: "Introduce yourself",
      },
      {
        id: 24,
        unitId: 5, // Unit 5 (Learn the basics...)
        order: 4,
        title: "Use the present tense",
      },
      {
        id: 25,
        unitId: 5, // Unit 5 (Learn the basics...)
        order: 5,
        title: "Get around town",
      },
      {
        id: 26,
        unitId: 6, // Unit 6 (Learn the basics...)
        order: 1,
        title: "Use basic phrases",
      },
      {
        id: 27,
        unitId: 6, // Unit 6 (Learn the basics...)
        order: 2,
        title: "Greet people",
      },
      {
        id: 28,
        unitId: 6, // Unit 6 (Learn the basics...)
        order: 3,
        title: "Introduce yourself",
      },
      {
        id: 29,
        unitId: 6, // Unit 6 (Learn the basics...)
        order: 4,
        title: "Use the present tense",
      },
      {
        id: 30,
        unitId: 6, // Unit 6 (Learn the basics...)
        order: 5,
        title: "Get around town",
      },
      {
        id: 31,
        unitId: 7, // Unit 7 (Learn the basics...)
        order: 1,
        title: "Use basic phrases",
      },
      {
        id: 32,
        unitId: 7, // Unit 7 (Learn the basics...)
        order: 2,
        title: "Greet people",
      },
      {
        id: 33,
        unitId: 7, // Unit 7 (Learn the basics...)
        order: 3,
        title: "Introduce yourself",
      },
      {
        id: 34,
        unitId: 7, // Unit 7 (Learn the basics...)
        order: 4,
        title: "Use the present tense",
      },
      {
        id: 35,
        unitId: 7, // Unit 7 (Learn the basics...)
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
      {
        id: 4,
        lessonId: 2, //basic phrases
        type: "SELECT",
        order: 1,
        question: "Which one of these is “the cat”?",
      },
      {
        id: 5,
        lessonId: 2, //basic phrases
        type: "SELECT",
        order: 2,
        question: "Which one of these is “one”?",
      },
      {
        id: 6,
        lessonId: 2, //basic phrases
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
      {
        id: 10,
        challengeId: 4, // Which one of these is "the cat"?
        imageSrc: "/one.svg",
        correct: false,
        text: "un",
        audioSrc: "/fr_one.mp3",
      },
      {
        id: 11,
        challengeId: 4,
        imageSrc: "/cat.svg",
        correct: true,
        text: "le chat",
        audioSrc: "/fr_cat.mp3",
      },
      {
        id: 12,
        challengeId: 4,
        imageSrc: "/boy.svg",
        correct: false,
        text: "le garçon",
        audioSrc: "/fr_boy.mp3",
      },
      {
        id: 13,
        challengeId: 5, // Which one of these is "the one"?
        imageSrc: "/one.svg",
        correct: true,
        text: "un",
        audioSrc: "/fr_one.mp3",
      },
      {
        id: 14,
        challengeId: 5,
        imageSrc: "/cat.svg",
        correct: false,
        text: "le chat",
        audioSrc: "/fr_cat.mp3",
      },
      {
        id: 15,
        challengeId: 5,
        imageSrc: "/boy.svg",
        correct: false,
        text: "le garçon",
        audioSrc: "/fr_boy.mp3",
      },
      {
        id: 16,
        challengeId: 6, // Which one of these is "the man"?
        imageSrc: "/man.svg",
        correct: true,
        text: "l'homme",
        audioSrc: "/fr_man.mp3",
      },
      {
        id: 17,
        challengeId: 6,
        imageSrc: "/one.svg",
        correct: false,
        text: "un",
        audioSrc: "/fr_one.mp3",
      },
      {
        id: 18,
        challengeId: 6,
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
