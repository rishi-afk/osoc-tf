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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "@/components/ui/use-toast";
import { Input } from "./ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

const FormSchema = z
  .object({
    theme: z.string({ required_error: "Please select a theme." }),
    team_size: z.string({ required_error: "Please select a team size." }),
    team_name: z.string().optional(),
    member_1: z
      .string()
      .regex(
        /^205122(00[1-9]|0[1-9][0-9]|1[0-1][0-5])$/,
        "Invalid webmail id :("
      ),
    member_2: z
      .string()
      .regex(
        /^205122(00[1-9]|0[1-9][0-9]|1[0-1][0-5])$/,
        "Invalid webmail id :("
      )
      .optional(),
    member_3: z
      .string()
      .regex(
        /^205122(00[1-9]|0[1-9][0-9]|1[0-1][0-5])$/,
        "Invalid webmail id :("
      )
      .optional(),
    title: z.string().min(2, "Your name looks invalid :("),
    brief: z.string().min(100, "Please enter a brief description of yourself."),
  })
  .superRefine((val, ctx) => {
    if (parseInt(val.team_size) > 1 && !val.team_name) {
      if (!val.team_name)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a team name",
          path: ["team_name"],
        });
      else if (val.team_name.length < 2)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Team name must be at least 2 characters long",
          path: ["team_name"],
        });
    }
    if (parseInt(val.team_size) === 2 && !val.member_2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please enter team member #2",
        path: ["member_2"],
      });
    }
    if (parseInt(val.team_size) === 3 && !val.member_3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please enter team member #3",
        path: ["member_3"],
      });
    }
  });

export function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { team_size: "1" },
  });

  const [teamSize, setTeamSize] = useState<string>("1");

  const teamSizeValue = form.watch("team_size");
  useEffect(() => {
    setTeamSize(teamSizeValue);
  }, [teamSizeValue]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="dark:text-[#D2D2D2] text-muted-foreground text-lg sm:text-xl md:text-2xl p-0"
          variant="link"
        >
          Register
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[360px] sm:max-w-[425px] md:max-w-xl overflow-y-scroll max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>
            Please enter your details and click register
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="theme"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Theme</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your theme..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Theme 1</SelectItem>
                      <SelectItem value="2">Theme 2</SelectItem>
                      <SelectItem value="3">Theme 3</SelectItem>
                      <SelectItem value="4">Theme 4</SelectItem>
                      <SelectItem value="5">Theme 5</SelectItem>
                      <SelectItem value="6">Theme 6</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brief"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brief</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about project idea"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please provide a max 200 words brief description of your
                    project idea.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="team_size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Size</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your team size..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="team_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Dynamic Blasters" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="member_1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Member #1</FormLabel>
                  <FormControl>
                    <Input placeholder="205122XXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {parseInt(teamSize) > 1 && (
              <FormField
                control={form.control}
                name="member_2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Member #2</FormLabel>
                    <FormControl>
                      <Input placeholder="205122XXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {parseInt(teamSize) > 2 && (
              <FormField
                control={form.control}
                name="member_3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Member #3</FormLabel>
                    <FormControl>
                      <Input placeholder="205122XXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <DialogFooter>
              <Button type="submit">Register</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
