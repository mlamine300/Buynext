import { columns } from "@/components/payments/paymentsColumns";
import { DataTable } from "@/components/data-table";
import React from "react";

type Payment = {
  id: string;
  user: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      user: "Alice Johnson",
      amount: 124.5,
      status: "success",
      email: "alice.johnson@example.com",
    },
    {
      id: "2",
      user: "Bob Smith",
      amount: 89.99,
      status: "pending",
      email: "bob.smith@example.com",
    },
    {
      id: "3",
      user: "Charlie Brown",
      amount: 230.0,
      status: "failed",
      email: "charlie.brown@example.com",
    },
    {
      id: "4",
      user: "Diana Prince",
      amount: 59.75,
      status: "processing",
      email: "diana.prince@example.com",
    },
    {
      id: "5",
      user: "Ethan Hunt",
      amount: 415.2,
      status: "success",
      email: "ethan.hunt@example.com",
    },
    {
      id: "6",
      user: "Fiona Gallagher",
      amount: 92.3,
      status: "pending",
      email: "fiona.gallagher@example.com",
    },
    {
      id: "7",
      user: "George Miller",
      amount: 310.45,
      status: "success",
      email: "george.miller@example.com",
    },
    {
      id: "8",
      user: "Hannah Davis",
      amount: 120.0,
      status: "processing",
      email: "hannah.davis@example.com",
    },
    {
      id: "9",
      user: "Ian Curtis",
      amount: 77.7,
      status: "failed",
      email: "ian.curtis@example.com",
    },
    {
      id: "10",
      user: "Jasmine Lee",
      amount: 145.5,
      status: "success",
      email: "jasmine.lee@example.com",
    },
    {
      id: "11",
      user: "Kevin Wright",
      amount: 289.9,
      status: "processing",
      email: "kevin.wright@example.com",
    },
    {
      id: "12",
      user: "Laura Green",
      amount: 65.4,
      status: "pending",
      email: "laura.green@example.com",
    },
    {
      id: "13",
      user: "Mark Spencer",
      amount: 412.75,
      status: "success",
      email: "mark.spencer@example.com",
    },
    {
      id: "14",
      user: "Nina Brooks",
      amount: 155.0,
      status: "failed",
      email: "nina.brooks@example.com",
    },
    {
      id: "15",
      user: "Oscar Turner",
      amount: 210.25,
      status: "success",
      email: "oscar.turner@example.com",
    },
    {
      id: "16",
      user: "Paula Adams",
      amount: 87.0,
      status: "pending",
      email: "paula.adams@example.com",
    },
    {
      id: "17",
      user: "Quentin Ross",
      amount: 190.5,
      status: "processing",
      email: "quentin.ross@example.com",
    },
    {
      id: "18",
      user: "Rachel Kim",
      amount: 305.75,
      status: "success",
      email: "rachel.kim@example.com",
    },
    {
      id: "19",
      user: "Sam Carter",
      amount: 58.6,
      status: "failed",
      email: "sam.carter@example.com",
    },
    {
      id: "20",
      user: "Tina Evans",
      amount: 220.4,
      status: "success",
      email: "tina.evans@example.com",
    },
    {
      id: "21",
      user: "Umar Patel",
      amount: 178.2,
      status: "pending",
      email: "umar.patel@example.com",
    },
    {
      id: "22",
      user: "Vera Collins",
      amount: 399.99,
      status: "processing",
      email: "vera.collins@example.com",
    },
    {
      id: "23",
      user: "Will Harris",
      amount: 240.0,
      status: "success",
      email: "will.harris@example.com",
    },
    {
      id: "24",
      user: "Xavier Reed",
      amount: 175.75,
      status: "failed",
      email: "xavier.reed@example.com",
    },
    {
      id: "25",
      user: "Yara Scott",
      amount: 88.9,
      status: "pending",
      email: "yara.scott@example.com",
    },
    {
      id: "26",
      user: "Zane Mitchell",
      amount: 330.2,
      status: "success",
      email: "zane.mitchell@example.com",
    },
    {
      id: "27",
      user: "Abby Flores",
      amount: 410.1,
      status: "processing",
      email: "abby.flores@example.com",
    },
    {
      id: "28",
      user: "Brian Lopez",
      amount: 275.3,
      status: "success",
      email: "brian.lopez@example.com",
    },
    {
      id: "29",
      user: "Carmen Diaz",
      amount: 155.9,
      status: "failed",
      email: "carmen.diaz@example.com",
    },
    {
      id: "30",
      user: "Derek Walsh",
      amount: 205.5,
      status: "pending",
      email: "derek.walsh@example.com",
    },
    {
      id: "31",
      user: "Ella Fisher",
      amount: 98.0,
      status: "success",
      email: "ella.fisher@example.com",
    },
    {
      id: "32",
      user: "Frankie Lewis",
      amount: 260.6,
      status: "processing",
      email: "frankie.lewis@example.com",
    },
    {
      id: "33",
      user: "Grace Young",
      amount: 149.99,
      status: "pending",
      email: "grace.young@example.com",
    },
    {
      id: "34",
      user: "Henry Allen",
      amount: 310.8,
      status: "success",
      email: "henry.allen@example.com",
    },
    {
      id: "35",
      user: "Isla Moore",
      amount: 275.0,
      status: "failed",
      email: "isla.moore@example.com",
    },
  ];
}
const page = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-5">
      <h3 className="px-4 text-xl font-semibold bg-muted-foreground/50 p-1 rounded">
        All Payments
      </h3>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
