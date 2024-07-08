import * as graphql from "@nestjs/graphql";
import { GoodsIssueResolverBase } from "./base/goodsIssue.resolver.base";
import { GoodsIssue } from "./base/GoodsIssue";
import { GoodsIssueService } from "./goodsIssue.service";

@graphql.Resolver(() => GoodsIssue)
export class GoodsIssueResolver extends GoodsIssueResolverBase {
  constructor(protected readonly service: GoodsIssueService) {
    super(service);
  }
}
