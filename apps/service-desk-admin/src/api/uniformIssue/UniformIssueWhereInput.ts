import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UniformIssueWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  reportedBy?: StringNullableFilter;
  assignedTo?: StringNullableFilter;
  priority?: "Option1";
  description?: StringNullableFilter;
  uniformId?: IntNullableFilter;
};
