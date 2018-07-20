// @flow

type trend = {
  id: number,
  tag: string,
  text?: string | null,
  tweets?: number | null
};

const trends: Array<trend> = [
  {
    id: 1,
    tag: "#BringYourDogToWorkDay",
    text: null,
    tweets: null
  },
  {
    id: 2,
    tag: "#FridayFeeling",
    text: null,
    tweets: 12100
  },
  {
    id: 3,
    tag: "#BrexitAnniversary",
    text: "It’s one year since the UK voted to leave the European Union",
    tweets: null
  },
  {
    id: 4,
    tag: "HMS Queen Elizabeth",
    text: null,
    tweets: 1036
  },
  {
    id: 5,
    tag: "Joe Budden",
    text: null,
    tweets: 1036
  },
  {
    id: 6,
    tag: "Trident",
    text: null,
    tweets: 6136
  }
];

export default trends;
