import React, { ReactElement } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
type CardListProps<T> = {
  title: string;
  list: T[];
  translate?: {
    id: keyof T;
    title: keyof T;
    badge: keyof T;
    image: keyof T;
    count: keyof T;
  };
  render?: (item: T) => React.JSX.Element;
};
const CardList = <T extends Record<string, any>>({
  title,
  list,
  translate,
  render,
}: CardListProps<T>) => {
  if (!translate) {
    translate = {
      id: "id",
      title: "title",
      badge: "badge",
      image: "image",
      count: "count",
    };
  }

  if (!render) {
    render = (item: T) => (
      <Card key={item[translate.id]} className=" p-2 ">
        <CardContent className=" rounded-lg flex gap-4 items-center py-1 px-2">
          <Image
            src={item[translate.image]}
            alt={item[translate.title]}
            width={500}
            height={500}
            className="rounded w-12 h-12 object-cover "
          />
          <div className="flex flex-col gap-2">
            <CardTitle>{item[translate.title]} </CardTitle>
            <CardDescription>
              <Badge variant={"secondary"}>{item[translate.badge]}</Badge>
            </CardDescription>
          </div>
          <h3 className="ml-auto">{item[translate.count] / 1000}k </h3>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold my-2">{title} </h3>
      {list.map(render)}
    </div>
  );
};

export default CardList;
