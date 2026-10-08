"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { NeuWell, neuButton } from "@/sections/Neumo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  subject: z.string(),
});

// Shared neumorphic field style: pressed-in at rest, carved deeper on focus.
// Borders are never used; the accent ring is offset by 2px of page background.
const fieldClass =
  "rounded-2xl border-none bg-neu-bg font-medium text-neu-fg shadow-neu-inset " +
  "placeholder:text-[#A0AEC0] outline-none transition-all duration-300 ease-out " +
  "focus-visible:shadow-neu-inset-deep focus-visible:ring-0 focus-visible:ring-neu-accent " +
  "focus-visible:ring-offset-0 focus-visible:ring-offset-neu-bg " +
  "disabled:cursor-not-allowed disabled:opacity-60";

const labelClass = "mb-2 block font-medium text-neu-fg xl:text-lg";

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  const [opened, setOpened] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { username, email, message, subject } = values;

    const mailtoLink = `mailto:oduyajohn66@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(
      `Name: ${username}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`;

    window.location.href = mailtoLink;
    setOpened(true);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
        noValidate
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Your Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="What's your name?"
                  autoComplete="name"
                  className={cn(fieldClass, "h-auto p-6")}
                  {...field}
                />
              </FormControl>
              <FormMessage className="mt-2 text-sm font-medium text-red-700" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Your Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  autoComplete="email"
                  className={cn(fieldClass, "h-auto p-6")}
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage className="mt-2 text-sm font-medium text-red-700" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Subject..."
                  className={cn(fieldClass, "h-auto p-6")}
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage className="mt-2 text-sm font-medium text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="I need help with..."
                  className={cn(fieldClass, "resize-none px-6 py-4")}
                  {...field}
                  rows={6}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage className="mt-2 text-sm font-medium text-red-700" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className={cn(
            neuButton("primary"),
            "h-auto w-fit disabled:cursor-not-allowed disabled:opacity-60",
          )}
        >
          {form.formState.isSubmitting ? "Sending..." : "Send"}
        </Button>

        {/* Inline replacement for the old confirm() dialog.
            role="status" makes screen readers announce it politely. */}
        <div role="status" aria-live="polite">
          {opened && (
            <NeuWell
              variant="deep"
              className="animate-in fade-in-0 slide-in-from-bottom-2 flex items-start gap-3 p-6 duration-300"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neu-bg font-bold text-[#38B2AC] shadow-neu-extruded-sm"
              >
                ✓
              </span>
              <p className="font-medium text-neu-fg">
                Your email app should be open with your message ready.
                <span className="block text-sm font-normal text-neu-muted">
                  Press send there to finish. Nothing is sent until you do.
                </span>
              </p>
            </NeuWell>
          )}
        </div>
      </form>
    </Form>
  );
}
