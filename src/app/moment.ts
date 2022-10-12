export interface Moment {
  id?: number; // ? = opcional
  title: string;
  description: string;
  image: string;
  created_at?: string; // ? = opcional
  updated_at?: string; // ? = opcional
  comments?: [{ text: string; username: string }];

}
