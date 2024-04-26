import React, { FC, PropsWithChildren } from "react";
import Button, { ButtonProps } from "./Button";
import { useFormStatus } from "react-dom";

const SubmitButton: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { pending } = useFormStatus();

  return (
    <Button {...props} disabled={pending} loading={pending}>
      {props.children}
    </Button>
  );
};

export default SubmitButton;
