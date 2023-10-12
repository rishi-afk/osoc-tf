"use server";
import {
  NewAgamyaRegistration,
  checkIfAlreadyRegisteredForAgamya,
  insertIntoAgamya,
  registerUserForEvent,
} from "@/lib/schema";
import { auth, currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function register(eventId: number) {
  "use server";
  try {
    const user = await currentUser();
    if (!user || !user?.emailAddresses[0].emailAddress) redirect("/sign-in");
    const serverData = {
      eventId,
      userId: user.id,
      userEmail: user.emailAddresses[0].emailAddress,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
    };
    await registerUserForEvent({
      date: new Date(),
      eventId,
      name: serverData.firstName + " " + serverData.lastName,
      userEmail: serverData.userEmail,
      userId: serverData.userId,
    });
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Server error occurred!",
    };
  }
  revalidatePath("/events");
  return { status: 200, message: "Registration Successful" };
}

export async function checkIsLoggedIn() {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");
}

export async function registerForAgamya(data: NewAgamyaRegistration) {
  // Stopping registration for agamya
  throw new Error(
    "Registration for Agamya' 23 is closed. Please contact OSOC team for more details."
  );

  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");

  await insertIntoAgamya(data);
}

export async function checkIfRegisteredForAgamya(email: string) {
  return await checkIfAlreadyRegisteredForAgamya(email);
}
