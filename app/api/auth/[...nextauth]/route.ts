import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [GitHub]
})
export { handler as GET, handler as POST };
