export const TEST_API = "TEST_API";
export const TEST_PUBLISHER = "TEST_PUBLISHER";

export const MOCK_FETCHED_CONFIG = {
  API_NAME: TEST_API,
  PUBLISHER_NAME: TEST_PUBLISHER,
};

export const FETCH_RECOMMENDATIONS_REQUEST_CONFIG = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const MOCK_FETCHED_RECOMMENDATIONS = {
  id: "asdfsadf",
  list: [
    {
      description:
        "Les beaux jours sont arrivés ! L’occasion pour les filles de la rédaction d’arborer des vêtements plus légers. Découvrez en image les looks printaniers que l’on a croisés au bureau.",
      type: "video",
      name: "La rédac’ se met au printemps",
      created: "Tue, 08 Apr 2014 00:00:00 UTC",
      branding: "Elle",
      duration: "0",
      views: "0",
      thumbnail: [
        {
          url: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn-elle.ladmedia.fr%2Fvar%2Fplain_site%2Fstorage%2Fimages%2Fmode%2Fmode-street-style%2Fla-redac-se-met-au-printemps%2F46943973-1-fre-FR%2FLa-redac-se-met-au-printemps_reference.jpg",
        },
      ],
      categories: ["fr"],
      id: "~~V1~~-3808871886283932350~~ZZjwieuFi0udh1RZS1JXsHgEqsl8ynEPWU6g_gQg9GWKANNcaafC-0QP27WPePejIoJl3WKIIrm4Yg_30fVE1XNvVRSOQU3KG74h40zV1xE3Jpvz87tKk9szttPlHlQ17hW18gOeBKWEuq6da9CEkY8XwLbI--WZuj80gUuMjckv-g3BPZqv3IrMOsHf8vWe",
      origin: "sponsored",
      url: "https://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__0f84b36f1879b6af470e709dd169fba0__87e7ca44b731aa883dff8d7c727fb4ff&response.session=v2_669d09090bf371d5643664addc390000_3fa1ab59-8d27-4d20-a2c0-b68c562d5f8b-tuctc2fe36f_1698061807_1698061807_CNawjgYQswsY4-L74rUxIAEoATDhATiRpA5QAFgAYABo37Gr6oqqw8_rAXAB&item.id=%7E%7EV1%7E%7E-3808871886283932350%7E%7EZZjwieuFi0udh1RZS1JXsHgEqsl8ynEPWU6g_gQg9GWKANNcaafC-0QP27WPePejIoJl3WKIIrm4Yg_30fVE1XNvVRSOQU3KG74h40zV1xE3Jpvz87tKk9szttPlHlQ17hW18gOeBKWEuq6da9CEkY8XwLbI--WZuj80gUuMjckv-g3BPZqv3IrMOsHf8vWe&item.type=video&sig=2b2bc34067122a47c5d6d728452616704afa9912c67b&redir=http%3A%2F%2Fwww.elle.fr%2FMode%2FMode-street-style%2FLa-redac-se-met-au-printemps%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiBNZ8O0K6S9XBvV6F97s9aBCVlQ8el_F3UWzglHZnQw-SC5BCijn-TBosTGka4B%23tblciGiBNZ8O0K6S9XBvV6F97s9aBCVlQ8el_F3UWzglHZnQw-SC5BCijn-TBosTGka4B&ui=3fa1ab59-8d27-4d20-a2c0-b68c562d5f8b-tuctc2fe36f&cpb=GIkFIJz__________wEqGXVzLnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzEwNjQ2OIDgm84LQJGkDlgAYwixRBDJWhgwZGMI9T8QxFQYMmRjCNcWENUfGCNkYwjSAxDgBhgIZGMIlhQQlxwYGGRjCO8DEIoHGAlkYwj0FBCeHRgfZGMIpCcQgzUYL2RjCIVCEKlXGA9keAGAAaxNiAHf1trnAZABF5gB4-L74rUx",
    },
    {
      type: "video",
      name: "Saving India",
      created: "Tue, 21 Aug 2012 18:41:10 UTC",
      branding: "The New York Times",
      duration: "229",
      views: "0",
      thumbnail: [
        {
          url: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fgraphics8.nytimes.com%2Fimages%2F2013%2F01%2F06%2Fworld%2Fbull-india1%2Fbull-india1-superJumbo-v2.jpg",
        },
      ],
      categories: ["world"],
      id: "~~V1~~6871746565621405235~~Yy8iEO2YJatBqPpJiQzaWVoZ2aOoQPRzLpZW0sgAg0X47DqYi40_M7SmxblRZ1jwDaz3Yz2A7XHhwrO5mF5aNXK9LZf4s-wN0e-IrD14BQ5zRT2aBImfuuldQsAIqg2VA8znGKQO1bJpPNJmvJW5bbqtfNB9PSjDBlig62vbwfc",
      origin: "sponsored",
      url: "https://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__0f84b36f1879b6af470e709dd169fba0__87e7ca44b731aa883dff8d7c727fb4ff&response.session=v2_669d09090bf371d5643664addc390000_3fa1ab59-8d27-4d20-a2c0-b68c562d5f8b-tuctc2fe36f_1698061807_1698061807_CNawjgYQswsY4-L74rUxIAEoATDhATiRpA5QAFgAYABo37Gr6oqqw8_rAXAB&item.id=%7E%7EV1%7E%7E6871746565621405235%7E%7EYy8iEO2YJatBqPpJiQzaWVoZ2aOoQPRzLpZW0sgAg0X47DqYi40_M7SmxblRZ1jwDaz3Yz2A7XHhwrO5mF5aNXK9LZf4s-wN0e-IrD14BQ5zRT2aBImfuuldQsAIqg2VA8znGKQO1bJpPNJmvJW5bbqtfNB9PSjDBlig62vbwfc&item.type=video&sig=de3b529d24c9fe5d53343a03e3ce4f9e32e9763cb980&redir=http%3A%2F%2Fvideo.nytimes.com%2Fvideo%2F2012%2F08%2F21%2Fworld%2Fasia%2F100000001733139%2Fsaving-indias-tigers-.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiBNZ8O0K6S9XBvV6F97s9aBCVlQ8el_F3UWzglHZnQw-SC5BCjg1oi529GxspIB%23tblciGiBNZ8O0K6S9XBvV6F97s9aBCVlQ8el_F3UWzglHZnQw-SC5BCjg1oi529GxspIB&ui=3fa1ab59-8d27-4d20-a2c0-b68c562d5f8b-tuctc2fe36f&cpb=GIkFIJz__________wEqGXVzLnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzEwNjQ2OIDgm84LQJGkDlgAYwixRBDJWhgwZGMI9T8QxFQYMmRjCNcWENUfGCNkYwjSAxDgBhgIZGMIlhQQlxwYGGRjCO8DEIoHGAlkYwj0FBCeHRgfZGMIpCcQgzUYL2RjCIVCEKlXGA9keAGAAaxNiAHf1trnAZABF5gB4-L74rUx",
    },
    {
      description:
        "Fruit fashion is officially a thing. While you might be picnicking this spring, it's only appropriate to carry your goods in a fruit basket, well, fruit bag.",
      type: "video",
      name: "14 Fruity Accessories for Spring",
      created: "Mon, 14 Apr 2014 12:04:00 UTC",
      branding: "Accessories",
      duration: "0",
      views: "0",
      thumbnail: [
        {
          url: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fell.h-cdn.co%2Fassets%2Fcm%2F15%2F02%2F980x490%2F54ac57a05b3f8_-_elle-fruity-opener-h-elh.jpg",
        },
      ],
      categories: ["en"],
      id: "~~V1~~4679579409051409928~~e8DdPfPy17LINp0BUQ3g3HgEqsl8ynEPWU6g_gQg9GWKANNcaafC-0QP27WPePej_D75KE7fubJO0yBBV-Kjn3NvVRSOQU3KG74h40zV1xH_hLJUnWENG63_IjioJB0kLEmcx1ChxgPTupzdrr0oV48XwLbI--WZuj80gUuMjckv-g3BPZqv3IrMOsHf8vWe",
      origin: "sponsored",
      url: "https://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__0f84b36f1879b6af470e709dd169fba0__87e7ca44b731aa883dff8d7c727fb4ff&response.session=v2_669d09090bf371d5643664addc390000_3fa1ab59-8d27-4d20-a2c0-b68c562d5f8b-tuctc2fe36f_1698061807_1698061807_CNawjgYQswsY4-L74rUxIAEoATDhATiRpA5QAFgAYABo37Gr6oqqw8_rAXAB&item.id=%7E%7EV1%7E%7E4679579409051409928%7E%7Ee8DdPfPy17LINp0BUQ3g3HgEqsl8ynEPWU6g_gQg9GWKANNcaafC-0QP27WPePej_D75KE7fubJO0yBBV-Kjn3NvVRSOQU3KG74h40zV1xH_hLJUnWENG63_IjioJB0kLEmcx1ChxgPTupzdrr0oV48XwLbI--WZuj80gUuMjckv-g3BPZqv3IrMOsHf8vWe&item.type=video&sig=bc86e9e5c91f5060ec7bf958244985fba306678a8b89&redir=http%3A%2F%2Fwww.elle.com%2Faccessories%2Fbags-shoes-jewelry%2Ffruit-bags-jewelry%3Fsrc%3Drss%26utm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiBNZ8O0K6S9XBvV6F97s9aBCVlQ8el_F3UWzglHZnQw-SC5BCiLlPLg05DUsXo%23tblciGiBNZ8O0K6S9XBvV6F97s9aBCVlQ8el_F3UWzglHZnQw-SC5BCiLlPLg05DUsXo&ui=3fa1ab59-8d27-4d20-a2c0-b68c562d5f8b-tuctc2fe36f&cpb=GIkFIJz__________wEqGXVzLnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzEwNjQ2OIDgm84LQJGkDlgAYwixRBDJWhgwZGMI9T8QxFQYMmRjCNcWENUfGCNkYwjSAxDgBhgIZGMIlhQQlxwYGGRjCO8DEIoHGAlkYwj0FBCeHRgfZGMIpCcQgzUYL2RjCIVCEKlXGA9keAGAAaxNiAHf1trnAZABF5gB4-L74rUx",
    },
    {
      type: "video",
      name: "Review in Pictures: Suzuki Swift SZ-L",
      created: "Wed, 16 Apr 2014 13:24:46 UTC",
      branding: "Auto Express",
      duration: "0",
      views: "0",
      thumbnail: [
        {
          url: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fstatic.autoexpress.co.uk%2Fsites%2Fautoexpressuk%2Ffiles%2Fsuzuki-swift-profil.jpg",
        },
      ],
      categories: ["en"],
      id: "~~V1~~4623421456952901846~~KXrGnAmHtBjxOnbGp3iuluSqYT2wm5adCjkru81WtibaxJUMYN6PI0G8UwQ4xoq4wTvJuzxaodpifde-axqJVLnXD9c7GzxqmGzk7ZNcOISpLbQsdo9_xsmqmIXEy9_UGXLwsS3fkWtpBPA0sLI4oo6zhr_uog6GC70OqLAd6RE",
      origin: "sponsored",
      url: "https://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__0f84b36f1879b6af470e709dd169fba0__87e7ca44b731aa883dff8d7c727fb4ff&response.session=v2_669d09090bf371d5643664addc390000_3fa1ab59-8d27-4d20-a2c0-b68c562d5f8b-tuctc2fe36f_1698061807_1698061807_CNawjgYQswsY4-L74rUxIAEoATDhATiRpA5QAFgAYABo37Gr6oqqw8_rAXAB&item.id=%7E%7EV1%7E%7E4623421456952901846%7E%7EKXrGnAmHtBjxOnbGp3iuluSqYT2wm5adCjkru81WtibaxJUMYN6PI0G8UwQ4xoq4wTvJuzxaodpifde-axqJVLnXD9c7GzxqmGzk7ZNcOISpLbQsdo9_xsmqmIXEy9_UGXLwsS3fkWtpBPA0sLI4oo6zhr_uog6GC70OqLAd6RE&item.type=video&sig=d0e957e59653ce1c8838ec5636c7ab9997e19332a9cb&redir=http%3A%2F%2Fwww.autoexpress.co.uk%2Fsuzuki%2Fswift%2F86514%2Fsuzuki-swift-sz-l-pictures%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiBNZ8O0K6S9XBvV6F97s9aBCVlQ8el_F3UWzglHZnQw-SC5BCjKs5itt5O2hrQB%23tblciGiBNZ8O0K6S9XBvV6F97s9aBCVlQ8el_F3UWzglHZnQw-SC5BCjKs5itt5O2hrQB&ui=3fa1ab59-8d27-4d20-a2c0-b68c562d5f8b-tuctc2fe36f&cpb=GIkFIJz__________wEqGXVzLnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzEwNjQ2OIDgm84LQJGkDlgAYwixRBDJWhgwZGMI9T8QxFQYMmRjCNcWENUfGCNkYwjSAxDgBhgIZGMIlhQQlxwYGGRjCO8DEIoHGAlkYwj0FBCeHRgfZGMIpCcQgzUYL2RjCIVCEKlXGA9keAGAAaxNiAHf1trnAZABF5gB4-L74rUx",
    },
    {
      description:
        "Sie denken, Sie wissen alles über Jeans? Wozu dient dann wohl die unpraktische, kleine Tasche vorne rechts?",
      type: "video",
      name: "Unnützes Wissen: Dafür ist die kleine Tasche  in unseren Jeans",
      created: "Mon, 25 Jan 2016 18:29:56 UTC",
      branding: "Bild",
      duration: "164",
      views: "0",
      thumbnail: [
        {
          url: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fbilder.bild.de%2Ffotos%2Funnuetzes-wissen-dafuer-ist-die-kleine-tasche-in-unseren-jeans-50461884-44290070%2FBild%2F2.bild.jpg",
        },
      ],
      categories: ["de"],
      id: "~~V1~~5380160932904480176~~7P8nn88y-wISKO7wB9F6X_BxUiNHDmUKhc14qSChDWraxJUMYN6PI0G8UwQ4xoq4C1gfjSSMBjZUFVaXaB1tqp5h1Zh0_DX5Gg9FqvClPsawsJKw4MvLpbPTEutPGayPGXLwsS3fkWtpBPA0sLI4oo6zhr_uog6GC70OqLAd6RE",
      origin: "sponsored",
      url: "https://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__0f84b36f1879b6af470e709dd169fba0__87e7ca44b731aa883dff8d7c727fb4ff&response.session=v2_669d09090bf371d5643664addc390000_3fa1ab59-8d27-4d20-a2c0-b68c562d5f8b-tuctc2fe36f_1698061807_1698061807_CNawjgYQswsY4-L74rUxIAEoATDhATiRpA5QAFgAYABo37Gr6oqqw8_rAXAB&item.id=%7E%7EV1%7E%7E5380160932904480176%7E%7E7P8nn88y-wISKO7wB9F6X_BxUiNHDmUKhc14qSChDWraxJUMYN6PI0G8UwQ4xoq4C1gfjSSMBjZUFVaXaB1tqp5h1Zh0_DX5Gg9FqvClPsawsJKw4MvLpbPTEutPGayPGXLwsS3fkWtpBPA0sLI4oo6zhr_uog6GC70OqLAd6RE&item.type=video&sig=d0bb1b48a6ee45fdfd72ba90904b17b6a311c5b88508&redir=http%3A%2F%2Fwww.bild.de%2Flifestyle%2Fmode-beauty%2Fstyling%2Fjeans-fuenfte-tasche-geheimnis-gelueftet-44290082.bild.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiBNZ8O0K6S9XBvV6F97s9aBCVlQ8el_F3UWzglHZnQw-SC5BCj6_JmXsP742AE%23tblciGiBNZ8O0K6S9XBvV6F97s9aBCVlQ8el_F3UWzglHZnQw-SC5BCj6_JmXsP742AE&ui=3fa1ab59-8d27-4d20-a2c0-b68c562d5f8b-tuctc2fe36f&cpb=GIkFIJz__________wEqGXVzLnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzEwNjQ2OIDgm84LQJGkDlgAYwixRBDJWhgwZGMI9T8QxFQYMmRjCNcWENUfGCNkYwjSAxDgBhgIZGMIlhQQlxwYGGRjCO8DEIoHGAlkYwj0FBCeHRgfZGMIpCcQgzUYL2RjCIVCEKlXGA9keAGAAaxNiAHf1trnAZABF5gB4-L74rUx",
    },
  ],
};

export const MOCK_PUBLISHER_INSTANCE = {
  publisherId: "taboola-templates",
  retries: 3,
  totalRecs: 4,
  displayRecOnFail: true,
  defaultImageSrc:
    "https://www.shepherdsearchgroup.com/wp-content/themes/shepherd/images/no-image-found-360x250.png",
  recsDesktop: 4,
  recsMobile: 2,
  maxCaptionLength: 100,
  priority: "medium",
  themeColor: "#fff",
  textColor: "#000",
  accentColor: "#007bff",
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
};

export const MOCK_API_INSTANCE = {
  name: "TEST_API",
  baseUrl: "recommendations.get",
  appType: "desktop",
  apiKey: "someApiKey",
  count: 5,
  listProperty: "list",
  typeProperty: "origin",
};

export const MOCK_FETCHED_RECOMMENDATION = {
  description:
    "Les beaux jours sont arrivés ! L’occasion pour les filles de la rédaction d’arborer des vêtements plus légers. Découvrez en image les looks printaniers que l’on a croisés au bureau.",
  type: "video",
  name: "La rédac’ se met au printemps",
  created: "Tue, 08 Apr 2014 00:00:00 UTC",
  branding: "Elle",
  duration: "0",
  views: "0",
  thumbnail: [
    {
      url: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn-elle.ladmedia.fr%2Fvar%2Fplain_site%2Fstorage%2Fimages%2Fmode%2Fmode-street-style%2Fla-redac-se-met-au-printemps%2F46943973-1-fre-FR%2FLa-redac-se-met-au-printemps_reference.jpg",
    },
  ],
  categories: ["fr"],
  id: "~~V1~~-3808871886283932350~~ZZjwieuFi0udh1RZS1JXsHgEqsl8ynEPWU6g_gQg9GWKANNcaafC-0QP27WPePejIoJl3WKIIrm4Yg_30fVE1XNvVRSOQU3KG74h40zV1xE3Jpvz87tKk9szttPlHlQ17hW18gOeBKWEuq6da9CEkY8XwLbI--WZuj80gUuMjckv-g3BPZqv3IrMOsHf8vWe",
  origin: "sponsored",
  url: "https://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__0f84b36f1879b6af470e709dd169fba0__87e7ca44b731aa883dff8d7c727fb4ff&response.session=v2_669d09090bf371d5643664addc390000_3fa1ab59-8d27-4d20-a2c0-b68c562d5f8b-tuctc2fe36f_1698061807_1698061807_CNawjgYQswsY4-L74rUxIAEoATDhATiRpA5QAFgAYABo37Gr6oqqw8_rAXAB&item.id=%7E%7EV1%7E%7E-3808871886283932350%7E%7EZZjwieuFi0udh1RZS1JXsHgEqsl8ynEPWU6g_gQg9GWKANNcaafC-0QP27WPePejIoJl3WKIIrm4Yg_30fVE1XNvVRSOQU3KG74h40zV1xE3Jpvz87tKk9szttPlHlQ17hW18gOeBKWEuq6da9CEkY8XwLbI--WZuj80gUuMjckv-g3BPZqv3IrMOsHf8vWe&item.type=video&sig=2b2bc34067122a47c5d6d728452616704afa9912c67b&redir=http%3A%2F%2Fwww.elle.fr%2FMode%2FMode-street-style%2FLa-redac-se-met-au-printemps%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiBNZ8O0K6S9XBvV6F97s9aBCVlQ8el_F3UWzglHZnQw-SC5BCijn-TBosTGka4B%23tblciGiBNZ8O0K6S9XBvV6F97s9aBCVlQ8el_F3UWzglHZnQw-SC5BCijn-TBosTGka4B&ui=3fa1ab59-8d27-4d20-a2c0-b68c562d5f8b-tuctc2fe36f&cpb=GIkFIJz__________wEqGXVzLnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzEwNjQ2OIDgm84LQJGkDlgAYwixRBDJWhgwZGMI9T8QxFQYMmRjCNcWENUfGCNkYwjSAxDgBhgIZGMIlhQQlxwYGGRjCO8DEIoHGAlkYwj0FBCeHRgfZGMIpCcQgzUYL2RjCIVCEKlXGA9keAGAAaxNiAHf1trnAZABF5gB4-L74rUx",
};
