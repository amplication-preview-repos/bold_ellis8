import { Module } from "@nestjs/common";
import { UniformIssueModuleBase } from "./base/uniformIssue.module.base";
import { UniformIssueService } from "./uniformIssue.service";
import { UniformIssueController } from "./uniformIssue.controller";
import { UniformIssueResolver } from "./uniformIssue.resolver";

@Module({
  imports: [UniformIssueModuleBase],
  controllers: [UniformIssueController],
  providers: [UniformIssueService, UniformIssueResolver],
  exports: [UniformIssueService],
})
export class UniformIssueModule {}
