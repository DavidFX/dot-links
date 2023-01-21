import Head from "next/head";

export default function Layout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="App to store all your links" />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className=" bg-light text-dark">{children}</main>
    </>
  );
}
