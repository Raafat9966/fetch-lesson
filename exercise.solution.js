// SOLUTION: Posts by User
// Same 4 steps as the Team Directory:  REQUEST -> CHECK -> UNPACK -> DISPLAY

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const userIdInput = document.querySelector("#user-id");
const loadButton = document.querySelector("#load-posts-btn");
const statusMessage = document.querySelector("#status");
const postList = document.querySelector("#post-list");

loadButton.addEventListener("click", loadPosts);

async function loadPosts() {
  const userId = userIdInput.value;

  statusMessage.textContent = "Loading...";
  postList.replaceChildren();

  try {
    // 1. REQUEST
    const response = await fetch(`${POSTS_URL}?userId=${userId}`);

    // 2. CHECK
    if (!response.ok) {
      throw new Error(`Server answered with status ${response.status}`);
    }

    // 3. UNPACK
    const posts = await response.json();

    // STRETCH: an empty list is NOT an error. The server said "OK, here are 0 posts."
    if (posts.length === 0) {
      statusMessage.textContent = "This user has no posts yet.";
      return;
    }

    // 4. DISPLAY
    posts.forEach((post) => {
      const item = document.createElement("li");
      item.textContent = post.title;
      postList.append(item);
    });
    statusMessage.textContent = `${posts.length} posts found.`;
  } catch (error) {
    console.error(error);
    statusMessage.textContent = "Sorry, we couldn't load the posts. Please try again.";
  }
}
