import { eq, InferModel } from "drizzle-orm";
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

export type Event = InferModel<typeof events>;
export type Registration = InferModel<typeof registrations>;
export type NewEvent = InferModel<typeof events, "insert">;
export type NewRegistration = InferModel<typeof registrations, "insert">;

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
