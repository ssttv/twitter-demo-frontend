const publicURL = process.env.PUBLIC_URL;

const suggests = [
  {
    id: 1,
    src: `${publicURL}/img/rec-avatar-1.png`,
    name: "AppleInsider",
    status: false,
    username: "appleinsider"
  },
  {
    id: 2,
    src: `${publicURL}/img/rec-avatar-2.png`,
    name: "Creode",
    status: true,
    username: "Creode"
  },
  {
    id: 3,
    src: `${publicURL}/img/rec-avatar-3.png`,
    name: "Epiphany Search",
    status: false,
    username: "Epiphanysearch"
  }
];

export default suggests;
