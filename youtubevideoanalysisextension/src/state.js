import {
  getLikeButton,
  getDislikeButton,
  getButtons,
  getLikeTextContainer,
  getDislikeTextContainer,
} from "./buttons";
import { createRateBar } from "./bar";
import {
  getBrowser,
  getVideoId,
  cLog,
  numberFormat,
  getColorFromTheme,
  querySelector,
  localize,
  createObserver,
} from "./utils";

//TODO: Do not duplicate here and in ryd.background.js
const apiUrl = "https://returnyoutubedislikeapi.com";
const LIKED_STATE = "LIKED_STATE";
const DISLIKED_STATE = "DISLIKED_STATE";
const NEUTRAL_STATE = "NEUTRAL_STATE";

let extConfig = {
  disableVoteSubmission: false,
  coloredThumbs: false,
  coloredBar: false,
  colorTheme: "classic",
  numberDisplayFormat: "compactShort",
  showTooltipPercentage: false,
  tooltipPercentageMode: "dash_like",
  numberDisplayReformatLikes: false,
  selectors: {
    dislikeTextContainer: [],
    likeTextContainer: [],
    buttons: {
      shorts: {
        mobile: [],
        desktop: [],
      },
      regular: {
        mobile: [],
        desktopMenu: [],
        desktopNoMenu: [],
      },
      likeButton: {
        segmented: [],
        segmentedGetButtons: [],
        notSegmented: [],
      },
      dislikeButton: {
        segmented: [],
        segmentedGetButtons: [],
        notSegmented: [],
      },
    },
    menuContainer: [],
    roundedDesign: [],
  },
};

let storedData = {
  likes: 0,
  dislikes: 0,
  previousState: NEUTRAL_STATE,
};

function isShorts() {
  return location.pathname.startsWith("/shorts");
  console.log(location.pathname);
}

function isMobile() {
  return location.hostname == "m.youtube.com";
}
