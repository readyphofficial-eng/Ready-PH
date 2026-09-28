export type VideoCategory = 'Letters' | 'Numbers' | 'Colors' | 'Shapes' | 'Animals' | 'New Uploads';

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  date: string;
  category: VideoCategory;
  youtubeId?: string;
  url?: string;
}

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
}

export interface DevMessage {
  name: string;
  message: string;
  date: string;
}

export interface Profile {
  name: string;
  birthday: string;
  sex: string;
  address: string;
  picture: string;
  idNumber: string;
}

export interface GameScore {
  game: string;
  score: number;
  date: string;
}

export interface Achievement {
  id: string;
  name: string;
  done: boolean;
}

export interface ShopItem {
  logo: string;
  logoImg: string;
  title: string;
  desc: string;
  subDesc: string;
  link: string;
}

export interface Partner {
  name: string;
  logo: string;
  logoImg: string;
}
