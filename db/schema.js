import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const members = sqliteTable("members", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  regNumber: text("reg_number").notNull(),
  role: text("role").notNull(),
});

export const attendance = sqliteTable("attendance", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  memberId: integer("member_id").references(() => members.id).notNull(),
  date: text("date").notNull(), // stored as YYYY-MM-DD
  present: integer("present", { mode: 'boolean' }).notNull(), // 1 = present, 0 = absent
});
