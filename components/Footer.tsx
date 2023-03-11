import { FC } from "react";
import { footerList1, footerList2, footerList3 } from "../utils";
import { ListProps } from "../types";

const List: FC<ListProps> = ({ items, mt }) => (
  <div className={`flex flex-wrap gap-2 ${mt ? "mt-5" : ""}`}>
    {items.map(item => (
      <p key={item} className="text-gray-400 text-sm hover:underline cursor-pointer">
        {item}
      </p>
    ))}
  </div>
);

const Footer: FC = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <List items={footerList1} mt={false} />
      <List items={footerList2} mt />
      <List items={footerList3} mt />
      <p className="text-gray-400 text-sm mt-5">2022 Tik Tik</p>
    </div>
  );
};

export default Footer;
