import type { NextAuthConfig } from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import google from 'next-auth/providers/google';

export default {
  providers: [google, credentials],
} satisfies NextAuthConfig;
