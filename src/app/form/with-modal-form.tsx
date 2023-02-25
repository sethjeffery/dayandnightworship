"use client";

import dynamic from "next/dynamic";
import { ComponentType, useState } from "react";
import type { ModalProps } from "../modal/modal-props";
import { ModalFormProps } from "./types";

const Modal = dynamic<ModalProps>(() => import("../modal/modal"), {
  ssr: false,
});

interface WithModalFormProps {
  lng: string;
  clickBackgroundToClose?: boolean;
}

interface ModalFormInternalProps {
  onOpenModal: () => void;
  onCloseModal: () => void;
}

export default function withModalForm<T extends WithModalFormProps>(
  Component: ComponentType<T>,
  FormComponent: ComponentType<ModalFormProps>
) {
  const displayName = Component.displayName || Component.name || "Component";

  function WithModalForm({
    clickBackgroundToClose,
    ...props
  }: Omit<T, keyof ModalFormInternalProps>) {
    const [open, setOpen] = useState(false);
    const handleCloseModal = () => setOpen(false);
    const handleOpenModal = () => setOpen(true);

    return (
      <>
        <Modal
          open={open}
          onClose={handleCloseModal}
          clickBackgroundToClose={clickBackgroundToClose}
          align="start"
        >
          <FormComponent onClose={handleCloseModal} lng={props.lng} />
        </Modal>
        <Component
          onOpenModal={handleOpenModal}
          onCloseModal={handleCloseModal}
          {...(props as any)}
        />
      </>
    );
  }

  WithModalForm.displayName = `withTheme(${displayName})`;
  return WithModalForm;
}
