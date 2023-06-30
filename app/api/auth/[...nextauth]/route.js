import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDB } from "@utils/database";

connectToDB();

// Have to configure NextAuth options with provider and callbacks
// All next auth requests ie signIn, callback, signOut will make request to this route
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // Nextauth allows callback functions in an object
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });

      session.user.id = sessionUser._id.toString();

      // always update session based off user
      return session;
    },
    async signIn({ profile }) {
      // check if user already exists
      const userExists = await User.findOne({
        email: profile.email,
      });
      // if no user, create user
      if (!userExists) {
        await User.create({
          email: profile.email.toLowerCase(),
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture,
        });
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
