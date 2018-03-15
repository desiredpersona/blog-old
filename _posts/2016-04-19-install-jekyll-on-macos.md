---
layout: post
title: Install Jekyll on macOS
description: How to install Jekyll static site generator on macOS and host your static website on Github Pages.
date: 2016-04-19 22:00:00
last_modified_at: 2017-08-15 10:14:00
author: desired persona
category:
    - Jekyll
    - static website
tags:
    - macOS
    - Github Pages
---

I was looking for a tool that can build websites that are fast, simple and secure. These websites needed to be static because I didn’t want to deal with databases or a traditonal content management system (CMS) like WordPress or Ghost. After a lot of thought I decided to use Jekyll.

## So what is Jekyll?

[Jekyll](https://jekyllrb.com/){:target="_blank"} is a tool for transforming your plain text into static websites and blogs. It is simple, static, and blog-aware. Jekyll uses the [Liquid templating language](https://docs.shopify.com/themes/liquid-basics){:target="_blank"} and has built-in [Markdown](https://daringfireball.net/projects/markdown/){:target="_blank"} and [Textile](https://en.wikipedia.org/wiki/Textile_(markup_language)){:target="_blank"} support. It also ties in nicely to [Github Pages](https://pages.github.com/){:target="_blank"} so you have the option to host your website for free. I highly recommend you join [Jekyll Talk](https://talk.jekyllrb.com/){:target="_blank"} the official support forum, where users and contributors can ask questions and discuss all aspects of Jekyll.

## Preparing to install Jekyll

Installing Jekyll is easy and straight-forward, but there are a few requirements you’ll need to make sure your system has before you start.

Install homebrew from the [brew.sh](https://brew.sh){:target="_blank"} website.

{% highlight shell %}
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
{% endhighlight %}

Install the latest version of Ruby using homebrew

{% highlight shell %}
brew install ruby
{% endhighlight %}

Check the Ruby version installed

{% highlight shell %}
ruby -v
{% endhighlight %}

Install bundler

{% highlight shell %}
gem install bundler
{% endhighlight %}

Go to the Mac app store and Install Xcode if you haven't already. Then install the Xcode Command Line Tools.

{% highlight shell %}
xcode-select --install
{% endhighlight %}

## Installing Jekyll

Install Jekyll

{% highlight shell %}
gem install jekyll
{% endhighlight %}

Check Jekyll version

{% highlight shell %}
jekyll -v
{% endhighlight %}

Change directory to the location where you want to create your site. I have chosen to keep all my Jekyll sites in a directory called `Jekyll` located in `/Sites/Jekyll/`.

{% highlight shell %}
cd ~/Sites/Jekyll/
{% endhighlight %}

Create a new Jekyll site. Replace `site-name` below with your own site name.

{% highlight shell %}
jekyll new site-name
{% endhighlight %}

Change directory to the new site you just created

{% highlight shell %}
cd ~/Sites/Jekyll/site-name/
{% endhighlight %}

Preview your new site with the command 

{% highlight shell %}
bundle exec jekyll serve
{% endhighlight %}

Jekyll will now watch for changes, and regenerate automatically. Your static website is generated in the `_site` directory.

To view your Jekyll website open [http://localhost:4000](http://localhost:4000){:target="_blank"} in a browser.

## How to update Jekyll

Bundler will update all your gems to the latest versions by simply running `bundle update` in a Terminal window.

## How to create and update a GitHub repository

Before i continue with this tutorial, its worth mentioning that you can [learn to use Git](https://try.github.io/levels/1/challenges/1){:target="_blank"} in 15 minutes.

Install Git

{% highlight shell %}
brew install git
{% endhighlight %}

Open Terminal and go to your website directory

{% highlight shell %}
cd ~/Sites/Jekyll/site-name/
{% endhighlight %}

Your first instinct, when you start to do something new, should be to type `git init`. Once inside your Jekyll site directory initialize it as a Git repository with the command

{% highlight shell %}
git init
{% endhighlight %}

Good job! As Git just told us, our websites directory now has an empty repository in `/.git/`. The repository is a hidden directory where Git operates.

Next up, let's type the git status command to see what the current state of our project is

{% highlight shell %}
git status
{% endhighlight %}

Create a readme file

{% highlight shell %}
echo "# This is my first jekyll website" >> README.md
{% endhighlight %}


Create a `.gitignore` file right away, to indicate all of the files you don’t want to track.

{% highlight shell %}
touch .gitignore
{% endhighlight %}

Open the hidden `.gitignore` file with the following command

{% highlight shell %}
nano .gitignore
{% endhighlight %}

Add the following to the `.gitignore` file

```shell
_site/
.sass-cache/
.jekyll-metadata
.DS_Store
```

In order to begin tracking these new files, you use the command `git add`. If you modify a file after you run `git add`, you have to run `git add` again to stage the latest version of the file

{% highlight shell %}
git add README.md
{% endhighlight %}

{% highlight shell %}
git add .gitignore
{% endhighlight %}

Use `git status` to determine which files are in which state (e.g untracked files)

{% highlight shell %}
git status
{% endhighlight %}

After updating your website files in your website directory you can actually use `git add .` to add all untracked files at once.

{% highlight shell %}
git add .
{% endhighlight %}

Now you can commit your changes to your GitHub repository.

{% highlight shell %}
git commit
{% endhighlight %}

Alternatively, you can type your commit message inline with the commit command.

{% highlight shell %}
git commit -m "YOUR MESSAGE HERE"
{% endhighlight %}

Now you’ve created your first commit!

TIP: Adding the -a option to the git commit command makes Git automatically stage every modified file that is already tracked before doing the commit, allowing you to skip the ‘git add’ part.

{% highlight shell %}
git commit -a -m "YOUR MESSAGE HERE"
{% endhighlight %}

Next created a new empty GitHub repository. Login to [GitHub.com](https://github.com){:target="_blank"} and click the ‘**+**’ icon and select ‘**New repository**’. Enter a repository name and then click ‘**Create repository**’.

In Terminal run the following command but first replace ‘**username**’ with your own GitHub username and ‘**repository**’ with the repository name you just created.

{% highlight shell %}
git remote add origin git@github.com:username/repository.git
{% endhighlight %}

Now you are ready to push your changes to your new GitHub repository.

{% highlight shell %}
git push -u origin master
{% endhighlight %}

After your first push, you can simply type `git push` to push future change to your GitHub repository.

{% highlight shell %}
git push
{% endhighlight %}

## Publish Jekyll to GitHub Pages

Create a new branch called gh-pages.

{% highlight shell %}
git branch gh-pages
{% endhighlight %}

Switch to gh-pages branch.

{% highlight shell %}
git checkout gh-pages
{% endhighlight %}

TIP: You could also do `git checkout -b gh-pages` to create and switch branch in one command.

Next you can delete the master branch on your local machine if you dont need to switch between two branches for development. We only need to use the `gh-pages` branch in future for hosting and keeping track of our static website changes.

{% highlight shell %}
git branch -D master
{% endhighlight %}

Push changes to gh-pages repository

{% highlight shell %}
git push origin gh-pages
{% endhighlight %}

Go to your Jekyll repository page on GitHub. Click on ‘**Settings**’. In the ‘**Branches**’ section, change the ‘**Default branch**’ in the dropdown menu to the newly created ‘**gh-pages**’ branch.

Now you can delete the master branch from GitHub

{% highlight shell %}
git push origin :master
{% endhighlight %}

Your Jekyll website is now live on GitHub pages.

## Setting up a custom domain on GitHub Pages

Create a CNAME file

{% highlight shell %}
touch CNAME
{% endhighlight %}

Open the CNAME file using the following command.

{% highlight shell %}
nano CNAME
{% endhighlight %}

Add your websites domain name in the following format and save your changes.

```
https://example.com
```

I then updated my domain registrar’s DNS to point to Cloudflare.

Setting up Cloudflare is really simple. You just need to create two A name records that point your domain name to GitHub’s IP Addresses `192.30.252.153` and `192.30.252.154`.

Then setup a WWW subdomain redirect by creating a CNAME record in Cloudfare that points to your domain name.

It will take awhile for your changes to take effect but your domain should now point to your Jekyll website that is hosted on GitHub pages.

## How to update your Jekyll website

Jekyll comes with a built-in development server that will watch for changes and regenerated automatically by using

{% highlight shell %}
bundle exec jekyll serve
{% endhighlight %}

When you are finished making changes, it's time to build the latest version of your jekyll website for production.

{% highlight shell %}
JEKYLL_ENV=production bundle exec jekyll build
{% endhighlight %}

TIP: As you can see above im using the `JEKYLL_ENV=production` prefix before the `bundle exec jekyll build` command to only [include Google Analytics when Jekyll is set to production]({% post_url 2016-04-21-google-analytics-jekyll %}) environment.

Check file status

{% highlight shell %}
git status
{% endhighlight %}

Add all untracked files

{% highlight shell %}
git add .
{% endhighlight %}

Commit changes

{% highlight shell %}
git commit -a -m "YOUR MESSAGE HERE"
{% endhighlight %}

Push changes to your GitHub repository

{% highlight shell %}
git push
{% endhighlight %}
Well done! Your Jekyll website is now up to date.

Did you find this tutorial helpful?
