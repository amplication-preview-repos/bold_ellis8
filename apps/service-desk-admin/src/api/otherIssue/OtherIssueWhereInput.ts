import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OtherIssueWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  status?: "Option1";
  reportedBy?: StringNullableFilter;
  assignedTo?: StringNullableFilter;
  issueId?: IntNullableFilter;
  priority?: "Option1";
};
