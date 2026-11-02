// 注入共享导航与页脚（需要 http:// 才能 fetch）
fetch("nav.html").then(function (r) { return r.text(); }).then(function (html) {
  document.getElementById("site-header").innerHTML = html;
});
fetch("footer.html").then(function (r) { return r.text(); }).then(function (html) {
  document.getElementById("site-footer").innerHTML = html;
});
