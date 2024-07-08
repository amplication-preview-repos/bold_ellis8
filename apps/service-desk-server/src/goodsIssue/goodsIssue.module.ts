import { Module } from "@nestjs/common";
import { GoodsIssueModuleBase } from "./base/goodsIssue.module.base";
import { GoodsIssueService } from "./goodsIssue.service";
import { GoodsIssueController } from "./goodsIssue.controller";
import { GoodsIssueResolver } from "./goodsIssue.resolver";

@Module({
  imports: [GoodsIssueModuleBase],
  controllers: [GoodsIssueController],
  providers: [GoodsIssueService, GoodsIssueResolver],
  exports: [GoodsIssueService],
})
export class GoodsIssueModule {}
