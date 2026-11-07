// A row of buttons that filter the library by hue.
function setupFilter() {
  var hues = ["All", "Red", "Yellow", "Green", "Blue", "Purple", "Neutral"];
  var bar = document.createElement("div");
  bar.className = "filter";
  bar.innerHTML = hues.map(function (h) {
    return '<button type="button" class="filter-btn' + (h === "All" ? " active" : "") + '" data-hue="' + h + '">' + h + '</button>';
  }).join("");

  var library = document.getElementById("library");
  library.parentNode.insertBefore(bar, library);

  bar.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    var hue = btn.getAttribute("data-hue");

    bar.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.toggle("active", b === btn);
    });

    document.querySelectorAll(".hue-group").forEach(function (section) {
      var title = section.querySelector("h2").textContent;
      section.style.display = (hue === "All" || title === hue) ? "" : "none";
    });
  });
}
