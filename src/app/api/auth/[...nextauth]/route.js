import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// [..nextauth] এটাকে বলে catch all route segments/ daynamic route gulo aikhane ashbe
// authOption export korar karon holo server side theke auth option gulo access korar jonno
export const authOptions = {
  //session টা হলো কোন method এ authenticate করবে সেটার session
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt", // jwt default use করে, database ও ব্যবহার করা যায়।
    maxAge: 5,
  },
  providers: [
    //provider declare & settings
    CredentialsProvider({
      // sign in with email and password
      //এই credentials gulo automatic akta page create korbe
      credentials: {
        email: {
          label: "Email",
          type: "email",
          require: true,
          placeholder: "enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          require: true,
          placeholder: "enter your password",
        },
      },
      // authorize function e credentials gulo ashe, akhan thek authentication & authorization niye kaj kora jabe.
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
};

const handler = NextAuth(authOptions); //auth option nextAuth er moddhe pathano holo

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
