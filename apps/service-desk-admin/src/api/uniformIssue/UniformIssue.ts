export type UniformIssue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  reportedBy: string | null;
  assignedTo: string | null;
  priority?: "Option1" | null;
  description: string | null;
  uniformId: number | null;
};
