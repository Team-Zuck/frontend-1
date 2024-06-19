"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Input } from "@/components/ui/input";
import { footerImg, google as Google, logo, orgImg, regImg } from "@/public";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { app } from "@/firebaseConfig";

const SignUp4 = () => {
  const auth = getAuth(app);

  const [user, loading, error] = useAuthState(auth);

  const navigate = useRouter();

  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSignUpWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      toast.success("Successfully signed in");
      navigate.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Error signing up, try again later!!");
    }
  };

  const handleSubmitFiles = () => {
    // Handle file submission logic
    toast.success("Files submitted successfully!");
  };

  return (
    <div className="flex w-full h-screen">
      <div className="flex-1 flex flex-col h-full pt-[43px]">
        <div className="absolute left-[60px]">
          <Image src={logo} alt="logo" width={200} height={48} />
        </div>
        <div className="flex flex-col justify-center items-center w-[80%] h-full mx-auto">
          <h1 className="text-primary font-semibold text-[28px] leading-6 h-[47px] mb-4">
            Organization logo
          </h1>

          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-md p-4 w-full text-center cursor-pointer ${isDragActive ? "border-blue-500" : "border-gray-300"
              }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
            )}
          </div>

          {files.length > 0 && (
            <div className="mt-4 w-full">
              <h2 className="text-lg font-medium">Selected Files:</h2>
              <ul className="list-disc pl-5">
                {files.map((file: any, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
          <Link href="/organization/hr">
            <Button
              onClick={handleSubmitFiles}
              className="mt-4 bg-[#363636] text-white w-full"
            >
              Next
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative flex-1 hidden xl:flex">
        <Image src={orgImg} layout="fill" objectFit="cover" alt="image" />
      </div>
    </div>
  );
};

export default SignUp4;
