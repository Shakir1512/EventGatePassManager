import { connectToDB } from "@/lib/mongodb";
import Admin from "@/models/admin";
import axios from "axios";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { name, email, picture } = profile;
      if (account.provider === "google") {
        try {
          await connectToDB();
          //if user already exists
          const userExists = await Admin.findOne({ email });
          //create new user
          if (!userExists) {
            const res = await axios.post(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin`,
              {
                name,
                email,
                picture,
              }
            );
            if (res.status === 201) {
              return true;
            }
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
