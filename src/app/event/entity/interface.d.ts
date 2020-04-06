export interface IEvent {
  category: string;
  title: string;
  description: string;
}

export interface ISystemEvent extends IEvent {
  id: string;
  date: Date;
  description: string[];
}
