export type TMediaData = {
  title: string;
  text: string;
  readMore: string | null;
  date: string;
  media: string | null;
  tweet: string | null;
  podcast: {
    height: number;
    url: string;
  } | null;
};
