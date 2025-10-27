import { DataTable } from "@/components/data-table";
import { columns } from "@/components/users/usersColumns";
import React from "react";

export type User = {
  id: string;
  avatar: string;
  fullName: string;
  email: string;
  status: "active" | "inactive";
};

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      avatar: "https://i.pravatar.cc/150?img=1",
      fullName: "Alice Johnson",
      email: "alice.johnson@example.com",
      status: "active",
    },
    {
      id: "2",
      avatar: "https://i.pravatar.cc/150?img=2",
      fullName: "Bob Smith",
      email: "bob.smith@example.com",
      status: "inactive",
    },
    {
      id: "3",
      avatar: "https://i.pravatar.cc/150?img=3",
      fullName: "Charlie Brown",
      email: "charlie.brown@example.com",
      status: "active",
    },
    {
      id: "4",
      avatar: "https://i.pravatar.cc/150?img=4",
      fullName: "Diana Prince",
      email: "diana.prince@example.com",
      status: "active",
    },
    {
      id: "5",
      avatar: "https://i.pravatar.cc/150?img=5",
      fullName: "Ethan Hunt",
      email: "ethan.hunt@example.com",
      status: "inactive",
    },
    {
      id: "6",
      avatar: "https://i.pravatar.cc/150?img=6",
      fullName: "Fiona Gallagher",
      email: "fiona.gallagher@example.com",
      status: "active",
    },
    {
      id: "7",
      avatar: "https://i.pravatar.cc/150?img=7",
      fullName: "George Miller",
      email: "george.miller@example.com",
      status: "active",
    },
    {
      id: "8",
      avatar: "https://i.pravatar.cc/150?img=8",
      fullName: "Hannah Davis",
      email: "hannah.davis@example.com",
      status: "inactive",
    },
    {
      id: "9",
      avatar: "https://i.pravatar.cc/150?img=9",
      fullName: "Ian Curtis",
      email: "ian.curtis@example.com",
      status: "active",
    },
    {
      id: "10",
      avatar: "https://i.pravatar.cc/150?img=10",
      fullName: "Jasmine Lee",
      email: "jasmine.lee@example.com",
      status: "active",
    },
    {
      id: "11",
      avatar: "https://i.pravatar.cc/150?img=11",
      fullName: "Kevin Wright",
      email: "kevin.wright@example.com",
      status: "inactive",
    },
    {
      id: "12",
      avatar: "https://i.pravatar.cc/150?img=12",
      fullName: "Laura Green",
      email: "laura.green@example.com",
      status: "active",
    },
    {
      id: "13",
      avatar: "https://i.pravatar.cc/150?img=13",
      fullName: "Mark Spencer",
      email: "mark.spencer@example.com",
      status: "active",
    },
    {
      id: "14",
      avatar: "https://i.pravatar.cc/150?img=14",
      fullName: "Nina Brooks",
      email: "nina.brooks@example.com",
      status: "inactive",
    },
    {
      id: "15",
      avatar: "https://i.pravatar.cc/150?img=15",
      fullName: "Oscar Turner",
      email: "oscar.turner@example.com",
      status: "active",
    },
    {
      id: "16",
      avatar: "https://i.pravatar.cc/150?img=16",
      fullName: "Paula Adams",
      email: "paula.adams@example.com",
      status: "inactive",
    },
    {
      id: "17",
      avatar: "https://i.pravatar.cc/150?img=17",
      fullName: "Quentin Ross",
      email: "quentin.ross@example.com",
      status: "active",
    },
    {
      id: "18",
      avatar: "https://i.pravatar.cc/150?img=18",
      fullName: "Rachel Kim",
      email: "rachel.kim@example.com",
      status: "active",
    },
    {
      id: "19",
      avatar: "https://i.pravatar.cc/150?img=19",
      fullName: "Sam Carter",
      email: "sam.carter@example.com",
      status: "inactive",
    },
    {
      id: "20",
      avatar: "https://i.pravatar.cc/150?img=20",
      fullName: "Tina Evans",
      email: "tina.evans@example.com",
      status: "active",
    },
    {
      id: "21",
      avatar: "https://i.pravatar.cc/150?img=21",
      fullName: "Umar Patel",
      email: "umar.patel@example.com",
      status: "inactive",
    },
    {
      id: "22",
      avatar: "https://i.pravatar.cc/150?img=22",
      fullName: "Vera Collins",
      email: "vera.collins@example.com",
      status: "active",
    },
    {
      id: "23",
      avatar: "https://i.pravatar.cc/150?img=23",
      fullName: "Will Harris",
      email: "will.harris@example.com",
      status: "active",
    },
    {
      id: "24",
      avatar: "https://i.pravatar.cc/150?img=24",
      fullName: "Xavier Reed",
      email: "xavier.reed@example.com",
      status: "inactive",
    },
    {
      id: "25",
      avatar: "https://i.pravatar.cc/150?img=25",
      fullName: "Yara Scott",
      email: "yara.scott@example.com",
      status: "active",
    },
    {
      id: "26",
      avatar: "https://i.pravatar.cc/150?img=26",
      fullName: "Zane Mitchell",
      email: "zane.mitchell@example.com",
      status: "inactive",
    },
    {
      id: "27",
      avatar: "https://i.pravatar.cc/150?img=27",
      fullName: "Abby Flores",
      email: "abby.flores@example.com",
      status: "active",
    },
    {
      id: "28",
      avatar: "https://i.pravatar.cc/150?img=28",
      fullName: "Brian Lopez",
      email: "brian.lopez@example.com",
      status: "active",
    },
    {
      id: "29",
      avatar: "https://i.pravatar.cc/150?img=29",
      fullName: "Carmen Diaz",
      email: "carmen.diaz@example.com",
      status: "inactive",
    },
    {
      id: "30",
      avatar: "https://i.pravatar.cc/150?img=30",
      fullName: "Derek Walsh",
      email: "derek.walsh@example.com",
      status: "active",
    },
    {
      id: "31",
      avatar: "https://i.pravatar.cc/150?img=31",
      fullName: "Ella Fisher",
      email: "ella.fisher@example.com",
      status: "inactive",
    },
    {
      id: "32",
      avatar: "https://i.pravatar.cc/150?img=32",
      fullName: "Frankie Lewis",
      email: "frankie.lewis@example.com",
      status: "active",
    },
    {
      id: "33",
      avatar: "https://i.pravatar.cc/150?img=33",
      fullName: "Grace Young",
      email: "grace.young@example.com",
      status: "active",
    },
    {
      id: "34",
      avatar: "https://i.pravatar.cc/150?img=34",
      fullName: "Henry Allen",
      email: "henry.allen@example.com",
      status: "inactive",
    },
    {
      id: "35",
      avatar: "https://i.pravatar.cc/150?img=35",
      fullName: "Isla Moore",
      email: "isla.moore@example.com",
      status: "active",
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
