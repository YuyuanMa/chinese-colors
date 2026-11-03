// Chinese traditional colours — each entry: name, pinyin, hex, a one-line note, and hue.
// The Chinese characters in `name` are the subject of the site (the colour names themselves).
const COLORS = [
  { name: "朱砂", pinyin: "zhūshā", hex: "#FF461F", note: "cinnabar, the vermilion ore used for seals and pigment", hue: "Red" },
  { name: "胭脂", pinyin: "yānzhī", hex: "#9D2933", note: "rouge, the deep red worn on the cheeks", hue: "Red" },
  { name: "银朱", pinyin: "yínzhū", hex: "#E34D59", note: "a red brighter than cinnabar", hue: "Red" },
  { name: "枣红", pinyin: "zǎohóng", hex: "#7C1823", note: "the deep red of a ripe jujube", hue: "Red" },
  { name: "鹅黄", pinyin: "éhuáng", hex: "#FFF143", note: "the soft yellow of a newborn gosling", hue: "Yellow" },
  { name: "藤黄", pinyin: "ténghuáng", hex: "#FFBF37", note: "a yellow pigment boiled from a vine", hue: "Yellow" },
  { name: "秋香", pinyin: "qiūxiāng", hex: "#D9B611", note: "the fragrant gold of autumn grain", hue: "Yellow" },
  { name: "竹青", pinyin: "zhúqīng", hex: "#789262", note: "the grey-green of a bamboo stalk", hue: "Green" },
  { name: "石绿", pinyin: "shílǜ", hex: "#57C3C2", note: "a pigment ground from malachite", hue: "Green" },
  { name: "豆绿", pinyin: "dòulǜ", hex: "#A7C080", note: "the green of a tender bean pod", hue: "Green" },
  { name: "黛蓝", pinyin: "dàilán", hex: "#4A4266", note: "the blue-black used to paint eyebrows", hue: "Blue" },
  { name: "月白", pinyin: "yuèbái", hex: "#D6ECF0", note: "the cool white of moonlight", hue: "Blue" },
  { name: "天青", pinyin: "tiānqīng", hex: "#B0D8E0", note: "the blue of a sky just after rain", hue: "Blue" },
  { name: "靛青", pinyin: "diànqīng", hex: "#177CB0", note: "indigo dyed from the indigo plant", hue: "Blue" },
  { name: "藕荷", pinyin: "ǒuhé", hex: "#E4C6D0", note: "the grey-purple of lotus root and flower", hue: "Purple" },
  { name: "丁香", pinyin: "dīngxiāng", hex: "#CCA4E3", note: "the pale purple of a lilac blossom", hue: "Purple" },
  { name: "墨色", pinyin: "mòsè", hex: "#161823", note: "the colour of ink", hue: "Neutral" },
  { name: "玄", pinyin: "xuán", hex: "#3E3A39", note: "black with a hint of red", hue: "Neutral" },
  { name: "素", pinyin: "sù", hex: "#F5F2E9", note: "undyed, the white of raw silk and paper", hue: "Neutral" },
];

// Build the HTML for one colour card. `withNote` adds the English description.
function swatchHTML(c, withNote) {
  var note = withNote ? '<div class="note">' + c.note + '</div>' : '';
  return (
    '<div class="swatch">' +
    '<div class="chip" style="background:' + c.hex + '"></div>' +
    '<div class="meta">' +
    '<div class="name">' + c.name + '</div>' +
    '<div class="pinyin">' + c.pinyin + ' &middot; ' + c.hue + '</div>' +
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

// Library page: every colour, with its description.
function renderLibrary(el) {
  el.innerHTML = COLORS.map(function (c) { return swatchHTML(c, true); }).join("");
}
