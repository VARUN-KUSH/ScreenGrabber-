const apiKey = "AIzaSyDadZqj85IUNjuQVJetEX03QHzO-JEyteU"; 

// Replace with your YouTube API key

function getVideoId(url) {
    const urlObject = new URL(url);
    const pathname = urlObject.pathname;
    if (pathname.startsWith("/clip")) {
      return document.querySelector("meta[itemprop='videoId']").content;
    } else {
      if (pathname.startsWith("/shorts")) {
        return pathname.slice(8);
      }
      return urlObject.searchParams.get("v");
    }
}

const VIDEO_ID = getVideoId("https://www.youtube.com/watch?v=o0fzqEqPmz8");

fetch(`https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&key=${apiKey}&part=statistics`, {
  method: "GET",
  headers: {
    "Accept-Encoding": "gzip",
    "User-Agent": "my program (gzip)",
    "Content-Type": "application/json",
    // You can add more headers as needed
  },
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error("Error fetching data:", error);
});