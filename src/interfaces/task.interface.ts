import { Types } from "mongoose";

export enum TaskStatusEnum {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface ITask {
  _id: Types.ObjectId;
  title: string;
  description?: string;
  assignedTo?: Types.ObjectId;
  status: TaskStatusEnum;
  project: Types.ObjectId;
}
