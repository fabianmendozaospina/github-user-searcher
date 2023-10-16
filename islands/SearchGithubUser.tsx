import { useState } from "preact/hooks";

export default function SearchGithubUser() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");

  async function onSubmit(e: any) {
    e.preventDefault();
    const res = await fetch("/api/github", {
      method: "POST",
      body: JSON.stringify({
        username,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data);
    }
  }

  function handleInput(e: any) {
    setUsername(e.target.value);
  }

  return (
    <>
      <section>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            class="border rounded shadow-md px-4 py-2 w-72"
            name="username"
            value={username}
            onChange={handleInput}
            placeholder="Search Github user by username"
          />
          <button
            class="border rounded shadow-md px-4 py-2 bg-green-700 text-white ml-4"
            type="submit"
          >
            Search
          </button>
        </form>
      </section>
      {user?.name &&
        (
          <section class="mt-10">
            <a href={user.html_url} target="_blank"></a>
            <p class="text-2xl text-center">Username: {user.login}</p>
            <img
              class="border rounded shadow-md w-34 h-34"
              src={user.avatar_url}
              alt={user.login}
            />
          </section>
        )}
    </>
  );
}
