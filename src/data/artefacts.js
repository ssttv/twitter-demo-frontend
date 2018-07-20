// @flow

const PUBLIC_URL: string =
  process.env.PUBLIC_URL != null ? process.env.PUBLIC_URL : "";

type artefact = {
  id: number,
  src: string,
  to: string,
  alt: string
};

const artefacts: Array<artefact> = [
  {
    id: 1,
    src: `${PUBLIC_URL}/img/media-1.png`,
    to: "/media_1",
    alt: "This is a media artefact"
  },
  {
    id: 2,
    src: `${PUBLIC_URL}/img/media-2.png`,
    to: "/media_2",
    alt: "This is a media artefact"
  },
  {
    id: 3,
    src: `${PUBLIC_URL}/img/media-3.png`,
    to: "/media_3",
    alt: "This is a media artefact"
  },
  {
    id: 4,
    src: `${PUBLIC_URL}/img/media-4.png`,
    to: "/media_4",
    alt: "This is a media artefact"
  },
  {
    id: 5,
    src: `${PUBLIC_URL}/img/media-5.png`,
    to: "/media_5",
    alt: "This is a media artefact"
  },
  {
    id: 6,
    src: `${PUBLIC_URL}/img/media-6.png`,
    to: "/media_6",
    alt: "This is a media artefact"
  }
];

export default artefacts;
