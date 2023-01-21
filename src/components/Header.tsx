import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ user, logout }: { user: any; logout: any }) {
  const links = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "links",
      href: `/links/${user.uid}`,
    },
  ];

  // Init router
  const router = useRouter();
  // Get current path
  const current = router.pathname;

  return (
    <header className="absolute left-0 right-0 top-0 mx-auto flex max-w-5xl items-center justify-between py-4 px-2 font-sora xs:px-8">
      <Link href="/" className="text-xl font-bold xs:text-2xl">
        dotLinks
      </Link>
      <nav className="flex items-center gap-4">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={current === link.href ? "nav-link-active" : "nav-link"}
          >
            {link.name}
          </Link>
        ))}
        <button className="btn-secondary" onClick={logout}>
          Log Out
        </button>
      </nav>
    </header>
  );
}
