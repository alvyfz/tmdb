import { ModalDef } from "@ebay/nice-modal-react";

import ErrorHandling from "../Errors/ErrorHandling";
import Confirmations from "./Confirmations";
import MODAL_IDS from "./modalIds";

export default function ModalPortal() {
  return (
    <>
      {/* General */}
      <ModalDef id="error-handling-dialog" component={ErrorHandling} />
      <ModalDef id={MODAL_IDS.GENERAL.CONFIRMATION} component={Confirmations} />
    </>
  );
}
