import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EquipmentIssueService } from "./equipmentIssue.service";
import { EquipmentIssueControllerBase } from "./base/equipmentIssue.controller.base";

@swagger.ApiTags("equipmentIssues")
@common.Controller("equipmentIssues")
export class EquipmentIssueController extends EquipmentIssueControllerBase {
  constructor(protected readonly service: EquipmentIssueService) {
    super(service);
  }
}
