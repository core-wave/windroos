export type FieldErrors<T extends Record<string, unknown>> = Partial<
  Record<keyof T, { errors: string[] }>
>;

export type FormState<T extends Record<string, unknown>> =
  | { status: "default"; fieldValues?: Partial<T> }
  | {
      status: "error";
      fieldValues?: Partial<T>;
      fieldErrors?: FieldErrors<T>;
      formErrors?: string[];
    }
  | {
      status: "success";
      fieldValues?: Partial<T>;
    };
