import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// [..nextauth] এটাকে বলে catch all route segments/ daynamic route gulo aikhane ashbe
// authOption export korar karon holo server side theke auth option gulo access korar jonno
export const authOptions = {
  //session টা হলো কোন method এ authenticate করবে সেটার session
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt", // jwt default use করে, database ও ব্যবহার করা যায়।
    maxAge: 30 * 24 * 60 * 60,
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
        // console.log(credentials);
        const { email, password } = credentials; //credentials er moddhe email & password & token thake
        if (!credentials) {
          return null;
        }

        if (email) {
          const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) {
              // console.log(currentUser);
              //currentUser theke useSession hook er moddhe default vabe 3 jinish thake name, email & Image jay.
              //chaile aikhane theke callback function er maddhome manipulate kore aro kisu pathano jay currentUser er moddhe.
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
  callbacks: {
    //currentUser return kora hoyse oita aikhane pay, user hisabe, aikhane user ke manipulate kora jay
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type; // token er moddhe user type ta set kore deoa hoyse
      }
      return token;
    },
    async session({ session, user, token }) {
      session.user.type = token.type; // token er moddhe je type set koreci seta abr session user er moddhe set kore disi.
      return session;
    },
  },
};

const handler = NextAuth(authOptions); //auth option nextAuth er moddhe pathano holo

const users = [
  {
    id: 1,
    name: "Shahin",
    email: "s@gmail.com",
    type: "admin",
    password: "password",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 2,
    name: "jui",
    email: "j@gmail.com",
    type: "moderator",
    password: "password",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 3,
    name: "Mim",
    email: "m@gmail.com",
    type: "member",
    password: "password",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
];

export { handler as GET, handler as POST };
