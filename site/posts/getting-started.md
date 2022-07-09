---
title: Getting Started
date: "2022-07-11"
description: "The Business Strategy Sprint focuses on the strategies (T-Algorithms) that drive the most successful and most valuable firms today."
tags:
  - section4
  - post
  - blog
---

## Welcome to the Business Strategy Sprint

Follow me during or after my participation in Section 4's Business Strategy Sprint. I have been excited for this sprint, ever since the day I signed up for it. The main reason being the amount of respect I have for Professor Scott Galloway - he has a great mind and is successful, but he still thinks about people. It's hard to find somebody like that who exists at the highest levels of business decision making. I also love his writing style - I also love to get stoned before I write. I'm a heavy believer in the creative powers of mind altering things that help one transcend beyond their own self doubts, and also from taking one too seriously in life and focusing your attention on the important things in life.

I chose the [Supermaya template](https://supermaya-demo.netlify.app/) because it was an easy implementation of an easy-to-use and highly configurable static website generator, [Eleventy](https://11ty.dev/), and allowed for me to quickly blog and catch up on the very last Saturday of the business sprint. Don't worry, many of these notes were taken throughout the last couple weeks. You don't have to think of me sitting her and getting carpel tunnel from creating this whole website on a Saturday, because I totally neglected my sprint duties for other projects - no way...

Anyways, enjoy reading about another experience with a [Section 4](https://section4.com) sprint opportunity to create something cool, or improve myself in some awesome way. I decided that I would use my own little web development, marketing, and graphic design busienss, Tar Heel Dev Studio. I had pondered the idea of creating this brand and using it to represent myself in my freelance web development career. You can find my [current business website here](https://tarheeldevstudio.com) and hopefully will be enjoying new feature, provided by my services.

Before I jump into to cover all that I have learned, I will begin with some project exercises and will continue in somewhat of a format throuhout my blog posts. 
It comes with all the blog standard features:

- Posts and Pages
- Pagination
- Tags
- Static server-rendered content

A bunch of good practices:

- RSS feed
- \*Considerate mark-up
- Service worker with offline content
- Lazy loading images
- Critical CSS

_\*Considerate means semantic, accessible mark-up, written for both humans and machines._

<br>

Additional features:

- Seamless JavaScript and SCSS compilation (no build process)
- Data-driven navigation
- Customisable settings including theming

Additional features:

- Comments
- Claps
- Reading List
- Login

These additional features that have persistent data including user generated content. On JAMstack sites including rich content usually means complicated build processes and multiple third-party services. This doesn't sit well with me since owning my own data and tinkering with the platform is a big motivation for building a static personal site.

That's why I opted to pair Supermaya with [KeystoneJS](https://keystonejs.com/) to create a unified API that you own and manage. Each of these features are added progressively with JavaScript and will fail gracefully if not configured or the server can't be reached. You can opt-out on a per feature basis by modifying the data in `site/_data/site.js`, or on a per-page basis with front-matter.

## Deploying Supermaya + Keystone

To get started deploy the [Keystone JAMstack plus starter kit](https://github.com/MadeByMike/keystone-jamstack-plus) platform to Heroku.

Once installed visit the site on Heroku and copy your Keystone API URL. Follow the instructions to automatically deploy Supermaya to Netlify where you will be asked to enter the Keystone API URL.

Supermaya is designed work with the Keystone JAMstack plus platform to be a launch pad for larger ideas. Allowing you to go all the way from a simple static website to a feature rich application if you want.

**Note**: Rich features are optional. Supermaya is a perfectly good starter template for 11ty without any other services. You can deploy Supermaya on it's own and add a `KEYSTONE_API` environmental variable later if you wish.

## Deploying Supermaya

To deploy Supermaya on its own you can use this link to [deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/MadeByMike/supermaya). Leave the `KEYSTONE_API` blank if you don't have one. Alternatively you can clone this repository and run it locally.

## Starting Supermaya

To start the project run:

```
npm install
```

Then:

```
npm start
```

## Configure site information

Configure important site-wide information like the site name, description and default author information:

```
site/_data/site.js
```

## Configure navigation

Change the site navigation by modifying:

```
site/_data/navigation.json
```

## Color schemes

Supermaya includes basic theming. Select an alternative to the black and white feature colors by modifying the `theme` in:

```
site/_data/site.js
```

## Keystone features

If you connected Supermaya to a keystone backend you can toggle features under `keystone` in:

```
site/_data/site.js
```

## Add CSS

In Supermaya SCSS files are compiled on-the-fly by 11ty and added to data. This means you can write inline CSS directly into templates and partials like this: `<style>{% raw %}{{css["compilation-target"] | safe}}{% endraw %}</style>`. Where "compilation-target" is the key added to the list of SCSS files to compile in:

```
site/_data/css.js
```

Each entry added to the `targets` array will be available as site data and a static file will also be written to `css/[compilation-target].css`.

Source files for scss have been added to the directory `site/src/scss`.

## Add JavaScript

Similar to how SCSS works, JavaScript files in Supermaya are also compiled on-the-fly using Webpack.

The Webpack configuration contains a loader for `.js` files that will transpile ES6 to ES5 meaning you can safely write modern JavaScript. The Webpack configuration can be extended or modified in: `site/utils/compile-webpack.js`.

Files generated by Webpack are added to site data so you can write inline JavaScript in templates and partials like this: `<script>{% raw %}{{css["output-filename"] | safe}}{% endraw %}</script>`. The "output-filename" should be the full name of a file generated by Webpack including the extension.

You can add additional entry points by modifying the `targets` array in:

```
site/_data/js.js
```

Each file generated will also be available as a static file at the path: `js/[output-filename]`.

Source files for javascript have been added to the directory `site/src/js`.

## Critical CSS

Supermaya is capable of generating criticalCSS although this is turned off by default for performance reasons. You can turn this feature on by modifying:

```
site/_data/site.js
```

## Why "Supermaya"

A friend and designer Matt Barron, helped me out with some initial design work and used it as a placeholder for the site name in early mock-ups. As usual development names grow on you. I later learned it was the name of his family dog. It's a combination of Superman and Maya, one of his kids favourite cartoon characters. That settles it, right? And here's a picture:

<img src="/supermaya.jpg" width="600"/>
