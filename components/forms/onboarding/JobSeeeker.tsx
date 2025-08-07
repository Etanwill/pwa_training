import { CreateJobSeeker } from "@/app/utils/actions";
import { companySchema, jobSeekerSchema } from "@/app/utils/zodSchemas";
import { UploadDropzone } from "@/components/general/UploadThingReexported";
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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Divide, XIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import pdfImage from "@/public/pdf.png"

function JobSeeekerForm() {
  const form = useForm<z.infer<typeof jobSeekerSchema>>({
    resolver: zodResolver(jobSeekerSchema),
    defaultValues: {
      about: "",
      name: "",
      resume: "",
    },
  });

  const [pending, setPending] = useState(false);

  async function onSubmit(data: z.infer<typeof jobSeekerSchema>) {
    try {
      setPending(true);
      await CreateJobSeeker(data);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.log("Something went wrong");
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-6 " onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about yoursel.." {...field}></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-sm">Resume (PDF)</FormLabel>
              <FormControl>
                <div className="flex items-center gap-2">
                  {field.value ? (
                    <div className="relative w-fit">
                      <Image
                        src={pdfImage}
                        alt="resume"
                        width={28}
                        height={28}
                        className="rounded-sm"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute -top-1 -right-1 size-5"
                        onClick={() => field.onChange("")}
                      >
                        <XIcon className="size-3" />
                      </Button>
                    </div>
                  ) : (
                    <UploadDropzone
                      endpoint="resumeUploader"
                      onClientUploadComplete={(res) =>
                        field.onChange(res[0].url)
                      }
                      className="border border-primary rounded-md text-sm p-1 h-[40px] min-h-[40px] max-h-[40px] overflow-hidden flex items-center justify-center w-full max-w-xs"
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={pending}>
            {pending? "Submitting...": "Continue"}
        </Button>
      </form>
    </Form>
  );
}

export default JobSeeekerForm;
