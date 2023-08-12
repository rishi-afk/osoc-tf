"use client";
import { useTransition } from "react";
import { AlertDialogAction } from "./ui/alert-dialog";
import { toast } from "./ui/use-toast";

interface Props {
  action: (eventId: number) => Promise<{
    status: number;
    message: string;
  }>;
  eventId: number;
}
export default function RegisterButton({ action, eventId }: Props) {
  const [_, startTransition] = useTransition();
  return (
    <AlertDialogAction
      type="submit"
      onClick={() => {
        startTransition(async () => {
          const { status, message } = await action(eventId);
          if (status === 200)
            toast({
              title: message,
            });
          else
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description:
                "There was a problem on our side. Contact organizers.",
            });
        });
      }}
    >
      Continue
    </AlertDialogAction>
  );
}
