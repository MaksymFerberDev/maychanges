export type TTeamData = {
  id: number;
  image: string;
  name: string;
  position: string;
  linkedin: string;
  modal: TteamModalData;
};

type TteamModalData = {
  short_description: string;
  description: string[];
  list?: {
    title: string;
    items: string[];
  };
};
