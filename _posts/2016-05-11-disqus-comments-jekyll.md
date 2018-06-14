---
layout: post
title: How to add Disqus comments to Jekyll
description: Adding Disqus comments to your Jekyll static website is easy. I will show you step by step if you give me a few minutes of your time.
date: 2016-05-11 22:30:00
last_modified_at: 2017-08-14 05:00:00
author: desired persona
category: Jekyll
tags: 
  - Disqus comments
---

I recently added Disqus to my Jekyll powered website. This guide will keep the code clutter free and as reusable as possible.

Open `config.yml` and add the following code. Remember to change `my_disqus_shortname` to your own Disqus shortname.

```yaml
# Disqus Comments
disqus:
    # Leave shortname blank to disable comments site-wide.
    # Disable comments for any post by adding `comments: false` to that post's YAML Front Matter.
    shortname: my_disqus_shortname
```

Create a file called `disqus_comments.html` in Jekyll’s `_includes` folder and add the following code and save the file.

{% highlight liquid %}
{% raw %}{% if page.comments != false and jekyll.environment == "production" %}{% endraw %}

  <div id="disqus_thread"></div>
  <script>
    var disqus_config = function () {
      this.page.url = '{% raw %}{{ page.url | absolute_url }}{% endraw %}';
      this.page.identifier = '{% raw %}{{ page.url | absolute_url }}{% endraw %}';
    };
    (function() {
      var d = document, s = d.createElement('script');
      s.src = 'https://{% raw %}{{ site.disqus.shortname }}{% endraw %}.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  </script>
  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
{% raw %}{% endif %}{% endraw %}
{% endhighlight %}

The above codeblock includes your [ Disqus Universal Embed Code](https://disqus.com/admin/universalcode/){:target="_blank"}. You may have noticed that i wrapped the code between `{% raw %}{% if page.comments != false and jekyll.environment == "production" %}{% endraw %}` and `{% raw %}{% endif %}{% endraw %}` liquid if statement. This included if statement will allow you to disable Disqus comments on any blog post. You simply add `comments: false` in that posts YAML front-matter. As an added bonus it will also prevent Disqus loading when Jekyll's environment is set to development.

Finally, open your posts layout file normally called `post.html` which is located in your `_includes` folder and add the following liquid include tag just after the end `</article>` tag. This will load Disqus comments right underneath your blog posts when Jekyll's environment is set to production.

```liquid
{% raw %}{% if site.disqus.shortname %}
  {% include disqus_comments.html %}
{% endif %}{% endraw %}
```

To build your Jekyll site in production environment use the following command.

{% highlight shell %}
JEKYLL_ENV=production bundle exec jekyll build
{% endhighlight %}

Done!

Disqus comments should now be working correctly.

Let me know in the comments if you found this tutorial helpful?
