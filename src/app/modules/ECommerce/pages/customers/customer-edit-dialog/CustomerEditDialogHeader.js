import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";

export function CustomerEditDialogHeader({ id }) {
  const { customerForEdit, actionsLoading } = "";

  const [title, setTitle] = useState("");
  // Title couting
  useEffect(() => {
    let _title = id ? "" : "New Customer";
    if (customerForEdit && id) {
      _title = `Edit customer '${customerForEdit.firstName} ${customerForEdit.lastName}'`;
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [customerForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
