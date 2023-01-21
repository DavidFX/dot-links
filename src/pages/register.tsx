import { useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import app from "../utils/firebase";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import Modal from "../components/Modal";

const auth = getAuth(app);

export default function Register() {
  // Init router
  const router = useRouter();

  // User state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Auth state
  const [auser] = useAuthState(auth);

  // Create user state
  const [CreateUser, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // Handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    CreateUser(email, password);
  };

  // If error
  if (error) {
    return (
      <Modal success={false} title="Error" text={error.message} close={true} />
    );
  }

  // If loading
  if (loading) {
    return <Modal success={true} title="Loading" text="Please wait..." />;
  }

  // If user created
  if (user || auser) {
    router.push("/");
  }

  return (
    <Layout title="Register">
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-tertiary">
        <form className="form-data text-center" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="exemple@mail.com"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="********"
          />
          <button type="submit" className="btn-primary w-full">
            Register
          </button>
          <p>
            If you already have an account, you can{" "}
            <Link href="/login" className="link">
              sign in
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}
