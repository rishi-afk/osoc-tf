import { eq, InferModel, or } from "drizzle-orm";
import {
  text,
  integer,
  sqliteTable,
  uniqueIndex,
  index,
} from "drizzle-orm/sqlite-core";
import { db } from "./db";

export const events = sqliteTable("event", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
});

export const registrations = sqliteTable(
  "registration",
  {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    eventId: integer("event_id", { mode: "number" })
      .references(() => events.id)
      .notNull(),
    userId: text("user_id").notNull(),
    userEmail: text("email").notNull(),
    name: text("name").notNull(),
    date: integer("date", { mode: "timestamp" }).notNull(),
  },
  (registrations) => ({
    m2mIdx: uniqueIndex("m2mIdx").on(
      registrations.eventId,
      registrations.userId
    ),
    userIdx: index("user_idx").on(registrations.userId),
  })
);

export const agamya = sqliteTable("agamya", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  theme: text("theme").notNull(),
  team_name: text("team_name"),
  team_size: text("team_size").notNull(),
  member_1: text("member_1").notNull(),
  member_2: text("member_2"),
  member_3: text("member_3"),
  member_4: text("member_4"),
  abstract: text("abstract").notNull(),
});

export type Event = InferModel<typeof events>;
export type Registration = InferModel<typeof registrations>;
export type NewEvent = InferModel<typeof events, "insert">;
export type NewRegistration = InferModel<typeof registrations, "insert">;
export type NewAgamyaRegistration = InferModel<typeof agamya, "insert">;

export const registerUserForEvent = async (data: NewRegistration) => {
  await db.insert(registrations).values(data).run();
};

export const getRegisteredEvents = async (userId: string) => {
  return await db
    .select({ eventId: registrations.eventId })
    .from(registrations)
    .where(eq(registrations.userId, userId))
    .all();
};

export const getRegistrations = async () => {
  return await db
    .select({
      date: registrations.date,
      id: registrations.id,
      email: registrations.userEmail,
      name: registrations.name,
      event: events.title,
    })
    .from(registrations)
    .innerJoin(events, eq(events.id, registrations.eventId))
    .all();
};

export const getEvents = async () => {
  return await db.select().from(events).all();
};

export const checkIfAlreadyRegisteredForAgamya = async (email: string) => {
  const result = await db
    .select()
    .from(agamya)
    .where(
      or(
        eq(agamya.member_1, email),
        eq(agamya.member_2, email),
        eq(agamya.member_3, email),
        eq(agamya.member_4, email)
      )
    )
    .all();
  if (result && result.length > 0) return true;
  return false;
};

export const insertIntoAgamya = async (data: NewAgamyaRegistration) => {
  await db.insert(agamya).values(data).run();
};
