---
title: "Adding images"
date: "2023-07-30"
---

I wanted to make the blog a bit more visual, so that I can showcase current progress better. After scouring the web I found a solution that meant I could add images of my progress to the current markdown files being created. Images are hosted on google drive and used a simple view url to access them.

![][def]
**Example of showing images in a markdown file, replace def with url**

Obtaining the Google drive path "simple view"

https://stackoverflow.com/questions/10311092/displaying-files-e-g-images-stored-in-google-drive-on-a-website

Challenges I faced:

- After hardcoding the path in the markdown file to the local host, I received a 404 after deploying the code. I believe this is a permissions issue as the path to the image looked correct. I tried public web images and that worked, so I decided to start a public directory on google images to host my images. This will work as a temporary fix until I host a server for my blog posts where I can retrieve them through API calls.

I learnt:

- Markdown image rendering

To Learn:

- To understand how the profile image is being loaded, can I replicate this in markdown?
- Read up on 'gray-matter' documentation, this will assist in future markdown editing
- Adding html to markdown files?

[def]: https://drive.google.com/uc?id=1ftXeYLxGi0Yhw9c9UbFbqwGVkkymjwYo
