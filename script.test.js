/* Tests
Displays multiple aww results, each including at least the title.
Each post includes an image (if it has one).
Each post includes a link to the post on the reddit website.
At least 20 lines of CSS applied to spruce up the page.*/

const displayRidditPost = require("./script");

discribe("display riddit posts", () => {
  //Test Displays multiple aww results, each
  //including at least the title.
  it("should display multiple title", () => {
    const results = ["Result 1", "Result 2", "Result 3"];
    const postRidditContainer = document.createElement("div");

    displayResults(results, postRidditContainer);

    // Assert that each result has a postRidditTitle element
    results.forEach((result) => {
      /*This line uses the querySelector method to find an h2 
        element within the postRidditContainer that has a data-title 
        attribute matching the current result value.*/

      const postRidditTitle = postRidditContainer.querySelector(
        `h2[data-title="${result}"]`
      );

      /*In JavaScript, a truthy value is a value that is 
      considered "true" when encountered in a Boolean context.*/
      expect(postRidditTitle).toBeTruthy();
    });
  });
});
