// Ten more colours, appended to the main palette.
const EXTRA_COLORS = [
  { name: "绯红", english: "Crimson", pinyin: "fēihóng", hex: "#D9322C", note: "a bright light red", hue: "Red" },
  { name: "茜色", english: "Madder", pinyin: "qiànsè", hex: "#B22C46", note: "a red dyed from the madder root", hue: "Red" },
  { name: "缃色", english: "Pale Silk", pinyin: "xiāngsè", hex: "#F0C239", note: "the pale yellow of a book's silk wrapper", hue: "Yellow" },
  { name: "琥珀", english: "Amber", pinyin: "hǔpò", hex: "#CA6924", note: "the golden brown of fossil resin", hue: "Yellow" },
  { name: "松花", english: "Pine Pollen", pinyin: "sōnghuā", hex: "#BDD07C", note: "the yellow-green of pine pollen", hue: "Green" },
  { name: "青碧", english: "Jade", pinyin: "qīngbì", hex: "#48C0A3", note: "a blue-green, the colour of jade", hue: "Green" },
  { name: "藏青", english: "Navy", pinyin: "zàngqīng", hex: "#2E4E7E", note: "deep blue, like a mountain dusk", hue: "Blue" },
  { name: "群青", english: "Ultramarine", pinyin: "qúnqīng", hex: "#4C8DAE", note: "once made from lapis lazuli", hue: "Blue" },
  { name: "青莲", english: "Blue Lotus", pinyin: "qīnglián", hex: "#884898", note: "the purple of a blue lotus", hue: "Purple" },
  { name: "茶色", english: "Tea", pinyin: "chásè", hex: "#B35C44", note: "the brown of steeped leaves", hue: "Neutral" }
];

// Append the extra colours to the main palette.
EXTRA_COLORS.forEach(function (c) { COLORS.push(c); });
