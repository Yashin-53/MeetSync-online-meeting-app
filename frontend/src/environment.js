const IS_PROD = process.env.NODE_ENV === "production";

const server = IS_PROD
  ? "https://meetsync-online-meeting-app.onrender.com"
  : "http://localhost:8000";

export default server;