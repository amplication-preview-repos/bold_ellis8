import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OtherIssueService } from "./otherIssue.service";
import { OtherIssueControllerBase } from "./base/otherIssue.controller.base";

@swagger.ApiTags("otherIssues")
@common.Controller("otherIssues")
export class OtherIssueController extends OtherIssueControllerBase {
  constructor(protected readonly service: OtherIssueService) {
    super(service);
  }
}
