import * as graphql from "@nestjs/graphql";
import { UniformIssueResolverBase } from "./base/uniformIssue.resolver.base";
import { UniformIssue } from "./base/UniformIssue";
import { UniformIssueService } from "./uniformIssue.service";

@graphql.Resolver(() => UniformIssue)
export class UniformIssueResolver extends UniformIssueResolverBase {
  constructor(protected readonly service: UniformIssueService) {
    super(service);
  }
}
