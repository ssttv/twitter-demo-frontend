const publicURL = process.env.PUBLIC_URL;

const tweets = [
  {
    id: 1,
    statusPin: true,
    userAvatar: `${publicURL}/img/small-avatar.png`,
    toDate: "/status/777",
    dateText: "2 Mar 2015",
    tweetText:
      "We've made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI",
    infoSrc: `${publicURL}/img/content.png`,
    infoPromo: false,
    infoTitle: null,
    infoText: null,
    toInfo: null,
    comments: null,
    retweets: 17,
    likes: 47,
    messages: null,
    activeLike: true
  },
  {
    id: 2,
    statusPin: false,
    userAvatar: `${publicURL}/img/small-avatar.png`,
    toDate: "/status/776",
    dateText: "23h",
    tweetText:
      "Our new website concept; Taking you from ... @ Every Interaction instagram.com/p/BNFGrfhBP3M/",
    infoSrc: null,
    infoPromo: false,
    infoTitle: null,
    infoText: null,
    toInfo: null,
    comments: 1,
    retweets: 4,
    likes: 2,
    messages: null,
    activeLike: false
  },
  {
    id: 3,
    statusPin: false,
    userAvatar: `${publicURL}/img/small-avatar.png`,
    toDate: "/status/777",
    dateText: "Nov 18",
    tweetText:
      "Variable web fonts are coming, and will open a world of opportunities for weight use online",
    infoSrc: `${publicURL}/img/peview.png`,
    infoPromo: true,
    infoTitle: "The Future of Web Fonts",
    infoText:
      "We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re",
    toInfo: "vilijamis.com",
    comments: null,
    retweets: null,
    likes: null,
    messages: null,
    activeLike: false
  }
];

export default tweets;
