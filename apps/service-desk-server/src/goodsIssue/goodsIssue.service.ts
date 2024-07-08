import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoodsIssueServiceBase } from "./base/goodsIssue.service.base";

@Injectable()
export class GoodsIssueService extends GoodsIssueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
