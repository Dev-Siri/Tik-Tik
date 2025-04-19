import { BiCommentX } from "@react-icons/all-files/bi/BiCommentX";
import { FaVideoSlash } from "@react-icons/all-files/fa/FaVideoSlash";

interface Props {
  text: string;
}

export default function NoResults({ text }: Props) {
  return (
    <article className="flex flex-col justify-center items-center h-full w-full">
      <p className="text-8xl">{text === "No comments yet!" ? <BiCommentX /> : <FaVideoSlash />}</p>
      <p className="text-2xl text-center">{text}</p>
    </article>
  );
}
