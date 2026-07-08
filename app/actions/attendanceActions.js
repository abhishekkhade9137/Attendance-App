"use server";

import { db } from "@/db";
import { attendance, members } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function markAttendance(memberId, date, isPresent) {
  try {
    // Check if record exists
    const existing = await db
      .select()
      .from(attendance)
      .where(and(eq(attendance.memberId, memberId), eq(attendance.date, date)));

    if (existing.length > 0) {
      await db
        .update(attendance)
        .set({ present: isPresent })
        .where(eq(attendance.id, existing[0].id));
    } else {
      await db.insert(attendance).values({
        memberId: memberId,
        date: date,
        present: isPresent,
      });
    }

    revalidatePath("/dashboard/Attendance");
    return { success: true };
  } catch (error) {
    console.error("Error marking attendance:", error);
    return { success: false, error: "Failed to mark attendance" };
  }
}

export async function getAttendanceByDate(date) {
  try {
    return await db
      .select()
      .from(attendance)
      .where(eq(attendance.date, date));
  } catch (error) {
    console.error("Error fetching attendance:", error);
    return [];
  }
}
