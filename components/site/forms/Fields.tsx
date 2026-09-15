"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

// 16px inputs avoid iOS zoom-on-focus; forest ring on white keeps focus indicators at AA.
const control =
  "h-[52px] w-full rounded-button border border-hh-rule-dark bg-white px-4 text-[16px] text-hh-onyx placeholder:text-hh-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2";

const labelCls = "text-[14px] font-bold leading-5 text-hh-onyx";

interface BaseProps {
  label: string;
  required?: boolean;
  className?: string;
}

function RequiredMark({ required }: { required?: boolean }) {
  return required ? <span aria-hidden="true"> *</span> : null;
}

export function TextField({
  label,
  required,
  className,
  ...input
}: BaseProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className" | "id">) {
  const id = useId();
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className={labelCls}>
        {label}
        <RequiredMark required={required} />
      </label>
      <input id={id} required={required} className={control} {...input} />
    </div>
  );
}

export function SelectField({
  label,
  required,
  className,
  options,
  ...select
}: BaseProps & { options: { value: string; label: string }[] } & Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "className" | "id"
  >) {
  const id = useId();
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className={labelCls}>
        {label}
        <RequiredMark required={required} />
      </label>
      <select id={id} required={required} className={control} {...select}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextAreaField({
  label,
  required,
  className,
  ...textarea
}: BaseProps & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className" | "id">) {
  const id = useId();
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className={labelCls}>
        {label}
        <RequiredMark required={required} />
      </label>
      <textarea
        id={id}
        required={required}
        rows={4}
        className={cn(control, "h-auto resize-y py-3")}
        {...textarea}
      />
    </div>
  );
}

export function CheckboxField({
  children,
  className,
  boxed,
  ...input
}: {
  children: React.ReactNode;
  className?: string;
  /** Renders as a tappable panel, for multi-select option grids. */
  boxed?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "className" | "id" | "children">) {
  const id = useId();
  return (
    <div
      className={cn(
        "flex items-start gap-3",
        boxed && "rounded-button bg-hh-panel p-3 has-[:checked]:bg-hh-mint",
        className,
      )}
    >
      <input
        id={id}
        type="checkbox"
        className="mt-0.5 h-5 w-5 shrink-0 accent-hh-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2"
        {...input}
      />
      <label htmlFor={id} className="text-[15px] leading-[22px] text-hh-onyx">
        {children}
      </label>
    </div>
  );
}

export function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p role="alert" className="m-0 rounded-button bg-[#FEE2E2] px-4 py-3 text-[15px] leading-[22px] text-[#991B1B]">
      {message}
    </p>
  );
}
