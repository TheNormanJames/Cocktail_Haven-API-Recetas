import { StateCreator } from 'zustand';

type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};
export type NotificationSliceType = {
  notificaction: Notification;
};

export const NotificationSlice: StateCreator<NotificationSliceType> = (
  set
) => ({
  notificaction: {} as Notification,
});
