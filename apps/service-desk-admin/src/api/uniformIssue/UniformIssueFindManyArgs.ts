import { UniformIssueWhereInput } from "./UniformIssueWhereInput";
import { UniformIssueOrderByInput } from "./UniformIssueOrderByInput";

export type UniformIssueFindManyArgs = {
  where?: UniformIssueWhereInput;
  orderBy?: Array<UniformIssueOrderByInput>;
  skip?: number;
  take?: number;
};
