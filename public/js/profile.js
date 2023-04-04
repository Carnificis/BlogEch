const addPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const body = document.querySelector("#body").value.trim();

  if (title && body) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert("Failed to create post");
    }
  }
};

console.log("profile")

document.querySelector(".add-post").addEventListener("click", addPostHandler);
