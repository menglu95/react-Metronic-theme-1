import React, { useEffect } from "react";
import { LoadingDialog } from "../../../../../../_metronic/_partials/controls";

export function ProductsLoadingDialog() {
  const { isLoading } = "";
  useEffect(() => {}, [isLoading]);
  return <LoadingDialog isLoading={isLoading} text="Loading ..." />;
}
