"use client";

import LoadingButton, { type LoadingButtonProps } from "@mui/lab/LoadingButton";
import React, { FC, PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton: FC<PropsWithChildren<LoadingButtonProps>> = (props) => {
  const { pending } = useFormStatus();
  return (
    <LoadingButton
      {...props}
      type="submit"
      disabled={pending}
      loading={pending}
    >
      {props.children}
    </LoadingButton>
  );
};

export default SubmitButton;
