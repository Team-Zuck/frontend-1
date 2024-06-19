"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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

import { log } from "console";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { app } from "@/firebaseConfig";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Enter a valid email.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Confirm Password must be at least 8 characters.",
  }),
});

const SignUp3 = () => {
  const auth = getAuth(app);

  const [user, loading, error] = useAuthState(auth);

  const navigate = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast.success("Event has been created");
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Successfully signed in");
        navigate.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });

    console.log(values);
  }

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

  return (
    <div className="flex w-full h-screen">
      <div className="flex-1 flex flex-col h-full pt-[43px]">
        <div className="absolute left-[60px]">
          <Image src={logo} alt="logo" width={200} height={48} />
        </div>
        <div className="flex flex-col justify-center items-center w-[80%] h-full mx-auto">
          <h1 className="text-primary font-semibold text-[28px] leading-6 h-[47px] mb-4">
            Set up
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Language</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="English"
                          {...field}
                          className="border border-[#5C5C5C]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time zone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Est"
                          {...field}
                          className="border border-[#5C5C5C]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Link href="/organization/sign-up/4">
                <Button type="submit" className="w-full bg-[#363636] mt-4">
                  Next
                </Button>
              </Link>
            </form>
          </Form>
        </div>
      </div>
      <div className="relative flex-1 hidden xl:flex">
        <Image src={orgImg} layout="fill" objectFit="cover" alt="image" />
      </div>
    </div>
  );
};

export default SignUp3;
