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
        message: Strings.SIGN_UP_ERROR_EMAIL_ALREADY_EXISTS, // todo: 에러 처리
      });
    }
  };

  const validateEmail = (value: string): boolean | string => {
    const REGEX_EMAIL = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

    if (!REGEX_EMAIL.test(value)) {
      return Strings.SIGN_UP_ERROR_INVALID_EMAIL;
    }
    return true;
  };

  const validatePassword = (value: string): boolean | string => {
    const REGEX_ENG_NUM_10 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;
    const REGEX_ENG_NUM_SPECIAL_8 =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!REGEX_ENG_NUM_10.test(value) && !REGEX_ENG_NUM_SPECIAL_8.test(value)) {
      return Strings.SIGN_UP_ERROR_INVALID_PASSWORD_CONDITION;
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
      <div className={"mb-[30px] font-semibold text-[33px] text-black"}>
        {Strings.SIGN_UP_TITLE}
      </div>

      <div className={"mb-[30px] text-[18px] text-slate-400"}>
        {Strings.SIGN_UP_DESC}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"flex flex-col w-[442px]"}
      >
        {/* email */}
        <div className={"flex flex-col mb-[20px] space-y-[8px]"}>
          <InputLabel id={INPUT_IDs.email} label={Strings.SIGN_UP_EMAIL} />
          <Input
            id={INPUT_IDs.email}
            placeholder={Strings.SIGN_UP_EMAIL_PLACEHOLDER}
            {...register(INPUT_IDs.email, {
              required: Strings.SIGN_UP_ERROR_EMAIL_REQUIRED,
              validate: validateEmail,
            })}
          />
          {errors.email && (
            <div className={"font-medium text-[14px] text-red_EF4444"}>
              {errors.email.message}
            </div>
          )}
          {/* 이메일 인증하기 버튼 */}
          <Button
            className={"w-full h-[40px] font-medium text-[14px]"}
            variant={"primary_outlined"}
            onClick={onClickSendEmailValidation}
          >
            {showEmailValidation
              ? Strings.SIGN_UP_RESEND_EMAIL_VALIDATION_CODE
              : Strings.SIGN_UP_SEND_EMAIL_VALIDATION_CODE}
          </Button>

          {/* 이메일 인증 번호 */}
          {showEmailValidation && (
            <>
              <InputLabel
                id={INPUT_IDs.emailValidation}
                label={Strings.SIGN_UP_EMAIL_VALIDATION_CODE}
              />
              <Input
                id={INPUT_IDs.emailValidation}
                placeholder={Strings.SIGN_UP_EMAIL_VALIDATION_CODE}
                {...register(INPUT_IDs.emailValidation, {
                  required:
                    Strings.SIGN_UP_ERROR_ENTER_VALIDATION_CODE_IN_EMAIL,
                  validate: (value) => {
                    // todo: 이메일 인증 번호 체크
                    return true;
                  },
                })}
              />
              {errors.emailValidation && (
                <div className={"font-medium text-[14px] text-red_EF4444"}>
                  {errors.emailValidation.message}
                </div>
              )}
            </>
          )}
        </div>

        {/* 비밀번호 */}
        <div className={"flex flex-col mb-[15px] space-y-[8px]"}>
          <InputLabel
            id={INPUT_IDs.password}
            label={Strings.SIGN_UP_PASSWORD}
          />
          <div className={"text-[14px] text-slate-500"}>
            {Strings.SIGN_UP_PASSWORD_CONDITION}
          </div>
          <Input
            id={INPUT_IDs.password}
            type={"password"}
            placeholder={Strings.SIGN_UP_PASSWORD_PLACEHOLDER}
            {...register(INPUT_IDs.password, {
              required: Strings.SIGN_UP_ERROR_PASSWORD_REQUIRED,
              validate: validatePassword,
            })}
          />
          {errors.password && (
            <div className={"font-medium text-[14px] text-red_EF4444"}>
              {errors.password.message}
            </div>
          )}

          <Input
            type={"password"}
            placeholder={Strings.SIGN_UP_PASSWORD_CONFIRM_PLACEHOLDER}
            {...register(INPUT_IDs.passwordConfirm, {
              required: Strings.SIGN_UP_ERROR_REENTER_PASSWORD,
              validate: (value) => {
                if (value != getValues(INPUT_IDs.password)) {
                  return Strings.SIGN_UP_ERROR_ENTER_SAME_PASSWORD;
                }
                return true;
              },
            })}
          />
          {errors.passwordConfirm && (
            <div className={"font-medium text-[14px] text-red_EF4444"}>
              {errors.passwordConfirm.message}
            </div>
          )}
        </div>

        {/* 다음 버튼 */}
        <Button className={"w-full h-[40px] font-medium text-[14px]"}>
          {Strings.NEXT}
        </Button>
      </form>
    </div>
  );
}
