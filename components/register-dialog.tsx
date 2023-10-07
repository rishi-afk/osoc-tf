"use server";
import { register } from "@/app/actions";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { getRegisteredEvents } from "@/lib/schema";
import { auth, SignInButton } from "@clerk/nextjs";
import RegisterButton from "./client-reg";

interface Props {
  eventName: string;
  eventId: number;
}

export async function RegisterDialog({ eventName, eventId }: Props) {
  const { userId } = auth();
  let alreadyRegistered = false;
  if (userId) {
    const res = await getRegisteredEvents(userId);
    const found = res.find((e) => e.eventId === eventId);
    if (found) alreadyRegistered = true;
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {!!userId ? (
          alreadyRegistered ? (
            <Button variant={"link"} disabled className="p-0 text-[#6fff47]">
              Registered
            </Button>
          ) : (
            <Button variant={"link"} className="p-0 text-[#FF4747]">
              Register
            </Button>
          )
        ) : (
          <SignInButton mode="modal">
            <Button variant={"link"} className="p-0 text-[#FF4747]">
              Register
            </Button>
          </SignInButton>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to register for {eventName}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently register you for
            this event.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <RegisterButton action={register} eventId={eventId} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
