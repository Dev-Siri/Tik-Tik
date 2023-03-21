import { defineType } from "sanity";

export default defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "userName",
      title: "Username",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "string",
    },
  ],
});
