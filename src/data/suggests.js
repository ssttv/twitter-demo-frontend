// @flow

const PUBLIC_URL: string =
  process.env.PUBLIC_URL != null ? process.env.PUBLIC_URL : "";

type suggest = {
  id: number,
  src: string,
  name: string,
  status: boolean,
  username: string
};

const suggests: Array<suggest> = [
  {
    id: 1,
    src: `${PUBLIC_URL}/img/rec-avatar-1.png`,
    name: "AppleInsider",
    status: false,
    username: "appleinsider"
  },
  {
    id: 2,
    src: `${PUBLIC_URL}/img/rec-avatar-2.png`,
    name: "Creode",
    status: true,
    username: "Creode"
  },
  {
    id: 3,
    src: `${PUBLIC_URL}/img/rec-avatar-3.png`,
    name: "Epiphany Search",
    status: false,
    username: "Epiphanysearch"
  }
];

export default suggests;
