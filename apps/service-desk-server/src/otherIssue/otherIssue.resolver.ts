import * as graphql from "@nestjs/graphql";
import { OtherIssueResolverBase } from "./base/otherIssue.resolver.base";
import { OtherIssue } from "./base/OtherIssue";
import { OtherIssueService } from "./otherIssue.service";

@graphql.Resolver(() => OtherIssue)
export class OtherIssueResolver extends OtherIssueResolverBase {
  constructor(protected readonly service: OtherIssueService) {
    super(service);
  }
}
