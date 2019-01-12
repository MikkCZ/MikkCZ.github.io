---
layout: post
title: Jekyll on Czech OSS communities websites
tags: web jekyll english
---

[Jekyll](https://jekyllrb.com/) is a static site generator, which turns Markdown (almost plain text) or simple HTML stored in a `git` repository into a static website. By *static* I mean there is no scripting language like PHP running on the server, so you don't need to worry about some villain taking it over to send spam or mine coins. All you need for hosting your website built by Jekyll is a webserver somewhere, e.g. GitHub Pages.

In the small Czech pond of OSS communities the first Jekyll I saw was on [L10N.cz](https://www.l10n.cz/). The first time I ever heard about Jekyll and I fell fell in love immediately. L10N.cz uses Jekyll for its main site, basically a blog like this one. With the small group of authors, low cadence of posts and no comments, both WordPress or Drupal would be a huge overkill to maintain.

My next Jekyll instances were already started by me. This blog, the list of Mozilla.cz slides and the default homepage for Czech users of SeaMonkey. Both the Mozilla sites are somewhat special and use leverage mostly the templating engine than any other Jekyll feature.

The [Mozilla.cz slides](https://prezentace.mozilla.cz/) site uses Jekyll to generate the listing of various conferences and events we attend. In the repository, there are both the slides themselves, and their index in the form posts annotated with event names and links to video recordings. It's no black magic and bare GitHub Pages are perfect for hosting this site without any additional tooling.

The [default homepage](https://start.mozilla.cz/) for SeaMonkey is a little more complicated that it may look like. Small page which fits into a single screen, but not truly static - it's regularly updated with new items from two RSS feeds. First I thought about going pure JS, but SeaMonkey users may block it and making them all download the feeds would not be friendly to the RSS feed providers either. So when rewriting it from PHP, I was forced to step into the unknown space of Jekyll plugins, and also start to build the site using Travis CI. GitHub Pages are really limited in the options for custom plugins or even regular rebuilds. I will unveil more details in some of the coming posts.

Recently I also started rebuilding two Linux community websites - [proc.linux.cz](https://proc.linux.cz/) and [Ubuntu.cz](https://www.ubuntu.cz/). Given the fact that probably I will be the only content author (at least for the beginning), I went for Jekyll again. Jekyll definitely does not fit all cases I can imagine, but I think static sites are *sexy* and easier to maintain with very limited team resources than some outdated yet simple PHP scripts, or even full blown CMS. Actually it may be even easier for someone to fix bugs or typos in the content via PR, that sending a complex report over e-mail, what is wrong a where. Of course when you have some input from users or more content creators, WordPress or Drupal with their simple admin UI and access rights management are the way to go.
