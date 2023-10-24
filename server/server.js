require("dotenv").config();
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    API_NAME: process.env.API_NAME,
    PUBLISHER_NAME: process.env.PUBLISHER_NAME,
  });
});

let proxyConfig = {};

switch (process.env.API_NAME) {
  case "TEST_API":
    proxyConfig = {
      target: "https://api.taboola.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api/taboola-templates/recommendations.get":
          "/1.0/json/taboola-templates/recommendations.get",
      },
    };
    break;
}

app.use("/api", createProxyMiddleware(proxyConfig));

app.use(express.static(path.join(__dirname)));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
