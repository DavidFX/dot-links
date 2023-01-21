import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";
import app from "../utils/firebase";
import { getAuth } from "firebase/auth";
import {
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Modal from "../components/Modal";

const auth = getAuth(app);

export default function Login() {
  // Init router
  const router = useRouter();

  // User state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Auth state
  const [auser] = useAuthState(auth);

  // Sign in state
  const [SignIn, user, loading, error] = useSignInWithEmailAndPassword(auth);

  // Handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SignIn(email, password);
  };

  if (error) {
    return (
      <Modal success={false} title="Error" text={error.message} close={true} />
    );
  }

  if (loading) {
    return <Modal success={true} title="Loading" text="Please wait..." />;
  }

  if (user || auser) {
    router.push("/");
  }

  return (
    <Layout title="Login">
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-tertiary">
        <form onSubmit={handleSubmit} className="form-data text-center ">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="exemple@mail.com"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
          />
          <button type="submit" className="btn-primary w-full">
            Login
          </button>
          <p className="max-w-sm text-sm">
            If you don't have an account, you can{" "}
            <Link href="/register" className="link">
              sign up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}
