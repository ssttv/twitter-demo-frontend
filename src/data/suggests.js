const publicURL = process.env.PUBLIC_URL;

const suggests = [
  {
    id: 1,
    src: `${publicURL}/img/rec-avatar-1.png`,
    name: "AppleInsider",
    status: false,
    handle: "appleinsider"
  },
  {
    id: 2,
    src: `${publicURL}/img/rec-avatar-2.png`,
    name: "Creode",
    status: true,
    handle: "Creode"
  },
  {
    id: 3,
    src: `${publicURL}/img/rec-avatar-3.png`,
    name: "Epiphany Search",
    status: false,
    handle: "Epiphanysearch"
  }
];

export default suggests;
