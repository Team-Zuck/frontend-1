"use client";
import { Button } from "@/components/ui/button";
import { footerImg, logo, regImg } from "@/public";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'sonner'

const Register = () => {

  const router = useRouter();
  const handleSignUp = async () => {
    try {

      router.push("/sign-up");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex w-full h-screen">
      <div className="flex-1 flex flex-col h-full pt-[68px]">
        <div className="absolute left-[100px]">
          <Image src={logo} alt="logo" width={213} height={48} />
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-primary font-semibold text-[48px] leading-6">
              Register / Login
            </h1>
            <span className="font-medium text-4xl leading-[24px] text-primary">
              as
            </span>
          </div>
          <div className="w-[80%] flex flex-col mt-[60px] gap-y-[40px] z-10">
            <Button
              size="lg"
              className="bg-[#363636] rounded-none hover:bg-[#363636] hover:text-white cursor-pointer"
              onClick={handleSignUp}
            >
              Organization
            </Button>
            <Button
              size="lg"
              className="rounded-none cursor-pointer"
              onClick={handleSignUp}
            >
              Employee
            </Button>
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden xl:flex">
        <Image src={regImg} layout="fill" objectFit="cover" alt="image" />
      </div>
    </div>
  );
};

export default Register;
