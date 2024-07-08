import { Module } from "@nestjs/common";
import { OtherIssueModuleBase } from "./base/otherIssue.module.base";
import { OtherIssueService } from "./otherIssue.service";
import { OtherIssueController } from "./otherIssue.controller";
import { OtherIssueResolver } from "./otherIssue.resolver";

@Module({
  imports: [OtherIssueModuleBase],
  controllers: [OtherIssueController],
  providers: [OtherIssueService, OtherIssueResolver],
  exports: [OtherIssueService],
})
export class OtherIssueModule {}
