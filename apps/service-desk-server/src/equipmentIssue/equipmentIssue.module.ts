import { Module } from "@nestjs/common";
import { EquipmentIssueModuleBase } from "./base/equipmentIssue.module.base";
import { EquipmentIssueService } from "./equipmentIssue.service";
import { EquipmentIssueController } from "./equipmentIssue.controller";
import { EquipmentIssueResolver } from "./equipmentIssue.resolver";

@Module({
  imports: [EquipmentIssueModuleBase],
  controllers: [EquipmentIssueController],
  providers: [EquipmentIssueService, EquipmentIssueResolver],
  exports: [EquipmentIssueService],
})
export class EquipmentIssueModule {}
