export type GoodsIssue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  goodsId: number | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  reportedBy: string | null;
  assignedTo: string | null;
};
