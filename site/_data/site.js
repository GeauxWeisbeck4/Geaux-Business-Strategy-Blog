module.exports = {
    name: "Geaux Business Strategy Sprint",
    shortDesc: "Featuring the Section 4 Business Strategy Sprint taught by Scott Galloway.",
    url: "https://geauxbusinessstrategy",
    authorEmail: "andrew.weisbeck@gmail.com",
    authorHandle: "@GeauxWeisbeck4",
    authorName: "Andrew Weisbeck",
    postsPerPage: 4,
    socialImage: "/img/social.jpg",
    theme: {
        primary: {
            background: "white",
            text: "black",
            highlight: "#666",
        },
        secondary: {
            background: "darkish green",
            text: "white",
            highlight: "#666",
        },
    },

    keystone: {
        comments: true,
        bookmarks: true,
        claps: true,
        login: true,
    },
    // Critical CSS results in much slower build times and uses a lot of system resources
    // turn on in production :)
    // See `site/transforms/critical-css-transform.js` for more details
    criticalCSS: false,
};