import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex justify-center">
      <nav className="flex items-center p-1.5 font-medium gap-[0.375rem] bg-white/40 justify-center backdrop-blur-[.3rem] fixed z-20 top-4 rounded-lg">
        <Link href="/" className="nav-item">
          Men
        </Link>
        <Link href="/" className="nav-item">
          Women
        </Link>
        {user ? (
          <UserNav
            email={user.email as string}
            name={user.given_name as string}
            userImage={
              user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
            }
          />
        ) : (
          <div className="flex gap-[0.375rem]">
            <RegisterLink className="nav-item">Sign Up</RegisterLink>
            <LoginLink className="nav-item bg-white/80 hover:bg-black hover:text-white">
              Login
            </LoginLink>
          </div>
        )}
      </nav>
    </div>
  );
}
