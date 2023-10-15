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
            name="username"
            value={username}
            onChange={handleInput}
            placeholder="Search Github user by username"
          />
          <button type="submit">Search</button>
        </form>
      </section>
      {user?.name &&
        (
          <section>
            <a href={user.html_url} target="_blank"></a>
            <p>{user.login}</p>
            <img src={user.avatar_url} alt={user.login} />
          </section>
        )}
    </>
  );
}
