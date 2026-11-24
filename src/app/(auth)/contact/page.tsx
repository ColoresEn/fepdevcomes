"use client";

import { createContactAction } from "@/actions/contact-action";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactFormValues, contactFormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AddContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const defaultValues: Partial<ContactFormValues> = {
    postername: "",
    email: "",
    topic: "",
    message: ""
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onChange"
  });

  const onSubmit = async ({
    postername,
    email,
    topic,
    message
  }: ContactFormValues) => {
    setLoading(true);
    await createContactAction({ postername, email, topic, message });
    setLoading(false);
    router.push("/");
      router.refresh();
  };

  return (
    <div className="mx-auto w-[calc(100%-2rem)] max-w-2xl rounded-2xl px-6 py-6 font-bold shadow-input
     bg-gradient-to-br from-lime-900  via-lime-600 to-emerald-600 border border-[hsl(71,77%,58%)] ">
      
      <h3 className="text-2xl mx-auto m-4">Send a message</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="postername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Tu email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asunto</FormLabel>
                <FormControl>
                  <Input placeholder="Asunto del mensaje" {...field} />
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
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Cuéntanos sobre tu mensaje"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
           <div className="flex justify-end text-left p-4 ">
          <Button type="submit" className="rounded-full border border-lime-500 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-lime-400 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" disabled={loading}>
            {loading ? (
              <>
                <Spinner /> Loading...
              </>
            ) : (
              "Save"
            )}
          </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddContactForm;
