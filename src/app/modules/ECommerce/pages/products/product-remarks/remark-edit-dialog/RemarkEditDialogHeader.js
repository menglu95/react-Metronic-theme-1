/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../../../../../_metronic/_partials/controls";

export function RemarkEditDialogHeader({ id }) {
  const [title, setTitle] = useState("");
  const { remarkForEdit, actionsLoading } = "";

  useEffect(() => {
    let _title = id ? "" : "New Remark";
    if (remarkForEdit && id) {
      _title = "Edit remark";
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [remarkForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
