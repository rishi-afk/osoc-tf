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
  UncontrolledFormMessage,
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
import { useEffect, useState, useTransition } from "react";
import { FileDialog } from "./file-dialog";
import { FileWithPath } from "react-dropzone";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { catchError } from "@/lib/utils";
import { checkIsLoggedIn } from "@/app/actions";
import Link from "next/link";
const FormSchema = z
  .object({
    theme: z.string({ required_error: "Please select a theme." }),
    team_size: z.string({ required_error: "Please select a team size." }),
    team_name: z.string().optional(),
    member_1: z
      .string()
      .regex(
        /^205122(00[1-9]|0[1-9][0-9]|1[0-1][0-5])@nitt\.edu$/,
        "Invalid roll number."
      ),
    member_2: z
      .string()
      .regex(
        /^205122(00[1-9]|0[1-9][0-9]|1[0-1][0-5])@nitt\.edu$/,
        "Invalid roll number."
      )
      .optional(),
    member_3: z
      .string()
      .regex(
        /^205122(00[1-9]|0[1-9][0-9]|1[0-1][0-5])@nitt\.edu$/,
        "Invalid roll number."
      )
      .optional(),
    title: z.string().min(2, "Your title looks invalid."),
    abstract: z.unknown().refine((val) => {
      if (!Array.isArray(val)) return false;
      if (val.some((file) => !(file instanceof File))) return false;
      return true;
    }, "Must upload project abstract"),
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

interface Props {
  email: string;
}

export function RegisterForm({ email }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { team_size: "1", member_1: email },
  });

  const [teamSize, setTeamSize] = useState<string>("1");

  const teamSizeValue = form.watch("team_size");
  useEffect(() => {
    setTeamSize(teamSizeValue);
  }, [teamSizeValue]);

  const [files, setFiles] = useState<FileWithPath[] | null>(null);

  const [isPending, startTransition] = useTransition();
  const { useUploadThing } = generateReactHelpers<OurFileRouter>();
  const { isUploading, startUpload } = useUploadThing("abstract");

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      try {
        await checkIsLoggedIn();
        const f = data.abstract as File[];
        const abstract = await startUpload(f).then((res) => {
          const formattedAbstract = res?.map((image) => ({
            id: image.key,
            name: image.key.split("_")[1] ?? image.key,
            url: image.url,
          }));
          return formattedAbstract ?? null;
        });

        console.log(abstract);

        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
          ),
        });

        form.reset();
        setFiles(null);
      } catch (err) {
        catchError(err);
      }
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
            Please note that only one member of the team needs to register.
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
            <FormItem className="flex w-full flex-col gap-1.5">
              <FormLabel>Abstract</FormLabel>
              {files?.length ? (
                <div className="flex items-center gap-2">
                  {files.map((file, i) => (
                    <span key={i}>{file.name}</span>
                  ))}
                </div>
              ) : null}
              <FormControl>
                <FileDialog
                  setValue={form.setValue}
                  accept={{ "application/pdf": [] }}
                  name="abstract"
                  maxFiles={1}
                  maxSize={1024 * 1024 * 2}
                  files={files}
                  setFiles={setFiles}
                  isUploading={isUploading}
                  disabled={isPending}
                />
              </FormControl>
              <FormDescription>
                Provide your project abstract following this{" "}
                <Link
                  className="underline text-[#ff4747]"
                  href={"https://www.google.com"}
                  prefetch={false}
                >
                  template
                </Link>
                .
              </FormDescription>
              <UncontrolledFormMessage
                message={form.formState.errors.abstract?.message}
              />
            </FormItem>
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
                    <Input readOnly {...field} />
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
                      <Input placeholder="205122XXX@nitt.edu" {...field} />
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
                      <Input placeholder="205122XXX@nitt.edu" {...field} />
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
