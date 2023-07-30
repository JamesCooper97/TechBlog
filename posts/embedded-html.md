---
title: "Embedded HTML in Markdown File"
date: "2023-07-30"
---

Double post for the day!

<h2>HELLO</h2>

I didn't like my previous solution and it was bugging me that I couldn't include images on my local. So, I did some googling and searched embedded html in markdown files for remark. I came across a discussion [here] that details remark-rehype and rehype-raw. I need to look at the documentation to see what is strictly needed but for now this works.

<Link href="/"><Image priority src="/images/embedded-html.JPG" height={108} width={108} alt=""/></Link>

This image is now stored on my local, moving away from hosting in google drive.

<Link href="/"><Image priority src="/images/posts-rehype-raw.JPG" height={108} width={108} alt=""/></Link>

You can see the updated posts function above using the rehype raw and remark rehype. Details of usage can be found on [this] webpage.

Challenges I faced:

-

I learnt:

- How to digest a markdown file with embedded HTML

To Learn:

-

[here]: https://github.com/remarkjs/remark-rehype/issues/8#issuecomment-309298870
[this]: https://unifiedjs.com/learn/recipe/remark-html/#how-to-properly-support-html-inside-markdown
