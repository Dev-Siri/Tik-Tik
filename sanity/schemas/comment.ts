import { defineType } from "sanity";

export default defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "postedBy",
      title: "Posted By",
      type: "postedBy",
    },
    {
      name: "comment",
      title: "Comment",
      type: "string",
    },
  ],
});
