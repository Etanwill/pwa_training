import {z} from "zod"

export const companySchema = z.object({
    name: z.string().min(2, "Company name must be atlest to character"),
    location: z.string().min(1, "Location must be defined"),
    about: z
    .string()
    .min(10, "please provide some information about your company"),
    logo: z.string().optional(),
    website: z.string().url("please enter a valid url"),
    xAccount: z.string().optional(),


});
export const jobSeekerSchema = z.object({
    name: z.string().min(2, "Name must be atleat 2 character"),
    about: z.string().min(10, "Please provide more information about yourself"),
    resume: z.string().optional(),
})