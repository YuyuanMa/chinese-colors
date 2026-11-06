// Load the sources and render them as a list.
fetch("sources.json")
  .then(function (r) { return r.json(); })
  .then(function (sources) {
    document.getElementById("sources").innerHTML = sources.map(function (s) {
      return (
        '<li>' +
        '<strong>' + s.title + '</strong>' +
        (s.author ? ' &mdash; ' + s.author : '') +
        (s.note ? '<br><span class="note">' + s.note + '</span>' : '') +
        '</li>'
      );
    }).join("");
  })
  .catch(function () {
    document.getElementById("sources").innerHTML = '<li>Sources could not be loaded.</li>';
  });
