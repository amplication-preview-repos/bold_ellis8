import * as graphql from "@nestjs/graphql";
import { EquipmentIssueResolverBase } from "./base/equipmentIssue.resolver.base";
import { EquipmentIssue } from "./base/EquipmentIssue";
import { EquipmentIssueService } from "./equipmentIssue.service";

@graphql.Resolver(() => EquipmentIssue)
export class EquipmentIssueResolver extends EquipmentIssueResolverBase {
  constructor(protected readonly service: EquipmentIssueService) {
    super(service);
  }
}
