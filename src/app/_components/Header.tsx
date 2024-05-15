"use client";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";

const NAV_ITEM = [
  { name: "실종동물", url: "/lost" },
  { name: "유기동물", url: "/abandon" },
  { name: "커뮤니티", url: "/community" },
];

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex h-[64px] items-center justify-between">
      <Link href="/">
        <p className="text-2xl font-bold">이리온</p>
      </Link>
      <nav>
        <ul className="flex gap-x-[100px] text-gray-800 min-w-[400px]">
          {NAV_ITEM.map((menu, index) => (
            <li key={index}>
              <Link href={menu.url}>
                <Button variant="ghost">{menu.name}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-x-[12px]">
        <Button // TODO: 페이지 생기면 연동
          onClick={() => router.push("/")}
          variant="primary_outlined"
          className="text-sm">
          회원가입
        </Button>
        <Button className="text-sm" onClick={() => router.push("/")}>
          로그인
        </Button>
      </div>
    </header>
  );
}
