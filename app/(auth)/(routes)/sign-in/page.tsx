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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { footerImg, google, logo, regImg } from "@/public";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { app } from "@/app/firebase/firebaseConfig";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Enter a valid email.",
  }),
  password: z.string().min(8, {
    message: "Name must be at least 2 characters.",
  }),
});
const SignIn = () => {

  const navigate = useRouter();
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);



  useEffect(() => {
    navigate.push('/application')
  }, [user])
  // 1. Define your form.

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast.success('Event has been created')
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(' successfully signed in')
        navigate.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage)
      });

    console.log(values);
  }

  const handleSignUpWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      toast.success('successfully signed in')
      navigate.push("/");

    } catch (error) {
      console.log(error);

    }

  }
  return (
    <div className="flex w-full h-screen">
      <div className="flex-1 flex flex-col h-full pt-[43px]">
        <div className="absolute left-[60px]">
          <Image src={logo} alt="logo" width={200} height={48} />
        </div>
        <div className="flex flex-col justify-center items-center w-[80%] h-full mx-auto">
          <h1 className="text-primary font-semibold text-[48px] leading-6 h-[47px] mb-4">
            Login
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        className="border border-[#5C5C5C]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
          <p className="text-right text-red-600 w-full cursor-pointer mt-3">
            Forgot Password?
          </p>

          <div className="w-full mt-[35px] 2xl:mt-[70px]">
            <div className="h-[2px] w-full bg-[#5C5C5C] relative">
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex items-center justify-center px-4 font-medium ">
                or
              </span>
            </div>
            <Button onClick={() => handleSignUpWithGoogle()} className="bg-transparent text-black border w-full mt-6 border-[#5C5C5C] text-base hover:bg-transparent ">
              <Image src={google} width={25} height={25} alt="google" />
              Signin with Google
            </Button>
            {/* <div className="text-right mt-2">
              <p className="font-medium text-base 2xl:text-2xl">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-[#244469]">
                  Signup
                </Link>
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden xl:flex">
        <Image src={regImg} layout="fill" objectFit="cover" alt="image" />
      </div>
    </div>
  );
};

export default SignIn;
