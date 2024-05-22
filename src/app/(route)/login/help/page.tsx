"use client";
import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Help() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- 나중에 사용
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-y-[50px]">
      <p className="font-bold text-[32px]">비밀번호 찾기</p>
      <div className="flex-col flex gap-y-[30px]">
        <div>
          <p className="text-sm pb-[8px]">이메일</p>
          <Input placeholder="Email@example.com" onChange={handleChangeValue} />
        </div>
        <Button
          className="w-[450px]"
          onClick={() => {
            router.push(`/login/reset`);
          }}>
          인증하기
        </Button>
      </div>
    </div>
  );
}
