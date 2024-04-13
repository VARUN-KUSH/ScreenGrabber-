//import { isMobile, isShorts, extConfig } from "./state";
//import { isInViewport, querySelector, querySelectorAll } from "./utils";


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
      dislikeTextContainer: [".yt-spec-button-shape-next__button-text-content", "#text", "yt-formatted-string", "span[role='text']"],
      likeTextContainer: [".yt-spec-button-shape-next__button-text-content", "#text", "yt-formatted-string", "span[role='text']"],
      buttons: {
        shorts: {
          mobile: ["ytm-like-button-renderer"],
          desktop: ["#like-button > ytd-like-button-renderer"]
        },
        regular: {
          mobile: [".slim-video-action-bar-actions"],
          desktopMenu: ["ytd-menu-renderer.ytd-watch-metadata > div"],
          desktopNoMenu: ["#top-level-buttons-computed"]
        },
        likeButton: {
          segmented: ["#segmented-like-button"],
          segmentedGetButtons: [":first-child > :first-child"],
          notSegmented:  ["like-button-view-model", ":first-child"]
        },
        dislikeButton: {
          segmented: ["#segmented-dislike-button"],
          segmentedGetButtons: [":first-child > :nth-child(2)"],
          notSegmented: ["dislike-button-view-model", ":nth-child(2)"]
        },
      },
      menuContainer: ["#menu-container"],
      roundedDesign: ["#segmented-like-button", "like-button-view-model"]
    },
  };


function getButtons() {
    if (querySelector(extConfig.selectors.menuContainer)?.offsetParent === null) {
        return querySelector(extConfig.selectors.buttons.regular.desktopMenu);
    } else {
        return querySelector(extConfig.selectors.buttons.regular.desktopNoMenu);
    }
}

function getLikeButton() {
    return getButtons().children[0].tagName === "YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER" 
    ? querySelector(extConfig.selectors.buttons.likeButton.segmented) ?? 
        querySelector(extConfig.selectors.buttons.likeButton.segmentedGetButtons, getButtons())
    : querySelector(
        extConfig.selectors.buttons.likeButton.notSegmented,
        getButtons()
    );
}