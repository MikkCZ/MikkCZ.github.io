---
layout: post
title: My motivation for creating Pontoon Tools
tags: mozilla l10n webextension
---

I first heard about Pontoon many years ago (I think [here](http://horv.at/blog/localizing-firefox-os-with-pontoon/)) and by that time, it was a small project which I forgot about after the very first look. A year or two later, when I was responsible for localizing several Mozilla web applications, Mozilla Verbatim became very buggy. I was introduced to Pontoon again and it looked much better. And because XLIFF used in Firefox for iOS was a big pain (^2 with Subversion), I have decided to give Pontoon a chance. From that moment, I like Pontoon very much, especially after we have migrated all to projects to Pontoon, including desktop products, which I was very afraid of before. I always try to give the developers the best feedback I can and I have even promised several times to help with fixing few bugs, but that actually never happened, as I got busy at study and work. :(

But today when Firefox 57 is behind the corner and the word “WebExtensions” in every second Mozilla blogpost, I have decided to write one for myself and I wrote Pontoon Tools. My motivation was simple, to stop checking Pontoon few times a day, if the bell at the top is gray or asking for my attention with the pink color. The 0.x versions were super simple, but when I have made the notification pop-up look the same like in Pontoon, I have realized there is much more to be done - integrate Pontoon into Firefox... It could help us fix typos faster and file bugs for more complex issues without the Bugzilla several steps wizard, it can help us with Mozilla websites proofreading and Firefox help articles translation… Yes, I wish Pontoon can do all of that, but the integration with each Mozilla website and product would be a big pain, unless the browser can do that, and it can with an extension.

The first Pontoon Tools milestone, which included the basic notifications feature, has been successfully reached with version 1.0 after six days from the start. It indicated if there are any unread notifications and displayed them on a single click.

[![Pontoon Tools notifications popup](/assets/img/pontoon-tools-notifications-popup.png){:style="max-height:150px"}](/assets/img/pontoon-tools-notifications-popup.png){:style="display:block;text-align:center"}

Soon after the first feedback from other localizers I have improved the notifications link to open the project for the right team,added some quick navigation to various Pontoon pages (team page, list of team bugs or machinery), and later an experimental search from page context menu on Mozilla.org and SUMO.

[![Pontoon Tools context menu on Mozilla.org](/assets/img/pontoon-tools-mozilla-org-context-menu.png){:style="max-height:150px"}](/assets/img/pontoon-tools-mozilla-org-context-menu.png){:style="display:block;text-align:center"}

The other big area I would like to focus on now is proofreading, by making Pontoon Tools smart enough to recognize any Mozilla website (including staging and development versions) and allow to quickly search selected text in Pontoon and in the right project. What do you think about right clicking a misspelled word, selecting an option from the context menu and have a bug template prefilled with all the necessary information, or even better opened the corresponding string in Pontoon to fix it? Two or three clicks to get a string fixed after you have spot a typo or inconsistent translation does not sound bad at all, right? I believe this will be useful not just for myself, but for all Mozilla l10n teams.

What is your or your team workflow? Where do you think our tools can support it better? When do you think Pontoon is too many clicks away to access it? Send me your feedback [directly](https://mozillians.org/u/mstanke/), or discuss to corresponding [tickets on GitHub](https://github.com/MikkCZ/pontoon-tools/issues).

