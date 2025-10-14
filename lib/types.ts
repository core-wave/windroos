export type FormResult<T = undefined> = T extends undefined
  ? { success?: boolean; error?: string }
  : {
      success?: boolean;
      error?: string;
      errors?: Record<string, FormFieldError>;
      fieldValues?: T;
    };

export type FormFieldError = {
  errors: string[];
  items?: FormFieldError[];
};
