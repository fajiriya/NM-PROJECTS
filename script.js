function addPost() {
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (title === "" || content === "") {
    alert("Please fill in both title and content!");
    return;
  }

  const postDiv = document.createElement('div');
  postDiv.classList.add('post');

  const postTitle = document.createElement('h3');
  postTitle.innerText = title;

  const postContent = document.createElement('p');
  postContent.innerText = content;

  postDiv.appendChild(postTitle);
  postDiv.appendChild(postContent);

  document.getElementById('posts').prepend(postDiv);

  // Clear input fields
  document.getElementById('title').value = "";
  document.getElementById('content').value = "";
}