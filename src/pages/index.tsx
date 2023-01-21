import Layout from "../components/Layout";
import app from "../utils/firebase";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import Modal from "../components/Modal";
import Header from "../components/Header";
import AddLink from "../components/AddLink";
import { useState } from "react";

const auth = getAuth(app);
const db = getFirestore(app);

export default function Home() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  // Links state
  const [links, setLinks] = useState([]);

  // Logout
  const logout = () => {
    auth.signOut();
    router.push("/login");
  };

  // Loading
  if (loading) {
    return <Modal success={true} title="Loading" text="Please wait..." />;
  }

  // Error
  if (error) {
    return <Modal success={false} title="Error" text={error.message} />;
  }

  // If user is not logged in
  if (!user) {
    router.push("/login");
  }

  // If user is logged in
  return (
    <Layout title="dotLinks">
      <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-tertiary">
        <Header user={user} logout={logout} />
        <AddLink user={user} />
      </div>
    </Layout>
  );
}
