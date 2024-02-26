import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";

export const CardBalance1 = () => {
  const secondaryColor = "black";
  const textColor = "text-black"
  return (
    <Card className="xl:max-w-sm bg-primary rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community color={secondaryColor}/>
          <div className="flex flex-col">
            <span className={textColor}>Auto Insurance</span>
            <span className={`${textColor} text-xs`}>1311 Cars</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">$45,910</span>
          <span className="text-success text-xs">+ 4.5%</span>
        </div>
      </CardBody>
    </Card>
  );
};
