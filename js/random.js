var posts=["posts/3906.html","posts/48839.html","posts/c2cf88b8.html","posts/7474.html","posts/20930.html","posts/af59e567.html","posts/5045eba0.html","posts/27859.html","posts/34498.html","posts/6413.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};