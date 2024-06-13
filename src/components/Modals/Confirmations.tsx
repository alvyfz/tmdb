import NiceModal, { useModal } from "@ebay/nice-modal-react";
import ConfirmationModalTemplate from "./Templates/ConfirmationModal";
import closeNiceModal from "../../utils/helper/closeNiceModal";
import MODAL_IDS from "./modalIds";

export type ConfirmationsType = {
  message?: string;
  subMessage?: string;
  isLoading?: boolean;
  handleConfirm?: () => void;
  handleCancel?: () => void | null;
  variant?: "safe" | "warning" | "danger";
  withCancel?: boolean;
  withConfirm?: boolean;
  labelConfirm?: string;
  labelCancel?: string;
  modalWidth?: string;
  buttonWidth?: string;
};

const Confirmations = NiceModal.create(
  ({
    message,
    subMessage,
    isLoading,
    handleConfirm,
    handleCancel = null,
    variant = "safe",
    withCancel = true,
    withConfirm = true,
    labelCancel = "Tidak",
    labelConfirm = "Ya",
    modalWidth = "350px",
    buttonWidth,
  }: ConfirmationsType) => {
    const modalId = MODAL_IDS.GENERAL.CONFIRMATION;
    const modal = useModal(modalId);

    return (
      <ConfirmationModalTemplate
        isOpen={modal.visible}
        variant={variant}
        message={message}
        subMessage={subMessage}
        handleClose={
          handleCancel !== null ? handleCancel : () => closeNiceModal(modalId)
        }
        handleConfirm={handleConfirm}
        withCancel={withCancel}
        withConfirm={withConfirm}
        labelCancel={labelCancel}
        labelConfirm={labelConfirm}
        isLoadingConfirm={isLoading}
        width={modalWidth}
        buttonWidth={buttonWidth}
      />
    );
  },
);

export default Confirmations;
