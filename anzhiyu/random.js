var posts=["2024/10/28/My-New-Post/","2024/10/28/hello-world/","2024/10/28/mybatis笔记/","2024/10/28/jdbc 笔记/","2024/10/28/mysql概念笔记/","2024/10/28/Java基础笔记_4_20/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };