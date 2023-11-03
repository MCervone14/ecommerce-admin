"use client";

import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrdersColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/dataTable";

interface OrderClientProps {
  data: OrdersColumn[];
}

const OrderClient = ({ data }: OrderClientProps) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
};

export default OrderClient;
