import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <main>
        <h1>Wishlist For Friends</h1>
        <ul>
          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <Link href="/how-it-works">How it works</Link>
          </li>
          <li>
            <Link href="/log-in">Log in</Link>
          </li>
          <li>
            <Link href="/sign-in">Sign in</Link>
          </li>
        </ul>
      </main>
      <footer></footer>
    </div>
  );
}
