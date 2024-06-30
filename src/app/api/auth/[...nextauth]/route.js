import NextAuth from "next-auth/next";
// [..nextauth] এটাকে বলে catch all route segments/ daynamic route gulo aikhane ashbe
const handler = NextAuth({
  //session টা হলো কোন method এ authenticate করবে সেটার session
  session: {
    strategy: "jwt", // jwt default use করে, database ও ব্যবহার করা যায়।
  },
  providers: [
    //provider declare & settings
  ],
  /* pages: {
    //login, signup page gulor directory aikhane set kora jete pare
  }, */
});

export { handler as GET, handler as POST };
