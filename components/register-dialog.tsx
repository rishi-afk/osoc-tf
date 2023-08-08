import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { auth, SignInButton } from "@clerk/nextjs";

interface Props {
  eventName: string;
}

export function RegisterDialog({ eventName }: Props) {
  const { userId } = auth();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {!!userId ? (
          <Button variant={"link"} className="p-0 text-[#FF4747]">
            Register
          </Button>
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
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
