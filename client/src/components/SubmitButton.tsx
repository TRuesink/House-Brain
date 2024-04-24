"use client";

import React, { FC, PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton: FC<PropsWithChildren> = (props) => {
  const { pending } = useFormStatus();
  return (
    <button {...props} type="submit" disabled={pending}>
      {props.children}
    </button>
  );
};

export default SubmitButton;
