import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../../components/layouts.tsx";
import SearchGithubUser from "../../islands/SearchGithubUser.tsx";

//WAY 1: Handler in this file.
export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("GET working");
    const url = new URL(req.url);
    const username = url.searchParams.get("username");
    const res = await fetch(`http://api.github.com/users/${username}`);

    if (res.status === 404) {
      return ctx.render(null);
    }

    const user = await res.json();
    return await ctx.render(user);
  },
};

//WAY 2: Handler in the file api/github.ts.

export default function Github({ data }: PageProps) {
  return (
    <Layout>
      <SearchGithubUser />
    </Layout>
  );
}
