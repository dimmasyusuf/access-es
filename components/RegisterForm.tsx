'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { registerFormSchema } from '@/lib/validator';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from './ui/separator';

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import {
  RiAppleFill,
  RiEyeCloseLine,
  RiEyeLine,
  RiFacebookFill,
} from 'react-icons/ri';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    console.log(values);
  }

  return (
    <section className="flex flex-col w-full sm:max-w-[400px] px-8 py-10 gap-8">
      <Link
        href="/"
        className="flex w-full justify-start"
      >
        <Image
          src="/logo_shape.svg"
          alt="Access English School Logo"
          width={48}
          height={48}
          className="rounded-md"
        />
      </Link>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold">Daftar</h1>
        <p className="text-muted-foreground">untuk melanjutkan ke ACCESS-ES</p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-3 gap-2">
          <Button
            variant="outline"
            size="lg"
            className="h-12"
          >
            <RiAppleFill className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12"
            onClick={() => signIn('facebook', { callbackUrl: '/' })}
          >
            <RiFacebookFill className="w-6 h-6 text-[#316FF6]" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12"
            onClick={() => signIn('google', { callbackUrl: '/' })}
          >
            <FcGoogle className="w-6 h-6" />
          </Button>
        </div>

        <Separator className="relative flex items-center justify-center">
          <span className="absolute px-4 bg-background text-muted-foreground text-sm">
            or
          </span>
        </Separator>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-900">Nama</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="shadow-none"
                      {...field}
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
                  <FormLabel className="text-slate-900">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="shadow-none"
                      {...field}
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
                  <FormLabel className="text-slate-900">Password</FormLabel>
                  <div className="relative flex w-full items-center">
                    <FormControl>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        className="shadow-none"
                        {...field}
                      />
                    </FormControl>
                    {showPassword ? (
                      <div className="absolute flex items-center justify-center right-0.5 py-1 pr-4 pl-2 bg-background rounded-e-md">
                        <span
                          className="flex items-center justify-center w-6 h-6 hover:bg-accent rounded-md"
                          onClick={() => setShowPassword(false)}
                        >
                          <RiEyeCloseLine className="text-muted-foreground hover:text-primary w-4 h-4" />
                        </span>
                      </div>
                    ) : (
                      <div className="absolute flex items-center justify-center right-0.5 py-1 pr-4 pl-2 bg-background rounded-e-md">
                        <span
                          className="flex items-center justify-center w-6 h-6 hover:bg-accent rounded-md"
                          onClick={() => setShowPassword(true)}
                        >
                          <RiEyeLine className="text-muted-foreground hover:text-primary w-4 h-4" />
                        </span>
                      </div>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full text-xs"
            >
              DAFTAR
            </Button>
          </form>
        </Form>
      </div>

      <div className="flex gap-1 items-center">
        <p className="text-sm text-muted-foreground">Sudah memiliki akun?</p>
        <Link
          href="/login"
          className="text-sm text-primary hover:underline"
        >
          Masuk
        </Link>
      </div>
    </section>
  );
}
