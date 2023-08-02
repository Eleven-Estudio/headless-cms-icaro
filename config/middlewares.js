module.exports = ({ env }) => [
  "strapi::errors",
  // 'strapi::security',
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, ""),
          ],
          // Add for youtubue, facebook, twitter, vimeo, miro, twitch
          "frame-src": [
            "'self'",
            "https://www.youtube.com",
            "https://www.youtube-nocookie.com",
            "https://www.facebook.com",
            "https://platform.twitter.com",
            "https://syndication.twitter.com",
            "https://www.instagram.com",
            "https://player.vimeo.com",
            "https://miro.com",
            "https://www.twitch.tv",
            "https://player.twitch.tv",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, ""),
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
