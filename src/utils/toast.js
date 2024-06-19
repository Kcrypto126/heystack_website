import { toast } from "react-toastify";
import { ToastPosition } from "react-toastify";

const POSITION = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center",
};

export const toastError = (message, params) =>
  toast.error(message, {
    position: POSITION.TOP_CENTER,
    closeButton: params?.close || true,
  });

export const toastSuccess = (message) =>
  toast.success(message, {
    position: POSITION.TOP_CENTER,
    closeButton: true,
  });
