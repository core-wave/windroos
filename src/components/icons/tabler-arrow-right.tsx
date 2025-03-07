import React from "react";
import type { SVGProps } from "react";

export default function TablerArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14m-6 6l6-6m-6-6l6 6"
      ></path>
    </svg>
  );
}
