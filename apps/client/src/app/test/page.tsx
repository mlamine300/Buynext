import { auth } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  try {
    const { getToken } = await auth();
    const token = await getToken();
    const res = await fetch("http://localhost:8001/test", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  return <div>test</div>;
};

export default page;
