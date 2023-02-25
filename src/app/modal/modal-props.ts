import { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  children: ReactNode;
  clickBackgroundToClose?: boolean;
  onClose: () => void;
  align: "start" | "center";
}
