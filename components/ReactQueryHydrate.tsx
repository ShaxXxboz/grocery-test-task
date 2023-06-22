"use client";

import { Hydrate, HydrateProps } from "@tanstack/react-query";
import React from "react";

const ReactQueryHydrate = (props: HydrateProps) => {
  return <Hydrate {...props} />;
};

export default ReactQueryHydrate;
