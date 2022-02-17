# Dark Blueberry

[![Netlify Status](https://api.netlify.com/api/v1/badges/bc8c4e51-37ee-419d-ad4f-b378010ee546/deploy-status)](https://app.netlify.com/sites/cupper-hugo-theme/deploys)

A very nice, simple, light on the eyes, theme.

## Table of contents

* [Demo](#demo)
* [Minimum Hugo version](#minimum-hugo-version)
* [Installation](#installation)
* [Updating](#updating)
* [Run example site](#run-example-site)
* [Configuration](#configuration)
* [Shortcodes](#shortcodes)
* [Enable Table of Contents for a Blog Post](#enable-table-of-contents-for-a-blog-post)
* [Enable Comments for a Blog Post](#enable-comments-for-a-blog-post)

## Demo

https://damrah.netlify.app

## Minimum Hugo version

Hugo version `0.81.0` or higher is required. View the [Hugo releases](https://github.com/SingularisArt/hugo-dark-blueberry) and download the binary for your OS.

## Installation

From the root of your site:

```
git submodule add https://github.com/SingularisArt/hugo-dark-blueberry themes/dark-blueberry
```

## Updating

From the root of your site:

```
git submodule update --remote --merge
```

## Run example site

From the root of `themes/dark-blueberry/exampleSite`:

```
hugo server --themesDir ../..
```

## Configuration

Copy `config.yaml` from the [`exampleSite`](https://github.com/SingularisArt/dark-blueberry/tree/master/exampleSite), then edit as desired.

## Shortcodes

Here's a list of all of my shortcodes:

<!-- ###  -->

## Enable Table of Contents for a Blog Post

Set `toc` to `true`. For example:

```
---
title:        	"Title"
author:       	"Author"
introduction: 	"Introduction"
date:         	2022-01-08
description:    "Short and sweat description"
draft: 		 	    false
comments:		    true
cover:			    "/covers/cover-1.png"
toc:			      true
tags:         	["tag-1", "tag-2", "tag-3"]
---
```

## Enable Comments for a Blog Post

I use **Disqus** for my comments on my website.

* First, you need to go over to [disqus](https://disqus.com).
* Then, create an account. Make sure to click **I want to install Disqus on my site**.
* Go ahead and enter your website url.
* Then, select your plan.
* After that, you will see a list of all of the different website creators. Select the **I don't see my platform listed, install manually with the Universal Code**
* I recommend you to watch the video if you haven't already. But, all you need to do is copy the code that's underneath the video and place it [here](ayouts/partials/comments.html)

