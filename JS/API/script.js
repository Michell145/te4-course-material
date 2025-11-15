const fetchData = async () => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log(response.ok);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("😂 joke:", data.setup);
    console.log("🤣 punchline:", data.punchline);
  } catch (error) {
    console.log("error", error);
  }
};
fetchData();

const greetLater = (name, delay) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(`Hello, ${name}!`);
    }, delay);
  });
};

greetLater("async world!", 3000).then((message) => {
  console.log(message);
});

const fetchUserData = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("User Data:", data);
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
};

fetchUserData(1);

async function fetch3() {
  let retries = 3;
  while (retries > 0) {
    try {
      const [userRes, postRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1"),
        fetch("https://jsonplaceholder.typicode.com/posts/1"),
      ]);
      if (!userRes.ok || !postRes.ok) {
        throw new Error("Network response was not ok");
      }
      const [users, posts] = await Promise.all([
        userRes.json(),
        postRes.json(),
      ]);
      console.log("Fetched data:", users, posts);
      return { users, posts };
    } catch (error) {
      retries--;
      if (retries === 0) {
        console.log("Failed to fetch data after 3 attempts:", error);
        return null;
      }
      console.log("retrying...");
      await new Promise((r) => setTimeout(r, (4 - retries) * 1000));
    }
  }
}

fetch3();
