import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

const UserBadges = () => {
  return (
    <Card className="flex flex-col p-2 border-0">
      <CardContent className="flex flex-col p-2 gap-5">
        <CardTitle className="text-xl ">User Badges </CardTitle>
        <div className="flex gap-5">
          <BadgeCheck className="bg-[#5f8aec60] rounded-full p-1 w-8 h-8 border border-[#5f8aec]" />
          <Shield className="bg-[#3eb64660] rounded-full p-1 w-8 h-8 border border-[#3eb646]" />
          <Candy className="bg-[#ead44860] rounded-full p-1 w-8 h-8 border border-[#ead448]" />
          <Citrus className="bg-[#ef440b60] rounded-full p-1 w-8 h-8 border border-[#ef440b]" />
        </div>
      </CardContent>
    </Card>
  );
};

export default UserBadges;
