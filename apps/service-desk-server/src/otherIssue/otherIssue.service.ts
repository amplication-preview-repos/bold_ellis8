import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OtherIssueServiceBase } from "./base/otherIssue.service.base";

@Injectable()
export class OtherIssueService extends OtherIssueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
