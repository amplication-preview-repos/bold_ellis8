import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeliveryScheduleIssueWhereInput = {
  id?: StringFilter;
  deliveryId?: IntNullableFilter;
  priority?: "Option1";
  description?: StringNullableFilter;
  reportedBy?: StringNullableFilter;
  status?: "Option1";
  assignedTo?: StringNullableFilter;
};
