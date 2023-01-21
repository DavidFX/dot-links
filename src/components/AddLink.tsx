import { collection, getFirestore, doc, setDoc } from "firebase/firestore";
import { FormEvent, useState } from "react";
import app from "../utils/firebase";
import Modal from "./Modal";

const db = getFirestore(app);

export default function AddLink({ user }: { user: any }) {
  const linksRef = collection(db, user.uid);

  // Add a new document with a generated id.
  const addLink = async (name: string, url: string, e: FormEvent) => {
    e.preventDefault();

    // Check if name or url is empty
    if (!name || !url) {
      <Modal success={false} title="Error" text="Please fill in all fields" />;
    } else {
      await setDoc(doc(linksRef, name), {
        name,
        url,
      });
      setName("");
      setUrl("");
    }
  };

  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => addLink(name, url, e)}
      className="form-data text-center "
    >
      <h1 className="text-3xl font-bold">Add a item</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        placeholder="Link"
      />
      <button type="submit" className="btn-primary w-full">
        Add
      </button>
    </form>
  );
}
