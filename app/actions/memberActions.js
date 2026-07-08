"use server";

import { db } from "@/db";
import { members } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function addMember(formData) {
  try {
    const name = formData.get("name");
    const regNumber = formData.get("regNumber");
    const role = formData.get("role");

    if (!name || !regNumber || !role) {
      return { success: false, error: "All fields are required" };
    }

    await db.insert(members).values({
      name: name.toString(),
      regNumber: regNumber.toString(),
      role: role.toString(),
    });

    revalidatePath("/dashboard/Members");
    return { success: true };
  } catch (error) {
    console.error("Error adding member:", error);
    return { success: false, error: "Failed to add member" };
  }
}

export async function getMembers() {
  try {
    return await db.select().from(members);
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
}
