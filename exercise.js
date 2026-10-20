// EXERCISE: Posts by User
// Same 4 steps as the Team Directory:  REQUEST -> CHECK -> UNPACK -> DISPLAY
//
// The API address for one user's posts looks like this:
//   https://jsonplaceholder.typicode.com/posts?userId=1
// Open it in your browser first. What does ONE post look like?

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const userIdInput = document.querySelector("#user-id");
const loadButton = document.querySelector("#load-posts-btn");
const statusMessage = document.querySelector("#status");
const postList = document.querySelector("#post-list");

loadButton.addEventListener("click", loadPosts);

async function loadPosts() {
  const userId = userIdInput.value;

  // TODO 0: show "Loading..." and clear the old list

  // TODO 1. REQUEST: fetch the posts for this userId

  // TODO 2. CHECK: if the response is not ok, throw an error

  // TODO 3. UNPACK: turn the response into JavaScript data

  // TODO 4. DISPLAY: for each post, create an <li> with the post's title

  // TODO 5: wrap your code in try...catch and show a friendly message if it fails

  // STRETCH: try user ID 42. Nothing breaks, but nothing appears either. Why?
  //          Show "This user has no posts yet." in that case.
}
