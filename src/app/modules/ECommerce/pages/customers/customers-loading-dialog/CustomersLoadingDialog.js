import React, { useEffect } from "react";
import { LoadingDialog } from "../../../../../../_metronic/_partials/controls";

export function CustomersLoadingDialog() {
  const { isLoading } = "";
  // looking for loading/dispatch
  useEffect(() => {}, [isLoading]);
  return <LoadingDialog isLoading={isLoading} text="Loading ..." />;
}
