import React, { ReactElement } from "react";
import UserPageHeader from "../../../components/users/UserPageHeader";

const layout = ({ children }: any) => {
  return (
    <div className="w-full h-full">
      <UserPageHeader />
      {children}
    </div>
  );
};

export default layout;
