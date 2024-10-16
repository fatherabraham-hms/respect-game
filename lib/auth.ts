const NextAuth = await import('next-auth');
const GitHub = await import('next-auth/providers/github');

export const { handlers, signIn, signOut, auth } = NextAuth.default({
  providers: [GitHub.default]
});
