import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type EquipmentIssueWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  reportedBy?: StringNullableFilter;
  assignedTo?: StringNullableFilter;
  equipmentId?: IntNullableFilter;
  priority?: "Option1";
  status?: "Option1";
};
