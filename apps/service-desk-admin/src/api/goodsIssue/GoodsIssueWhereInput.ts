import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type GoodsIssueWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  goodsId?: IntNullableFilter;
  priority?: "Option1";
  status?: "Option1";
  reportedBy?: StringNullableFilter;
  assignedTo?: StringNullableFilter;
};
