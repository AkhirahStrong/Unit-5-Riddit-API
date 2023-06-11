const resultsContainer = document.getElementById("riddit-result");
const subredditInput = document.getElementById("subreddit-input");
const subredditButton = document.getElementById("subreddit-button");

// Use JavaScript to request data from the
//https://www.reddit.com/r/aww/.json API.

function fetchAndDisplaySubredditPosts(subreddit) {
  fetch(" https://www.reddit.com/r/aww/.json")
    .then((response) => response.json())
    .then((data) => {
      const posts = data.data.children;

      const postRidditElements = posts.slice(0, 10).map((post) => {
        const { title, thumbnail, url, name } = post.data;

        const postRidditContainer = document.createElement("div");
        postRidditContainer.classList.add("post");

        /*At a minimum, include a title, an image and a working link 
        for each post. (Easiest is to use the thumbnail for the image, 
        but there are other images in the JSON response.)*/

        const postRidditTitle = document.createElement("h2");
        postRidditTitle.classList.add("riddit-title");
        postRidditTitle.textContent = title;

        const postRidditImg = document.createElement("img");
        postRidditImg.classList.add("post-img");
        postRidditImg.src = thumbnail;
        postRidditImg.alt = "Blocked by API";

        const postRidditUrl = document.createElement("a");
        postRidditUrl.classList.add("post-link");
        postRidditUrl.href = url;
        postRidditUrl.textContent = "Read more";

        const postRidditName = document.createElement("h4");
        postRidditName.classList.add("riddit-name");
        postRidditName.textContent = name;

        postRidditContainer.appendChild(postRidditTitle);
        postRidditContainer.appendChild(postRidditImg);
        postRidditContainer.appendChild(postRidditName);
        postRidditContainer.appendChild(postRidditUrl);

        return postRidditContainer;
      });

      // Display the results on the page.
      postRidditElements.forEach((postRidditElements) => {
        resultsContainer.appendChild(postRidditElements);
      });
    })

    .catch((error) => {
      console.error("Error:", error);
    });
}

/*Provide an input and button where the user can enter 
the name of a subreddit to display instead of always aww.*/
subredditButton.addEventListener("click", () => {
  //Only show the first ten results
  const subreddit = subredditInput.value.trim().slice(0, 10);
  if (subreddit !== "") {
    fetchAndDisplaySubredditPosts(subreddit);
  }
});
