import type { SchemaTypeDefinition } from "sanity";

import comment from "./schemas/comment";
import post from "./schemas/post";
import postedBy from "./schemas/postedBy";
import user from "./schemas/user";

const schemaTypes: SchemaTypeDefinition[] = [post, user, comment, postedBy];

export default schemaTypes;
