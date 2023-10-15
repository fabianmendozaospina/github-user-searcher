import { h } from "preact";

export default function Layouts({ children }: any) {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/users/github">Search Github User</a>
      </nav>
      {children}
    </div>
  );
}
