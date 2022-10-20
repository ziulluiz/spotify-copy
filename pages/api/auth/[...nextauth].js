import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import { LOGIN_URL } from "../../../lib/spotify";
import { spotifyApi } from "../../../lib/spotify";

async function refreshAccessToken(token) {
  try {

    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    return{
      ...token,
      accessToken: refreshedToken.access_token,
      accesTokenExpires: Date.now + refreshedToken.expires_in * 1000, //=1 hour as 3600 returns from spotify API
      refreshToken: refreshedToken.refreshToken ?? token.refreshToken,
      //refresh if new one came back else fall back to old refresh token
    }

  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }

}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({token, acount, user}){
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refreshToken,
          username: account.providerAccountId,
          accesTokenExpires: account.expires_at * 1000, //handli expiry times in milliseconds hence *1000
        }
      }
      //return previous token if the access token has not expired yet
      if (Date.now() < token.accesTokenExpires){
        return token;
      }

      //access token has expired, so we need to refresh
      return await refreshAccessToken(token)
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    }
  }
}

export default NextAuth(authOptions)
