import SpotifyWebApi from "spotify-web-api-node";

const scopes = [

  "user-read-eamail",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-currently-played",
  "user-follow-read",
].join(',');

const params = {
  scope: scopes,
};

const querryParamString = new URLSearchParams(params);

const LOGIN_URL = `http://accounts.spotify.com/authorize?${querryParamString.toString()}`;

const SpotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default SpotifyApi;
export {LOGIN_URL};
