/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { useSpecificationsUIContext } from "./SpecificationsUIContext";

export function SpecificationsDeleteDialog() {
  // Specs UI Context
  const specsUIContext = useSpecificationsUIContext();
  const specsUIProps = useMemo(() => {
    return {
      productId: specsUIContext.productId,
      ids: specsUIContext.ids,
      show: specsUIContext.showDeleteSpecificationsDialog,
      onHide: specsUIContext.closeDeleteSpecificationsDialog,
      setIds: specsUIContext.setIds,
      queryParams: specsUIContext.queryParams
    };
  }, [specsUIContext]);

  const dispatch = "";
  const { isLoading } = "";
  const actions = "";

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  // if there weren't selected specs we should close modal
  useEffect(() => {
    if (!specsUIProps.ids || specsUIProps.ids.length === 0) {
      specsUIProps.onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specsUIProps.ids]);

  const deleteSpecifications = () => {
    // server request for selected deleting specs
    dispatch(actions.deleteSpecifications(specsUIProps.ids)).then(() => {
      // refresh list after deletion
      dispatch(
        actions.fetchSpecifications(
          specsUIProps.queryParams,
          specsUIProps.productId
        )
      ).then(() => {
        specsUIProps.setIds([]);
        specsUIProps.onHide();
      });
    });
  };

  return (
    <Modal
      show={specsUIProps.show}
      onHide={specsUIProps.onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Specifications Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>
            Are you sure to permanently delete selected specifications?
          </span>
        )}
        {isLoading && <span>Specifications are deleting...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={specsUIProps.onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteSpecifications}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
