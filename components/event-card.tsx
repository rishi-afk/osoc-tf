import Image from "next/image";
import React from "react";
import { Icons } from "./icons";
import { RegisterDialog } from "./register-dialog";
import { RuleDialog } from "./rule-dialog";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

type Props = {
  id: number;
  heading: string;
  description: string;
  variant?: "LEFT" | "RIGHT";
  disableImage?: boolean;
};

const Event = ({ description, heading, id }: Props) => {
  return (
    <section className="flex lg:even:flex-row-reverse flex-col lg:flex-row items-center md:items-start gap-6 text-center md:text-left">
      <div>
        <h3 className="font-bold text-4xl">{heading}</h3>
        <div className="flex gap-3 h-5 items-center mt-2 justify-center md:justify-start">
          <RegisterDialog eventName={heading} eventId={id} />
          <Separator orientation="vertical" className="bg-foreground" />
          <RuleDialog
            eventName={heading}
            eventRules="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          minus hic rerum quisquam quaerat, neque rem vitae odio velit sequi
          mollitia. Aliquam libero minus vitae quos ab qui error eaque. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          dignissimos quibusdam aut quas. Fugit quod temporibus cumque molestias
          incidunt molestiae provident, itaque quia veniam dolor pariatur
          obcaecati error, maiores doloremque. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Ipsam possimus fuga ad, eos quis ipsa?
          Quidem, ad. Nemo perspiciatis ut modi, dolor veniam repellendus quos
          iure corrupti a possimus quas!"
          />
          <Separator orientation="vertical" className="bg-foreground" />
          <Badge variant="outline" className="p-0">
            <Icons.money size={18} />
          </Badge>
        </div>
      </div>
      <p className="text-3xl">{description}</p>
      <div className="flex-shrink-0">
        <Image
          src="https://picsum.photos/800"
          height={400}
          width={400}
          alt=""
        />
      </div>
    </section>
  );
};

export default Event;
