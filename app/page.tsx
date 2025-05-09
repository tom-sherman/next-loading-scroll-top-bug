"use client";
import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <div style={{ width: 100, height: 2000, background: "lightgray" }} />
      <Link href="/a">Link</Link>
    </div>
  );
}
