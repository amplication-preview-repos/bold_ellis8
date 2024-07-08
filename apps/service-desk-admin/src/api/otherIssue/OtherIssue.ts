export type OtherIssue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  status?: "Option1" | null;
  reportedBy: string | null;
  assignedTo: string | null;
  issueId: number | null;
  priority?: "Option1" | null;
};
