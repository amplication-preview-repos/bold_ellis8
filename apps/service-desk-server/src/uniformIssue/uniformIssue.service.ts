import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UniformIssueServiceBase } from "./base/uniformIssue.service.base";

@Injectable()
export class UniformIssueService extends UniformIssueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
