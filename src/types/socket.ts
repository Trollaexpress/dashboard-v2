export type SocketEvents = 'connect' | 'message-from-app';

export interface SocketEventPayloads {
  connect: void;
  'message-from-app': undefined;
}
