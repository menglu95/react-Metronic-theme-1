import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import {
  CustomerStatusCssClasses,
  CustomerStatusTitles
} from "../CustomersUIHelpers";
import { useCustomersUIContext } from "../CustomersUIContext";

export function CustomersFetchDialog({ show, onHide }) {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids
    };
  }, [customersUIContext]);

  const { customers } = "";

  // if customers weren't selected we should close modal
  useEffect(() => {
    if (!customersUIProps.ids || customersUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customersUIProps.ids]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Fetch selected elements
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table table-head-custom table-vertical-center overflow-hidden">
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>CUSTOMER</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={`id${customer.id}`}>
                <td>{customer.id}</td>
                <td>
                  <span
                    className={`label label-lg label-light-${
                      CustomerStatusCssClasses[customer.status]
                    } label-inline`}
                  >
                    {" "}
                    {CustomerStatusTitles[customer.status]}
                  </span>
                </td>
                <td>
                  <span className="ml-3">
                    {customer.lastName}, {customer.firstName}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-primary btn-elevate"
          >
            Ok
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
