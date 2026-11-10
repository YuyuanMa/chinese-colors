// Chinese traditional colours — each entry: name, English name, pinyin, hex, a short note, and its cultural meaning.
// The Chinese characters in `name` are the subject of the site (the colour names themselves).
const COLORS = [
  { name: "朱砂", english: "Cinnabar", pinyin: "zhūshā", hex: "#FF461F", note: "the vermilion ore used for seals and pigment", symbolism: "Cinnabar was the colour of authority — seals stamped in cinnabar carried a name, a title, a decision. Red seals on documents and paintings still echo that old weight.", hue: "Red" },
  { name: "胭脂", english: "Rouge", pinyin: "yānzhī", hex: "#9D2933", note: "the deep red worn on the cheeks", symbolism: "Rouge was the colour of a woman's cheeks — beauty, courtship, the painted face. It carried a softness that cinnabar, the colour of power, never had.", hue: "Red" },
  { name: "银朱", english: "Silver Red", pinyin: "yínzhū", hex: "#E34D59", note: "a red brighter than cinnabar", symbolism: "A brighter, lighter red than cinnabar, used for detail and decoration. It kept red's festive energy without cinnabar's solemn weight.", hue: "Red" },
  { name: "枣红", english: "Jujube Red", pinyin: "zǎohóng", hex: "#7C1823", note: "the deep red of a ripe jujube", symbolism: "The deep red of ripe jujubes, warm and earthy. It was a colour of harvest, of autumn ripeness, and of old, well-worn things.", hue: "Red" },
  { name: "鹅黄", english: "Gosling Yellow", pinyin: "éhuáng", hex: "#FFF143", note: "the soft yellow of a newborn gosling", symbolism: "The soft down of a newborn gosling — tender, fragile, full of spring. It is a colour of beginnings.", hue: "Yellow" },
  { name: "藤黄", english: "Gamboge", pinyin: "ténghuáng", hex: "#FFBF37", note: "a yellow pigment boiled from a vine", symbolism: "A yellow pigment boiled from the resin of a vine, prized by painters. It gave a warm, transparent yellow to silk paintings.", hue: "Yellow" },
  { name: "秋香", english: "Autumn Gold", pinyin: "qiūxiāng", hex: "#D9B611", note: "the fragrant gold of autumn grain", symbolism: "The gold of ripening grain in autumn — a colour of harvest and contentment, named for the season's scent.", hue: "Yellow" },
  { name: "竹青", english: "Bamboo Green", pinyin: "zhúqīng", hex: "#789262", note: "the grey-green of a bamboo stalk", symbolism: "Bamboo stood for resilience and integrity — it bends but does not break. Its grey-green carried that quiet strength.", hue: "Green" },
  { name: "石绿", english: "Malachite Green", pinyin: "shílǜ", hex: "#57C3C2", note: "a pigment ground from malachite", symbolism: "Ground from malachite, a mineral pigment used in murals and painting for centuries. A cool, mineral green that survives the ages.", hue: "Green" },
  { name: "豆绿", english: "Bean Green", pinyin: "dòulǜ", hex: "#A7C080", note: "the green of a tender bean pod", symbolism: "The green of tender bean pods — fresh, young, a little pale. A colour of early summer and new growth.", hue: "Green" },
  { name: "黛蓝", english: "Indigo Blue", pinyin: "dàilán", hex: "#4A4266", note: "the blue-black used to paint eyebrows", symbolism: "黛 was the blue-black used to paint eyebrows. The colour is named after the painted brow — deep, calm, the colour of distant hills at dusk.", hue: "Blue" },
  { name: "月白", english: "Moon White", pinyin: "yuèbái", hex: "#D6ECF0", note: "the cool white of moonlight", symbolism: "Not pure white, but the faint blue-white of moonlight. In poetry it is the colour of the moon's glow on water and silk.", hue: "Blue" },
  { name: "天青", english: "Sky After Rain", pinyin: "tiānqīng", hex: "#B0D8E0", note: "the blue of a sky just after rain", symbolism: "The blue of a sky just after rain has washed it clean — a colour so prized that '雨过天青' became the name of a famous porcelain glaze.", hue: "Blue" },
  { name: "靛青", english: "Indigo", pinyin: "diànqīng", hex: "#177CB0", note: "indigo dyed from the indigo plant", symbolism: "Dyed from the indigo plant, the blue of common cloth. It is the deep blue of work clothes and of indigo-dyed country fabrics.", hue: "Blue" },
  { name: "藕荷", english: "Lotus Root", pinyin: "ǒuhé", hex: "#E4C6D0", note: "the grey-purple of lotus root and flower", symbolism: "The grey-pink of lotus root and flower — soft, muted, a little dusty. A gentle colour of water and summer ponds.", hue: "Purple" },
  { name: "丁香", english: "Lilac", pinyin: "dīngxiāng", hex: "#CCA4E3", note: "the pale purple of a lilac blossom", symbolism: "The pale purple of lilac blossoms — a colour of late spring, delicate and fleeting.", hue: "Purple" },
  { name: "墨色", english: "Ink", pinyin: "mòsè", hex: "#161823", note: "the colour of ink", symbolism: "The colour of ink — the medium of writing and painting itself. Ink black is the colour of thought made visible.", hue: "Neutral" },
  { name: "玄", english: "Red-Tinged Black", pinyin: "xuán", hex: "#3E3A39", note: "black with a hint of red", symbolism: "玄 is black with a hint of red — the colour of the deep sky before dawn, of mystery and the beginning of things.", hue: "Neutral" },
  { name: "素", english: "Undyed Silk", pinyin: "sù", hex: "#F5F2E9", note: "undyed, the white of raw silk and paper", symbolism: "Undyed, unbleached cloth — the natural white of raw silk and paper. 素 meant plainness, honesty, the unadorned.", hue: "Neutral" },
];

// Build the HTML for one colour card. `withNote` adds the English description.
function swatchHTML(c, withNote) {
  var note = withNote ? '<div class="note">' + c.note + '</div>' : '';
  return (
    '<div class="swatch" data-hex="' + c.hex + '" title="Click to see details">' +
    '<div class="chip" style="background:' + c.hex + '"></div>' +
    '<div class="meta">' +
    '<div class="name">' + c.name + '</div>' +
    '<div class="english">' + c.english + '</div>' +
    '<div class="pinyin">' + c.pinyin + '</div>' +
    '<div class="hex">' + c.hex + '</div>' +
    note +
    '</div>' +
    '</div>'
  );
}

// Homepage: a flat wall of every colour.
function renderWall(el) {
  el.innerHTML = COLORS.map(function (c) { return swatchHTML(c, false); }).join("");
}

// Library page: group the colours by hue, one section per hue.
function renderLibrary(el) {
  var hues = ["Red", "Yellow", "Green", "Blue", "Purple", "Neutral"];
  el.innerHTML = hues.map(function (hue) {
    var group = COLORS.filter(function (c) { return c.hue === hue; });
    return (
      '<section class="hue-group">' +
      '<h2>' + hue + '</h2>' +
      '<div class="wall">' +
      group.map(function (c) { return swatchHTML(c, true); }).join("") +
      '</div>' +
      '</section>'
    );
  }).join("");
}

// Copy a hex value to the clipboard, then flash a "Copied" state on the swatch.
function copyHex(hex, swatchEl) {
  function fallback() {
    var ta = document.createElement("textarea");
    ta.value = hex;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(hex).catch(fallback);
  } else {
    fallback();
  }
  swatchEl.classList.add("copied");
  setTimeout(function () { swatchEl.classList.remove("copied"); }, 1200);
}

// Delegate one click handler over a container of swatches.
function enableCopy(el) {
  el.addEventListener("click", function (e) {
    var swatch = e.target.closest(".swatch");
    if (swatch) copyHex(swatch.getAttribute("data-hex"), swatch);
  });
}
