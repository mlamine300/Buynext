import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import avatar from "../../../public/boy.png";
const About = () => {
  return (
    <Card className="flex flex-col p-2 border-0">
      <CardContent className="flex flex-col p-2 gap-5">
        <div className="flex gap-2 items-center">
          <Image
            alt="avatar"
            src={avatar}
            width={500}
            height={500}
            className="w-12 h-12 rounded-full"
          />
          <h3 className="text-xl font-semibold">John Doe</h3>
        </div>
        <p className="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          inventore praesentium id architecto possimus dolor porro repudiandae,
          facere sequi, perspiciatis ea officia laudantium eos. Ullam
          consequuntur omnis sunt quibusdam magnam?
        </p>
      </CardContent>
    </Card>
  );
};

export default About;
