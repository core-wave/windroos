"use client";

import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useActionState, useMemo, useReducer } from "react";
import { DateRange } from "react-day-picker";
import { submitContactForm } from "./submitContactForm";
import { Spinner } from "../ui/spinner";

type Apartment = "east" | "west" | "both";
type ChildBed = "no" | "yes" | "east" | "west" | "both";

type State = {
  calendarOpen: boolean;
  dateRange?: DateRange;
  apartment: Apartment;
  childBed: ChildBed;
  guests: 1 | 2 | 3 | 4;
};

type Action =
  | { type: "SET_APARTMENT"; value: Apartment }
  | { type: "SET_CHILD_BED"; value: ChildBed }
  | { type: "SET_GUESTS"; value: 1 | 2 | 3 | 4 }
  | { type: "SET_DATE_RANGE"; value: DateRange | undefined }
  | { type: "SET_CALENDAR_OPEN"; value: boolean };

const initialState: State = {
  calendarOpen: false,
  dateRange: undefined,
  apartment: "east",
  childBed: "no",
  guests: 1,
};

function normalizeOnApartmentChange(
  prev: State,
  nextApartment: Apartment
): State {
  let nextGuests = prev.guests;
  let nextChildBed: ChildBed = prev.childBed;

  if (nextApartment === "both") {
    // both apartments: min 2 guests
    if (nextGuests === 1) nextGuests = 2;

    // if user had a generic "yes", map it to the previously selected apartment
    if (prev.childBed === "yes") {
      nextChildBed = prev.apartment === "east" ? "east" : "west";
    }
  } else {
    // single apartment: max 2 guests
    if (nextGuests > 2) nextGuests = 2;

    // child bed must be either "no" or generic "yes" on single apartment
    if (
      prev.childBed === "east" ||
      prev.childBed === "west" ||
      prev.childBed === "both"
    ) {
      nextChildBed = "yes";
    }
  }

  return {
    ...prev,
    apartment: nextApartment,
    guests: nextGuests,
    childBed: nextChildBed,
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_APARTMENT":
      return normalizeOnApartmentChange(state, action.value);

    case "SET_CHILD_BED": {
      // Guard impossible choices:
      // - On single apartment, only "no" or "yes" make sense
      // - On both apartments, allow "no" | "east" | "west" | "both"
      if (state.apartment !== "both") {
        const v: ChildBed = action.value === "no" ? "no" : "yes";
        return { ...state, childBed: v };
      }
      return { ...state, childBed: action.value };
    }

    case "SET_GUESTS": {
      // Enforce guest limits by apartment selection
      if (state.apartment === "both") {
        const v = Math.min(4, Math.max(2, action.value)) as 2 | 3 | 4;
        return { ...state, guests: v };
      } else {
        const v = action.value === 1 || action.value === 2 ? action.value : 2;
        return { ...state, guests: v };
      }
    }

    case "SET_DATE_RANGE":
      return { ...state, dateRange: action.value };

    case "SET_CALENDAR_OPEN":
      return { ...state, calendarOpen: action.value };

    default:
      return state;
  }
}

function formatDateRange(range: DateRange | undefined, locale?: string) {
  if (!range?.from || !range?.to) return "";
  const fmt = new Intl.DateTimeFormat(locale ?? undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return `${fmt.format(range.from)} - ${fmt.format(range.to)}`;
}

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, action, isLoading] = useActionState(submitContactForm, {});

  // Options derived from current state
  const guestOptions = useMemo(() => {
    return state.apartment === "both"
      ? ([2, 3, 4] as const)
      : ([1, 2] as const);
  }, [state.apartment]);

  const childBedOptions = useMemo(() => {
    if (state.apartment === "both") {
      return ["no", "east", "west", "both"] as const;
    }
    return ["no", "yes"] as const;
  }, [state.apartment]);

  const dateLabel = state.dateRange
    ? formatDateRange(
        state.dateRange,
        typeof window !== "undefined" ? navigator.language : undefined
      )
    : t("fields.datesPlaceholder");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-green-800">{t("title")}</CardTitle>
        <CardDescription>{t("subtitle")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="name">{t("fields.name")}</Label>
              <Input
                id="name"
                name="name"
                defaultValue={formState.fieldValues?.name}
              />
              {formState.errors && formState.errors["name"] && (
                <p className="text-xs text-destructive">
                  {formState.errors["name"].errors[0]}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="email">{t("fields.email")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue={formState.fieldValues?.email}
              />
              {formState.errors && formState.errors["email"] && (
                <p className="text-xs text-destructive">
                  {formState.errors["email"].errors[0]}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="phone">{t("fields.phone")}</Label>
            <Input id="phone" name="phone" />
          </div>

          <div className="flex flex-col gap-1">
            <Label>{t("fields.apartments")}</Label>
            <Tabs
              value={state.apartment}
              onValueChange={(value) =>
                dispatch({ type: "SET_APARTMENT", value: value as Apartment })
              }
            >
              <TabsList className="w-full">
                <TabsTrigger value="east">{t("fields.east")}</TabsTrigger>
                <TabsTrigger value="west">{t("fields.west")}</TabsTrigger>
                <TabsTrigger value="both">{t("fields.both")}</TabsTrigger>
              </TabsList>
            </Tabs>
            <input type="hidden" name="apartment" value={state.apartment} />
          </div>

          <div className="flex flex-col gap-1">
            <Label>{t("fields.childBed")}</Label>
            <Tabs
              value={state.childBed}
              onValueChange={(value) =>
                dispatch({ type: "SET_CHILD_BED", value: value as ChildBed })
              }
            >
              <TabsList className="w-full">
                {childBedOptions.map((opt) => (
                  <TabsTrigger key={opt} value={opt}>
                    {opt === "no"
                      ? t("fields.no")
                      : opt === "yes"
                      ? t("fields.yes")
                      : t(`fields.${opt}`)}
                    {/* east/west/both i18n */}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <input type="hidden" name="childBed" value={state.childBed} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Dates */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="date">{t("fields.dates")}</Label>
              <Popover
                open={state.calendarOpen}
                onOpenChange={(v) =>
                  dispatch({ type: "SET_CALENDAR_OPEN", value: v })
                }
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-48 justify-between font-normal"
                  >
                    {dateLabel}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="range"
                    min={1}
                    disabled={[{ before: new Date() }]}
                    selected={state.dateRange}
                    captionLayout="dropdown"
                    onSelect={(range) =>
                      dispatch({ type: "SET_DATE_RANGE", value: range })
                    }
                  />
                </PopoverContent>
              </Popover>
              {formState.errors &&
                (formState.errors["date_from"] ||
                  formState.errors["date_to"]) && (
                  <p className="text-xs text-destructive">
                    {formState.errors["date_from"].errors[0] ||
                      formState.errors["date_to"].errors[0]}
                  </p>
                )}
              {/* Store ISO to submit if you like */}
              <input
                type="hidden"
                name="date_from"
                value={state.dateRange?.from?.toLocaleDateString("nl-NL") ?? ""}
              />
              <input
                type="hidden"
                name="date_to"
                value={state.dateRange?.to?.toLocaleDateString("nl-NL") ?? ""}
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-1">
              <Label>{t("fields.guests")}</Label>
              <Tabs
                value={String(state.guests)}
                onValueChange={(value) =>
                  dispatch({
                    type: "SET_GUESTS",
                    value: Number(value) as 1 | 2 | 3 | 4,
                  })
                }
              >
                <TabsList className="w-full">
                  {guestOptions.map((g) => (
                    <TabsTrigger key={g} value={String(g)}>
                      {g}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <input
                type="hidden"
                id="guests"
                name="guests"
                value={state.guests}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="message">{t("fields.message")}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t("fields.messagePlaceholder")}
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800"
          >
            {t("submit")} {isLoading && <Spinner />}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
