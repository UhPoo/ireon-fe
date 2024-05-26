"use client";

import Button from "@/app/_components/Button";
import { INPUT_IDs, Input, InputLabel } from "@/app/_components/Input";
import { Strings } from "@/app/_resource/constants";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type FormFields = {
  email: string;
  emailValidation: string;
  password: string;
  passwordConfirm: string;
};

export default function SignUpPage() {
  const [showEmailValidation, setShowEmailValidation] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    getValues,
  } = useForm<FormFields>();

  const onClickSendEmailValidation = (event: React.MouseEvent<HTMLElement>) => {
    event?.preventDefault(); // onSubmit 방지

    try {
      // todo: 이메일 인증 번호 발송
      if (validateEmail(getValues(INPUT_IDs.email)) == true) {
        setShowEmailValidation(true);
      }
    } catch (error) {
      //
    }
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError(INPUT_IDs.email, {
        message: "이미 존재하는 이메일입니다.", // todo: 에러 처리
      });
    }
  };

  const validateEmail = (value: string): boolean | string => {
    const regex_email = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

    if (!regex_email.test(value)) {
      return "정확한 이메일을 입력해주세요";
    }
    return true;
  };

  const validatePassword = (value: string): boolean | string => {
    const regex_eng_num_10 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;
    const regex_eng_num_special_8 =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!regex_eng_num_10.test(value) && !regex_eng_num_special_8.test(value)) {
      return "영문+숫자 10자 이상 또는 영문+숫자+특수기호 8자 이상이어야 합니다.";
    }
    return true;
  };

  return (
    <div
      className={twMerge(
        "flex flex-col justify-center items-center",
        "p-[40px]" // todo: 위치 조정
      )}
    >
      <div
        className={twMerge("mb-[30px] font-semibold text-[33px] text-black")}
      >
        {Strings.SIGN_UP_TITLE}
      </div>

      <div className={twMerge("mb-[30px] text-[18px] text-slate-400")}>
        {Strings.SIGN_UP_DESC}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={twMerge(
          "flex flex-col w-[442px]" // todo: 442px to const
        )}
      >
        {/* email */}
        <div className={twMerge("flex flex-col mb-[20px] space-y-[8px]")}>
          <InputLabel id={INPUT_IDs.email} label={Strings.SIGN_UP_EMAIL} />
          <Input
            id={INPUT_IDs.email}
            placeholder={Strings.SIGN_UP_EMAIL_PLACEHOLDER}
            {...register(INPUT_IDs.email, {
              required: "이메일을 입력해주세요",
              validate: validateEmail,
            })}
          />
          {errors.email && (
            <div className={twMerge("font-medium text-[14px] text-red_EF4444")}>
              {errors.email.message}
            </div>
          )}
          {/* 이메일 인증하기 버튼 */}
          <Button
            className={twMerge("w-full h-[40px] font-medium text-[14px]")}
            variant={"primary_outlined"}
            onClick={onClickSendEmailValidation}
          >
            {showEmailValidation ? "인증 번호 재발송" : "인증 번호 발송"}
          </Button>

          {/* 이메일 인증 번호 */}
          {showEmailValidation && (
            <>
              <InputLabel id={INPUT_IDs.emailValidation} label={"인증번호"} />
              <Input
                id={INPUT_IDs.emailValidation}
                placeholder={"인증번호"}
                {...register(INPUT_IDs.emailValidation, {
                  required: "이메일로 발송된 인증번호를 입력해주세요.",
                  validate: (value) => {
                    // todo: 이메일 인증 번호 체크
                    return true;
                  },
                })}
              />
              {errors.emailValidation && (
                <div
                  className={twMerge("font-medium text-[14px] text-red_EF4444")}
                >
                  {errors.emailValidation.message}
                </div>
              )}
            </>
          )}
        </div>

        {/* 비밀번호 */}
        <div className={twMerge("flex flex-col mb-[15px] space-y-[8px]")}>
          <InputLabel
            id={INPUT_IDs.password}
            label={Strings.SIGN_UP_PASSWORD}
          />
          <div className={twMerge("text-[14px] text-slate-500")}>
            {Strings.SIGN_UP_PASSWORD_CONDITION}
          </div>
          <Input
            id={INPUT_IDs.password}
            type={"password"}
            placeholder={Strings.SIGN_UP_PASSWORD_PLACEHOLDER}
            {...register(INPUT_IDs.password, {
              required: "비밀번호를 입력해주세요.",
              validate: validatePassword,
            })}
          />
          {errors.password && (
            <div className={twMerge("font-medium text-[14px] text-red_EF4444")}>
              {errors.password.message}
            </div>
          )}

          <Input
            type={"password"}
            placeholder={Strings.SIGN_UP_PASSWORD_CONFIRM_PLACEHOLDER}
            {...register(INPUT_IDs.passwordConfirm, {
              required: "비밀번호를 한 번 더 입력해주세요.",
              validate: (value) => {
                if (value != getValues(INPUT_IDs.password)) {
                  return "동일한 비밀번호를 입력해주세요.";
                }
                return true;
              },
            })}
          />
          {errors.passwordConfirm && (
            <div className={twMerge("font-medium text-[14px] text-red_EF4444")}>
              {errors.passwordConfirm.message}
            </div>
          )}
        </div>

        {/* 다음 버튼 */}
        <Button className={twMerge("w-full h-[40px] font-medium text-[14px]")}>
          {Strings.NEXT}
        </Button>
      </form>
    </div>
  );
}
