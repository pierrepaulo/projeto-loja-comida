"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Progress } from "../ui/progress";
import { StepUser } from "./setp-user";
import { StepAddress } from "./step-address";
import { StepFinish } from "./setp-finish";

type Steps = "user" | "address" | "finish";
type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};
export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState("user");
  let progressPct = 0;
  switch (step) {
    case "user":
      progressPct = 30;
      break;
    case "address":
      progressPct = 70;
      break;
    case "finish":
      progressPct = 100;
      break;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step === "user" && "Dados Pesoais"}
            {step === "address" && "Endereço de entrega"}
            {step === "finish" && "Envio para o WhatsApp"}
          </DialogTitle>
        </DialogHeader>
        <Progress value={progressPct} />

        <div className="flex flex-col gap-3">
          {step === "user" && <StepUser setStep={setStep} />}
          {step === "address" && <StepAddress setStep={setStep} />}
          {step === "finish" && <StepFinish />}
        </div>
      </DialogContent>
    </Dialog>
  );
};
