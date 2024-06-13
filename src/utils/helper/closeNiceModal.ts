import NiceModal from "@ebay/nice-modal-react";

export default function closeNiceModal(modalId: string) {
  NiceModal.hide(modalId);

  // remove modal to improve performance
  return new Promise<void>((resolve) =>
    // eslint-disable-next-line no-promise-executor-return
    setTimeout(() => {
      NiceModal.remove(modalId);
      return resolve();
    }, 100),
  );
}
