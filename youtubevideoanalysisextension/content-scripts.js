
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



















function querySelector(selectors, element) {
    let result;
    for (const selector of selectors) {
        result = (element ?? document).querySelector(selector)
        if(result) {
            return result;
        }
    }
    
}

function querySelectorAll(selectors) {
    let result;
    for (const selector of selectors) {
        result = document.querySelectorAll(selector);
        if(result.length > 0) {
            return result;
        }
    }
}


function getButtons() {
   
    if (querySelector(extConfig.selectors.menuContainer)?.offsetParent === null) {
      return querySelector(extConfig.selectors.buttons.regular.desktopMenu);
      //---   If Menu Element Isn't Displayed:   ---//
    } else {
      return querySelector(extConfig.selectors.buttons.regular.desktopNoMenu);
    }
}

// function getLikeButton() {
//     return getButtons().children[0].tagName ===
//       "YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER"
//       ? querySelector(extConfig.selectors.buttons.likeButton.segmented) ??
//           querySelector(
//             extConfig.selectors.buttons.likeButton.segmentedGetButtons,
//             getButtons(),
//           )
//       : querySelector(
//           extConfig.selectors.buttons.likeButton.notSegmented,
//           getButtons(),
//         );
// }

// function getLikeTextContainer() {
//     return querySelector(extConfig.selectors.likeTextContainer, getLikeButton());
// }

// function getDislikeButton() {
//     return getButtons().children[0].tagName ===
//       "YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER"
//       ? querySelector(extConfig.selectors.buttons.dislikeButton.segmented) ??
//           querySelector(
//             extConfig.selectors.buttons.dislikeButton.segmentedGetButtons,
//             getButtons(),
//           )
//       : 
//        querySelector(
//             extConfig.selectors.buttons.dislikeButton.notSegmented,
//             getButtons(),
//           );
// }

// function createDislikeTextContainer() {
//     const textNodeClone = (
//       getLikeButton().querySelector(
//         ".yt-spec-button-shape-next__button-text-content",
//       ) ||
//       getLikeButton().querySelector("button > div[class*='cbox']") ||
//       (
//         getLikeButton().querySelector('div > span[role="text"]') ||
//         document.querySelector(
//           'button > div.yt-spec-button-shape-next__button-text-content > span[role="text"]',
//         )
//       ).parentNode
//     ).cloneNode(true);
//     const insertPreChild = getDislikeButton().querySelector("button");
//     insertPreChild.insertBefore(textNodeClone, null);
//     getDislikeButton()
//       .querySelector("button")
//       .classList.remove("yt-spec-button-shape-next--icon-button");
//     getDislikeButton()
//       .querySelector("button")
//       .classList.add("yt-spec-button-shape-next--icon-leading");
//     if (textNodeClone.querySelector("span[role='text']") === null) {
//       const span = document.createElement("span");
//       span.setAttribute("role", "text");
//       while (textNodeClone.firstChild) {
//         textNodeClone.removeChild(textNodeClone.firstChild);
//       }
//       textNodeClone.appendChild(span);
//     }
//     textNodeClone.innerText = "";
//     return textNodeClone;
//   }
  
//   function getDislikeTextContainer() {
//     let result;
//     for (const selector of extConfig.selectors.dislikeTextContainer) {
//       result = getDislikeButton().querySelector(selector);
//       if (result !== null) {
//         break;
//       }
//     }
//     if (result == null) {
//       result = createDislikeTextContainer();
//     }
//     return result;
//   }

// let get = getButtons();
// let see = getLikeButton();
// let final = getLikeTextContainer();
// console.log(get)
// console.log(see)
// console.log(final)

// //window.nav

// function isMobile() { 
//   return location.hostname == "m.youtube.com";
// }

// function isShorts() {
//   return location.pathname.startsWith("/shorts");
// }

// function isNewDesign() {
//   return document.getElementById("comment-teaser") !== null;
// }

// function isRoundedDesign() {
//   return querySelector(extConfig.selectors.roundedDesign) !== null;
// }

// function getVideoId(url) {
//   const urlObject = new URL(url);
//   const pathname = urlObject.pathname;
//   if (pathname.startsWith("/clip")) {
//     return document.querySelector("meta[itemprop='videoId']").content;
//   } else {
//     if (pathname.startsWith("/shorts")) {
//       return pathname.slice(8);
//     }
//     return urlObject.searchParams.get("v");
//   }
// }

// function isVideoLoaded() {
//   const videoId = getVideoId(window.location.href);
//   return (
//     document.querySelector(`ytd-watch-flexy[video-id='${videoId}']`) !== null ||
//     // mobile: no video-id attribute
//     document.querySelector('#player[loading="false"]:not([hidden])') !== null
//   );
// }



// async function initExtConfig() {
//     initializeDisableVoteSubmission();
//     initializeColoredThumbs();
//     initializeColoredBar();
//     initializeColorTheme();
//     initializeNumberDisplayFormat();
//     initializeTooltipPercentage();
//     initializeTooltipPercentageMode();
//     initializeNumberDisplayReformatLikes();
    
// }

// function initializeDisableVoteSubmission() {
//     chrome.storage.sync.get(["disableVoteSubmission"], (res) => {
//       if (res.disableVoteSubmission === undefined) {
//         console.log(res)
//         console.log("krishna")
//         chrome.storage.sync.set({ disableVoteSubmission: false });
//       } else {
//         extConfig.disableVoteSubmission = res.disableVoteSubmission;
//         console.log(res, "in else")
//       }
//     });
// }



// await initExtConfig()

// let jsInitChecktimer = null;
// let isSetInitialStateDone = false;

// async function setEventListeners() {
//   async function checkForJS_Finish() {
//     try {
//       if(isShorts() || (getButtons()?.offsetParent && isVideoLoaded())) {
//         clearInterval(jsInitChecktimer)
//       }
//     } catch (error) {
      
//     }
//   }

//   if(jsInitChecktimer !== null) clearInterval(jsInitChecktimer);
//   jsInitChecktimer = setInterval(checkForJS_Finish, 12345)
// }

// await setEventListeners()


// const smartimationContainer = getButtons().querySelector("yt-smartimation");
// console.log(smartimationContainer)

// const apiKey = "AIzaSyDadZqj85IUNjuQVJetEX03QHzO-JEyteU"; 

// // Replace with your YouTube API key

// function getVideoId(url) {
//     const urlObject = new URL(url);
//     const pathname = urlObject.pathname;
//     if (pathname.startsWith("/clip")) {
//       return document.querySelector("meta[itemprop='videoId']").content;
//     } else {
//       if (pathname.startsWith("/shorts")) {
//         return pathname.slice(8);
//       }
//       return urlObject.searchParams.get("v");
//     }
// }

// const VIDEO_ID = getVideoId(window.location.href);

// fetch(`https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&key=${apiKey}&part=statistics`, {
//   method: "GET",
//   headers: {
//     "Accept-Encoding": "gzip",
//     "User-Agent": "my program (gzip)",
//     "Content-Type": "application/json",
//     // You can add more headers as needed
//   },
// })
// .then(response => {
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   return response.json();
// })
// .then(data => {
//   console.log(data);
// })
// .catch(error => {
//   console.error("Error fetching data:", error);
// });

// const outcome = fetch()
// console.log(outcome);