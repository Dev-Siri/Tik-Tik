import { FaVideoSlash } from "@react-icons/all-files/fa/FaVideoSlash";
import { BiCommentX } from "@react-icons/all-files/bi/BiCommentX";

import type { FC } from "react";
import type { NoResultsProps } from "../types";

const NoResults: FC<NoResultsProps> = ({ text }) => (
  <article className="flex flex-col justify-center items-center h-full w-full">
    <p className="text-8xl">{text === "No comments yet!" ? <BiCommentX /> : <FaVideoSlash />}</p>
    <p className="text-2xl text-center">{text}</p>
  </article>
);

export default NoResults;
