import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EquipmentIssueServiceBase } from "./base/equipmentIssue.service.base";

@Injectable()
export class EquipmentIssueService extends EquipmentIssueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
