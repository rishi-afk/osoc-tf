"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  eventName: string;
  eventRules: string;
}

export function RuleDialog({ eventName, eventRules }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} className="p-0">
          Rules
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[360px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{eventName} - Rules</DialogTitle>
          <DialogDescription>
            Make sure to read the rules carefully.
          </DialogDescription>
        </DialogHeader>
        <p>{eventRules}</p>
      </DialogContent>
    </Dialog>
  );
}
