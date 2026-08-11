# 🚀 Welcome to the Jetstream template on CloudCannon

This is **Jetstream**, a fully configured Astro marketing template. Use it to explore how CloudCannon works — edit pages visually, write blog posts, and manage site data.

**Jetstream** is your sandbox, so go ahead and change anything (you can always make a new copy).

## 🖼️ Try the _Visual Editor_

[Edit the website home page](cloudcannon:collections/pages:/edit?collection=pages&path=%2Fsrc%2Fcontent%2Fpages%2Findex.md&schema=default&editor=visual&url=%2F) in CloudCannon's _Visual Editor_. Edit any text, image, or component directly on a preview of your webpage. Change a headline, swap a call-to-action, or rearrange page sections, all in context. You'll always know exactly what your website visitors will see.

## ✏️ Write in the _Content Editor_

Use CloudCannon's _Content Editor_ when you need a clean, Markdown-based writing experience. Take a look at [**Jetstream's** blog collection](cloudcannon:collections/blog) and click any post to start editing! With a familiar formatting toolbar and no distractions, you'll be updating your website content in no time.

## 🖥️ Customize website data with the _Data Editor_

Open the files in [**Jetstream's** data collection](cloudcannon:collections/data) in CloudCannon's _Data Editor_ to update the links in your header navigation, the content in your footer, or your website's SEO information. Changes you make in the _Data Editor_ flow through to every page automatically.

## 🌍 Translate the site into French and German

**Jetstream** is multilingual. English is served at the root, French under `/fr/`, and German under `/de/`. Two different things get translated, in two different places.

**Shared text — nav, footer, headings, buttons, tag labels.** Open any marketing page in the _Visual Editor_ and use the floating language switcher to flip to FR or DE. The text on the page becomes editable in place, and what you type is saved as that language's translation. The English original is untouched, so you can always switch back and compare. Head-only text that isn't on the page — the browser tab title and the meta description — lives in the [Locales collection](cloudcannon:collections/locales) instead, under keys like `about:page_title`.

**Whole blog posts.** Long articles are real content files rather than translated strings, so each language gets its own collection: [Blog (Français)](cloudcannon:collections/blog_fr) and [Blog (Deutsch)](cloudcannon:collections/blog_de). Open a post there and edit it as a full document in the _Content Editor_, exactly like an English one. Three of the thirteen posts are translated — the rest stay English-only and simply don't appear in the French and German blog listings.

A couple of things worth knowing:

- You won't see the language switcher on a blog post page. That's deliberate: the body of a post is translated by editing its file in the collection above, so there'd be nothing for the switcher to do.
- Blog post `tag` values stay in English in every language, because a tag is also part of the URL. Only the label you see on the page is translated, and it's translated once for the whole site.

> **Setting this up on your own site?** CloudCannon needs `CLOUDCANNON_SYNC_PATHS=/rosey/` in your site settings so translations are saved back to your _Git Repository_. It's preset for sites created from this template; without it, every build discards them.

## 🔒 Your changes are safe

Don't worry — CloudCannon preserves every edit you make and, when you are ready, will update your _Git Repository_. Use the _Save_ button in the top right of the app to see those changes live on your website.

## ☁️ What's next?

Once you've explored what CloudCannon can do, you're ready for the real thing — getting your own website on CloudCannon. Head back to your [Organization home](cloudcannon:!home). The **Getting Started** guide will walk you through connecting your own _Git Repository_ and setting up WYSIWYG editing.

Have questions? We're here to help — check out the [CloudCannon documentation](https://cloudcannon.com/documentation/) or reach out to our [friendly support team](cloudcannon:!support).
