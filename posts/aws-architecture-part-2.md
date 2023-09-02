---
title: "AWS Architecture Part 2"
date: "2023-08-31"
---

Over the past few days I have been researching the best way to host my blog content. Due to wanting to be able to have creative freedom on each blog post, I have decided to keep my content in Markdown files. This gives me the freedom to still use raw HTML inside the markdown file.

Due to holding my content in Markdown files i needed a solution to store them. Wanting a low cost or free solution for this blog I compared various pricing across AWS and Microsoft Azure and found AWS' free tier S3 buckets to come out on top. This will also be easier to integrate and setup as I will be using AWS to host other sections of the API such as Amazon cognito for security, lambda functions for serverless hosting and Dynamo for the non-relational database.

##Architecture
