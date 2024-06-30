import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// [..nextauth] এটাকে বলে catch all route segments/ daynamic route gulo aikhane ashbe
const handler = NextAuth({
  //session টা হলো কোন method এ authenticate করবে সেটার session
  session: {
    strategy: "jwt", // jwt default use করে, database ও ব্যবহার করা যায়।
    maxAge: 5,
  },
  providers: [
    //provider declare & settings
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "enter your password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials; //credentials er moddhe email & password & token thake
        if (!credentials) {
          return null;
        }

        if (email) {
          const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null;
      },
    }),
  ],
  /* pages: {
    //login, signup page gulor directory aikhane set kora jete pare
  }, */
});

const users = [
  {
    email: "s@gmail.com",
    password: "password",
  },
  {
    email: "j@gmail.com",
    password: "password",
  },
  {
    email: "m@gmail.com",
    password: "password",
  },
];

export { handler as GET, handler as POST };
