export type IMessage = {
  id: string;
  sender: string;
  reciever: string;
  message: string;
  created_at: string;
  read_by: string[];
}