import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

const urlFor = (source: Image) => imageBuilder?.image(source).auto("format").fit("max");

export default urlFor;
