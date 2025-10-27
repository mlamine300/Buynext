import About from "@/components/users/About";
import UserActivity from "@/components/users/UserActivity";
import UserBadges from "@/components/users/UserBadges";
import UserInformation from "@/components/users/UserInformation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <main className="flex flex-col lg:flex-row gap-8 p-5">
      <section className="flex flex-col gap-8 w-1/3 ">
        <About />
        <UserBadges />
        <UserInformation />
      </section>
      <section className="w-2/3 ">
        <UserActivity />
      </section>
    </main>
  );
};

export default page;
