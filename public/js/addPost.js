const createNewPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const body = document.querySelector("#postBody").value.trim();
  
  if (title && body) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.statusText,title,body, "AddNewpost");
    if (response.ok) {
      // document.location.replace('/profile');
      document.location.reload("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".addPost")
  .addEventListener("submit", createNewPostHandler);
