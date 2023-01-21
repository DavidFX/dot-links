import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { collection, getFirestore } from "firebase/firestore";
import app from "../../../utils/firebase";
import { getDocs } from "firebase/firestore";
import Link from "next/link";

const db = getFirestore(app);

export default function Links(props: any) {
  // Init router

  const data = props.data;

  const router = useRouter();

  return (
    <Layout title="dotLinks">
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-tertiary">
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <h2>
            <Link href="/" className="text-xl font-bold xs:text-2xl">
              dotLink
            </Link>
          </h2>
          {data.map((entry: any) => {
            return (
              <a href={entry.url} key={entry.name} className="link-show ">
                {entry.name}
              </a>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const data: any = [];
  const linksRef = collection(db, context.query.id);
  const linksSnapshot = await getDocs(linksRef);
  linksSnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return {
    props: {
      data: data,
    },
  };
}
