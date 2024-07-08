import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GoodsIssueService } from "./goodsIssue.service";
import { GoodsIssueControllerBase } from "./base/goodsIssue.controller.base";

@swagger.ApiTags("goodsIssues")
@common.Controller("goodsIssues")
export class GoodsIssueController extends GoodsIssueControllerBase {
  constructor(protected readonly service: GoodsIssueService) {
    super(service);
  }
}
