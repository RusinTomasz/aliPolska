import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello !</h1>
        <Link href="/aktualnosci">Aktualnosci</Link>
      </main>
    </>
  );
}
