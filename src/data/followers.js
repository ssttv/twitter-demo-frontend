// @flow

const PUBLIC_URL: string =
  process.env.PUBLIC_URL != null ? process.env.PUBLIC_URL : "";

type follower = {
  id: number,
  name: string,
  src: string
};

const followers: Array<follower> = [
  {
    id: 1,
    name: "/mirhasanjamil75",
    src: `${PUBLIC_URL}/img/avatar-person-1.png`
  },
  {
    id: 2,
    name: "/alexdown",
    src: `${PUBLIC_URL}/img/avatar-person-2.png`
  },
  {
    id: 3,
    name: "/TerryCoopey",
    src: `${PUBLIC_URL}/img/avatar-person-3.png`
  },
  {
    id: 4,
    name: "/NiamhKeaneB_ID",
    src: `${PUBLIC_URL}/img/avatar-person-4.png`
  },
  {
    id: 5,
    name: "/venglarcik",
    src: `${PUBLIC_URL}/img/avatar-person-5.png`
  },
  {
    id: 6,
    name: "/katzedsgn",
    src: `${PUBLIC_URL}/img/avatar-person-6.png`
  }
];

export default followers;
