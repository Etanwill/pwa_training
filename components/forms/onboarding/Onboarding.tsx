"use client"
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/logo.png";
import { Card, CardContent } from "@/components/ui/card";
import UserTypeSelection from "./UserTypeForm";
import CompanyForm from "./CompanyForm";
import JobSeeekerForm from "./JobSeeeker";

type UserSelectType = "company" | "jobseeker" | null;

function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [UserType, setUserType] = useState<UserSelectType>(null);

  function handleUserTypeSelection(type: UserSelectType) {
    setUserType(type);
    setStep(2);
  }

  function renderStep() {
    switch (step) {
      case 1:
        return <UserTypeSelection onSelect={handleUserTypeSelection}/>

      case 2:
        return UserType === "company" ? (
          <CompanyForm/>
        ) : (
          <JobSeeekerForm/>
        );

      default:
        return null;
    }
  }

  return (
    <>
      <div className="flex items-center gap-4 mb-10">
        <Image src={Logo} alt="JobMarshalLogo" width={50} height={50} />
        <h1 className="text-4xl font-bold">
          Job<span className="text-primary">Marshal</span>
        </h1>
      </div>
      <Card className="max-w-lg w-full">
        <CardContent className="p-6">{renderStep()}</CardContent>
      </Card>
    </>
  );
}

export default OnboardingForm;
