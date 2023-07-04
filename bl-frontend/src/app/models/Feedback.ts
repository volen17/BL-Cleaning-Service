import {User} from "./User";

export interface NewFeedback {
  description: string;
  email: string;
}

export interface Feedback {
  description: string;
  user: User;
}
