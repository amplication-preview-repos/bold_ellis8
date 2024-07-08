export type EquipmentIssue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  reportedBy: string | null;
  assignedTo: string | null;
  equipmentId: number | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
};
