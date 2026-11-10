// Colour detail modal — click any swatch to see its full details.

function hexToRgb(hex) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function buildModal() {
  var backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.id = "color-modal";
  backdrop.innerHTML =
    '<div class="modal" role="dialog" aria-modal="true">' +
    '<button type="button" class="modal-close" aria-label="Close">&times;</button>' +
    '<div class="modal-swatch" id="modal-swatch"></div>' +
    '<h2 id="modal-name"></h2>' +
    '<div class="modal-english" id="modal-english"></div>' +
    '<div class="modal-pinyin" id="modal-pinyin"></div>' +
    '<div class="modal-hex" id="modal-hex"></div>' +
    '<div class="modal-rgb" id="modal-rgb"></div>' +
    '<p class="modal-note" id="modal-note"></p>' +
    '<p class="modal-symbolism" id="modal-symbolism"></p>' +
    '<button type="button" class="modal-copy" id="modal-copy">Copy hex</button>' +
    '</div>';
  document.body.appendChild(backdrop);

  backdrop.addEventListener("click", function (e) {
    if (e.target === backdrop || e.target.className === "modal-close") {
      backdrop.classList.remove("open");
    }
  });

  document.getElementById("modal-copy").addEventListener("click", function () {
    var hex = document.getElementById("modal-hex").textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(hex);
    }
    var btn = this;
    btn.textContent = "Copied!";
    setTimeout(function () { btn.textContent = "Copy hex"; }, 1200);
  });

  return backdrop;
}

function showDetail(hex) {
  var color = COLORS.filter(function (c) { return c.hex.toLowerCase() === hex.toLowerCase(); })[0];
  if (!color) return;
  var backdrop = document.getElementById("color-modal") || buildModal();
  document.getElementById("modal-swatch").style.background = color.hex;
  document.getElementById("modal-name").textContent = color.name;
  document.getElementById("modal-english").textContent = color.english;
  document.getElementById("modal-pinyin").textContent = color.pinyin;
  document.getElementById("modal-hex").textContent = color.hex;
  document.getElementById("modal-rgb").textContent = hexToRgb(color.hex);
  document.getElementById("modal-note").textContent = color.note;
  document.getElementById("modal-symbolism").textContent = color.symbolism;
  backdrop.classList.add("open");
}

document.addEventListener("click", function (e) {
  var swatch = e.target.closest(".swatch");
  if (swatch && swatch.getAttribute("data-hex")) {
    showDetail(swatch.getAttribute("data-hex"));
  }
});
