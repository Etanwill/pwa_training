"use server"

import requireUser from "./requireUser"
import z from "zod"
import { companySchema, jobSeekerSchema } from "./zodSchemas"
import { prisma } from "./db";
import { redirect } from "next/navigation";
import arcjet, { detectBot, shield } from "./arcjet";
import { request } from "@arcjet/next";
import { error } from "console";

const aj = arcjet.withRule(
    shield({
        mode: "LIVE", 
    }),

).withRule(
detectBot({
    mode: "LIVE",
    allow: []
}))

export async function CreateCompany(data: z.infer<typeof companySchema>) {
    const session = await requireUser();
    const validateData = companySchema.parse(data)

    const req = await request();

    const decision = await aj.protect(req);

    if (decision.isDenied()){
        throw new Error("Forbidden")
    }

    await prisma.user.update({
        where: {
            id: session.id,
        },
        data: {
            onboardingCompleted: true,
            userType: "COMPANY",
            Company: {
                create: {
                    ...validateData,
                }
            }
        }
    })

    return redirect("/")
}

export async function CreateJobSeeker(data: z.infer<typeof jobSeekerSchema>) {
    const user = await requireUser();

    const req = await request();

    const decision = await aj.protect(req);

    if (decision.isDenied()){
        throw new Error("Forbidden")
    }

    const validateData = jobSeekerSchema.parse(data)

    await prisma.user.update({
        where: {
            id: user.id as string,
        },
        data: {
            onboardingCompleted: true,
            userType: "JOB_SEEKER",
            JobSeeker: {
                create: {
                    ...validateData,
                }
            }
        }
    })

    return redirect("/")
}


