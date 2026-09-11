"use client";

import { useId, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Custom website",
  "Full-stack web application",
  "Frontend development",
  "Website redesign",
  "API & backend work",
  "Something else",
];

type Fields = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Please tell me your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please add an email so I can reply.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "That email address does not look right.";
  }

  if (!values.projectType) {
    errors.projectType = "Pick the option that fits best.";
  }

  if (!values.message.trim()) {
    errors.message = "A sentence or two about the project is enough.";
  }

  return errors;
}

const fieldClasses =
  "flex h-11 w-full rounded-lg border border-input bg-card px-3.5 py-2 text-base text-foreground shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50";

export function ContactForm() {
  const baseId = useId();
  const ids = {
    name: `${baseId}-name`,
    email: `${baseId}-email`,
    projectType: `${baseId}-project-type`,
    message: `${baseId}-message`,
  };

  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (field: keyof Fields) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    if (status === "sent") setStatus("idle");
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
    setValues({ name: "", email: "", projectType: "", message: "" });
  }

  const describedBy = (field: keyof Fields) => (errors[field] ? `${ids[field]}-error` : undefined);

  return (
    <Card className="premium-card border-0 bg-transparent p-6 shadow-none sm:p-8">
      <h2 className="text-xl font-bold">Send a message</h2>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        Share a little about what you are building and I will get back to you with next steps.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        <div className="space-y-2">
          <Label htmlFor={ids.name}>Name</Label>
          <Input
            id={ids.name}
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={(event) => update("name")(event.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            className={cn("text-base", errors.name && "border-destructive focus-visible:ring-destructive")}
          />
          {errors.name && (
            <p id={`${ids.name}-error`} className="text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor={ids.email}>Email</Label>
          <Input
            id={ids.email}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={(event) => update("email")(event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            className={cn("text-base", errors.email && "border-destructive focus-visible:ring-destructive")}
          />
          {errors.email && (
            <p id={`${ids.email}-error`} className="text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor={ids.projectType}>Project type</Label>
          <select
            id={ids.projectType}
            name="projectType"
            value={values.projectType}
            onChange={(event) => update("projectType")(event.target.value)}
            aria-invalid={errors.projectType ? true : undefined}
            aria-describedby={describedBy("projectType")}
            className={cn(
              fieldClasses,
              "cursor-pointer",
              !values.projectType && "text-muted-foreground",
              errors.projectType && "border-destructive focus-visible:ring-destructive"
            )}
          >
            <option value="">Select an option</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p id={`${ids.projectType}-error`} className="text-sm text-destructive">
              {errors.projectType}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor={ids.message}>Message</Label>
          <Textarea
            id={ids.message}
            name="message"
            rows={5}
            placeholder="What are you building, and what does success look like?"
            value={values.message}
            onChange={(event) => update("message")(event.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={describedBy("message")}
            className={cn("text-base", errors.message && "border-destructive focus-visible:ring-destructive")}
          />
          {errors.message && (
            <p id={`${ids.message}-error`} className="text-sm text-destructive">
              {errors.message}
            </p>
          )}
        </div>

        <Button type="submit" variant="brand" size="lg" disabled={status === "sending"} className="w-full">
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send message <Send aria-hidden="true" />
            </>
          )}
        </Button>

        <div aria-live="polite" className="min-h-6">
          {status === "sent" && (
            <p className="flex items-start gap-2 rounded-lg bg-success/10 p-3 text-base text-foreground">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              <span>
                Thanks — your message is ready to send. This demo form has no backend yet, so email me
                directly and I will reply within a day.
              </span>
            </p>
          )}
        </div>
      </form>
    </Card>
  );
}
