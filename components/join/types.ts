export type JoinType = "resident" | "business";

/** One screen of the flow. The flow itself supplies the <form>, heading and buttons. */
export interface StepDef {
  key: string;
  title: string;
  description?: string;
  body: React.ReactNode;
  /** Overrides the default "Continue" label, used on the final step of a path. */
  submitLabel?: string;
}

export interface JoinForm {
  // Resident
  firstName: string;
  lastName: string;
  suburb: string;
  interests: string[];
  // Business
  businessName: string;
  businessAddress: string;
  contactPerson: string;
  founding: "" | "yes" | "no";
  wantsWindowSticker: boolean;
  // Shared
  email: string;
  mobile: string;
  consent: boolean;
}

export const EMPTY_FORM: JoinForm = {
  firstName: "",
  lastName: "",
  suburb: "Linden",
  interests: [],
  businessName: "",
  businessAddress: "",
  contactPerson: "",
  founding: "",
  wantsWindowSticker: true,
  email: "",
  mobile: "",
  consent: false,
};

export type SetField = <K extends keyof JoinForm>(key: K, value: JoinForm[K]) => void;
