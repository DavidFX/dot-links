import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(app);
const db = getFirestore(app);

export default function Link() {
  const linksRef = collection(db, "links");

  const [user] = useAuthState(auth);

  return <div className=""></div>;
}
