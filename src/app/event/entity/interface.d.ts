import { Dictionary } from "../../utils/types";

export interface IEvent {
  category: string;
  title: string;
  description: string;
}

export interface ISystemEvent extends IEvent {
  id: string;
  date: string;
  description: string[];
}

export type SystemEvents = Dictionary<ISystemEvent>
