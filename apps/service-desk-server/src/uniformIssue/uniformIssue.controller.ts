import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UniformIssueService } from "./uniformIssue.service";
import { UniformIssueControllerBase } from "./base/uniformIssue.controller.base";

@swagger.ApiTags("uniformIssues")
@common.Controller("uniformIssues")
export class UniformIssueController extends UniformIssueControllerBase {
  constructor(protected readonly service: UniformIssueService) {
    super(service);
  }
}
