"use client";

import { useMemo, useState } from "react";
import ScrollRevealSection from "@/components/ScrollRevealSection";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formAction = useMemo(() => {
    const id = process.env.NEXT_PUBLIC_FORMSPREE_ID || "your_form_id";
    return `https://formspree.io/f/${id}`;
  }, []);

  const isConfigured = useMemo(() => {
    return Boolean(process.env.NEXT_PUBLIC_FORMSPREE_ID);
  }, []);

  return (
    <ScrollRevealSection id="contact" className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-zinc-900 dark:text-zinc-300">
          Send a message — I typically respond within 24 hours.
        </p>
        <form
          action={formAction}
          method="post"
          noValidate
          className="mt-6 grid gap-4"
          onSubmit={(e) => {
            const form = e.currentTarget;
            const data = new FormData(form);
            const name = (data.get("name") as string | null)?.trim() || "";
            const email = (data.get("email") as string | null)?.trim() || "";
            const message = (data.get("message") as string | null)?.trim() || "";

            const nextErrors: { name?: string; email?: string; message?: string } = {};
            if (name.length < 2) nextErrors.name = "Please enter your full name.";
            if (!EMAIL_REGEX.test(email)) nextErrors.email = "Please enter a valid email address.";
            if (message.length < 10) nextErrors.message = "Please write at least 10 characters.";

            if (nextErrors.name || nextErrors.email || nextErrors.message) {
              e.preventDefault();
              setErrors(nextErrors);
              setIsSubmitting(false);
            } else {
              // Clear errors and mark submitting; the browser will navigate to Formspree
              setErrors({});
              setIsSubmitting(true);
            }
          }}
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm">Name</label>
            <input
              id="name"
              name="name"
              required
              minLength={2}
              autoComplete="name"
              enterKeyHint="next"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              onInput={(e) => {
                const field = (e.currentTarget.name as "name" | "email" | "message");
                setErrors((prev) => ({ ...prev, [field]: undefined }));
              }}
              className={`rounded-md border px-3 py-2 bg-white dark:bg-neutral-900 text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 ${errors.name ? "border-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300" : "border-zinc-300 dark:border-zinc-700"}`}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-red-600">{errors.name}</p>
            )}
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              enterKeyHint="next"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              onInput={(e) => {
                const field = (e.currentTarget.name as "name" | "email" | "message");
                setErrors((prev) => ({ ...prev, [field]: undefined }));
              }}
              className={`rounded-md border px-3 py-2 bg-white dark:bg-neutral-900 text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 ${errors.email ? "border-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300" : "border-zinc-300 dark:border-zinc-700"}`}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-600">{errors.email}</p>
            )}
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              minLength={10}
              autoComplete="off"
              enterKeyHint="send"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              onInput={(e) => {
                const field = (e.currentTarget.name as "name" | "email" | "message");
                setErrors((prev) => ({ ...prev, [field]: undefined }));
              }}
              className={`rounded-md border px-3 py-2 bg-white dark:bg-neutral-900 text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 ${errors.message ? "border-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300" : "border-zinc-300 dark:border-zinc-700"}`}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-red-600">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-blue-600 text-white dark:bg-white dark:text-black px-4 py-2 text-sm w-fit transition-all duration-200 motion-safe:active:scale-[0.98] hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 dark:focus-visible:ring-zinc-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
        {!isConfigured && (
          <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">
            Tip: set NEXT_PUBLIC_FORMSPREE_ID in your environment to wire up submissions.
          </p>
        )}
        <div className="mt-6 flex gap-4 text-sm">
          <a href="https://formspree.io/" target="_blank" className="underline">Formspree</a>
          <a href="mailto:adedamolaijiwole@gmail.com" className="underline">Email</a>
        </div>
      </div>
    </ScrollRevealSection>
  );
}