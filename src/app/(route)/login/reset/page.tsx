"use client";

import Button from "@/app/_components/Button";
import Dialog from "@/app/_components/Dialog";
import Input from "@/app/_components/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Reset() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col h-full items-center justify-center">
        <div className="text-center pb-[50px]">
          <p className="font-bold text-[32px]">비밀번호 찾기</p>
          <p className="text-xl text-gray_999999">
            새로운 비밀번호를 입력해주세요
          </p>
        </div>
        <div className="flex-col flex gap-y-[30px]">
          <div className="flex flex-col">
            <p className="text-sm pb-[8px]">비밀번호 재설정</p>
            <Input
              className="mb-[8px]"
              placeholder="비밀번호 입력 (영문+숫자 10자 이상)"
            />
            <Input placeholder="비밀번호 재입력" />
          </div>
          <Button
            className="w-[450px]"
            onClick={() => {
              setIsOpen(true);
            }}>
            변경하기
          </Button>
        </div>
      </div>
      <Dialog
        title="비밀번호 재설정 완료"
        description={`비밀번호 재설정이 완료되었습니다.\n새로운 비밀번호로 로그인 해주세요!`}
        show={isOpen}
        footer={
          <>
            <Button variant="primary_outlined" onClick={() => setIsOpen(false)}>
              닫기
            </Button>
            <Button onClick={() => router.push("/login")}>
              로그인 페이지로 이동
            </Button>
          </>
        }
      />
    </>
  );
}
