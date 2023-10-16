import { h } from "preact";

export default function Layouts({ children }: any) {
  return (
    <div>
      <nav class="w-full px-4 py-3 bg-green-800 text-white mb-10">
        <a class="mx-4" href="/">Home</a>
        <a class="mx-4" href="/about">About</a>
        <a class="mx-4" href="/users/github">Search Github User</a>
      </nav>
      {children}
    </div>
  );
}
