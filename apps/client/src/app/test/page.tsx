import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const x = await auth();
  const token = await x.getToken();
  console.log({ token: `Bearer ${token}` });
  const orders = await fetch("http://localhost:8001/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await orders.json();
  console.log(data);
  return <div></div>;
};

export default page;
