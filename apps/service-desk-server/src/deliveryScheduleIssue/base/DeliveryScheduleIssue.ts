/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsInt,
  Min,
  Max,
  IsOptional,
  IsEnum,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumDeliveryScheduleIssuePriority } from "./EnumDeliveryScheduleIssuePriority";
import { EnumDeliveryScheduleIssueStatus } from "./EnumDeliveryScheduleIssueStatus";

@ObjectType()
class DeliveryScheduleIssue {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  deliveryId!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryScheduleIssuePriority,
  })
  @IsEnum(EnumDeliveryScheduleIssuePriority)
  @IsOptional()
  @Field(() => EnumDeliveryScheduleIssuePriority, {
    nullable: true,
  })
  priority?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reportedBy!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryScheduleIssueStatus,
  })
  @IsEnum(EnumDeliveryScheduleIssueStatus)
  @IsOptional()
  @Field(() => EnumDeliveryScheduleIssueStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  assignedTo!: string | null;
}

export { DeliveryScheduleIssue as DeliveryScheduleIssue };
