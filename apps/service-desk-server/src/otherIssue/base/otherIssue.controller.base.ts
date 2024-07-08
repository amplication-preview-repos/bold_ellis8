/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OtherIssueService } from "../otherIssue.service";
import { OtherIssueCreateInput } from "./OtherIssueCreateInput";
import { OtherIssue } from "./OtherIssue";
import { OtherIssueFindManyArgs } from "./OtherIssueFindManyArgs";
import { OtherIssueWhereUniqueInput } from "./OtherIssueWhereUniqueInput";
import { OtherIssueUpdateInput } from "./OtherIssueUpdateInput";

export class OtherIssueControllerBase {
  constructor(protected readonly service: OtherIssueService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OtherIssue })
  async createOtherIssue(
    @common.Body() data: OtherIssueCreateInput
  ): Promise<OtherIssue> {
    return await this.service.createOtherIssue({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        status: true,
        reportedBy: true,
        assignedTo: true,
        issueId: true,
        priority: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [OtherIssue] })
  @ApiNestedQuery(OtherIssueFindManyArgs)
  async otherIssues(@common.Req() request: Request): Promise<OtherIssue[]> {
    const args = plainToClass(OtherIssueFindManyArgs, request.query);
    return this.service.otherIssues({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        status: true,
        reportedBy: true,
        assignedTo: true,
        issueId: true,
        priority: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OtherIssue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async otherIssue(
    @common.Param() params: OtherIssueWhereUniqueInput
  ): Promise<OtherIssue | null> {
    const result = await this.service.otherIssue({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        status: true,
        reportedBy: true,
        assignedTo: true,
        issueId: true,
        priority: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: OtherIssue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOtherIssue(
    @common.Param() params: OtherIssueWhereUniqueInput,
    @common.Body() data: OtherIssueUpdateInput
  ): Promise<OtherIssue | null> {
    try {
      return await this.service.updateOtherIssue({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          status: true,
          reportedBy: true,
          assignedTo: true,
          issueId: true,
          priority: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: OtherIssue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOtherIssue(
    @common.Param() params: OtherIssueWhereUniqueInput
  ): Promise<OtherIssue | null> {
    try {
      return await this.service.deleteOtherIssue({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          status: true,
          reportedBy: true,
          assignedTo: true,
          issueId: true,
          priority: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
