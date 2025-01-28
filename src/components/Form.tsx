"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const { username, email, message, subject } = values;

    const mailtoLink = `mailto:oduyajohn66@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${username}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
    alert("Complete this process clicking send button to send your message.");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white xl:text-lg font-medium mb-4">
                Your Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="What's your name?"
                  className="bg-tertiary p-6 placeholder:text-white/50 text-white rounded-lg outline-none border-none font-medium"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white xl:text-lg font-medium mb-4">
                Your Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  className="bg-tertiary p-6 placeholder:text-white/50 text-white rounded-lg outline-none border-none font-medium"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white xl:text-lg font-medium mb-4">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Subject..."
                  className="bg-tertiary p-6 placeholder:text-white/50 text-white rounded-lg outline-none border-none font-medium"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={cn("text-white font-medium xl:text-lg mb-4")}
              >
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="I need help with..."
                  className="bg-tertiary py-4 px-6 placeholder:text-white/50 text-white rounded-lg outline-none border-none font-medium"
                  {...field}
                  rows={6}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className={cn(
            "bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          )}
        >
          {form.formState.isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </Form>
  );
}
