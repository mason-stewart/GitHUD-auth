var config = {
  "oauth_client_id": process.env.GITHUB_APPLICATION_CLIENT_ID,
  "oauth_client_secret": process.env.GITHUB_APPLICATION_CLIENT_SECRET,
  "oauth_host": "github.com",
  "oauth_port": 443,
  "oauth_path": "/login/oauth/access_token",
  "oauth_method": "POST"
}

module.exports = config;