export type DeliveryScheduleIssue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deliveryId: number | null;
  priority?: "Option1" | null;
  description: string | null;
  reportedBy: string | null;
  status?: "Option1" | null;
  assignedTo: string | null;
};
