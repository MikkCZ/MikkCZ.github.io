---
layout: post
title: Pontoon Tools 2.0
tags: mozilla l10n webextension english
---

It's 13th of September, but it's not Friday so I hope Pontoon Tools version 2.0 will be the lucky one. I have uploaded it to AMO a short while ago, so the approval may take some time a before you get the update. But I promise, there are reasons for the major version bump. ;)

This version is dedicated to proofreading and quick bug reporting/fixing. Many times it happened to me, that I spotted a typo on a new Mozilla.org page and it took me dozen of clicks and page loads to open Pontoon a get the string fixed. For the same reason I haven't pushed the rest of the team to proofreading much, because I know how complicated the reporting can be.

With 2.0, all of this changes. On any production website, that Pontoon Tools recognize, you will see a page action icon in the address bar. When you spot a string to update, just click the page action and a new tab with Pontoon translation view of the corresponding project will open. For typos or unique texts, there is even faster way - select the text on the page, right-click it and in the context menu you will find a quick search option. Just [try it somewhere](https://www.mozilla.org/firefox/)... Isn't that handy?

[![Pontoon Tools page action on Mozilla.org](/assets/img/pontoon-tools-page-action.png){:style="max-width:450px"}](/assets/img/pontoon-tools-page-action.png){:style="display:block;text-align:center"}

[![Pontoon Tools context menu on Mozilla.org](/assets/img/pontoon-tools-mozilla-org-context-menu.png){:style="max-width:450px"}](/assets/img/pontoon-tools-mozilla-org-context-menu.png){:style="display:block;text-align:center"}

The second big change are the add-on options, accessible from the Firefox Add-ons manager (or _Ctrl+Shift+A_). I have reorganized them into sections and added few extra. If you were playing with the options before this version, some of your preferences might be lost now... But feel free to go ahead and set them up again. On the other hand if you are not sure about the changes you have made, you can reset all the options to their default values.

[![Pontoon Tools options](/assets/img/pontoon-tools-options.png){:style="max-width:450px"}](/assets/img/pontoon-tools-options.png){:style="display:block;text-align:center"}

At this moment, I am not decided about the next big things to come. Maybe there is no major feature missing after the initial takeoff? I am looking forward to hear your thoughts, either [directly](https://mozillians.org/u/mstanke/) or on [GitHub](https://github.com/MikkCZ/pontoon-tools). It can be both positive or negative feedback, bug report or a feature request. :)
