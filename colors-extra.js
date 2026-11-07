// Ten more colours, appended to the main palette.
const EXTRA_COLORS = [
  { name: "绯红", pinyin: "fēihóng", hex: "#D9322C", note: "crimson, a bright light red", hue: "Red" },
  { name: "茜色", pinyin: "qiànsè", hex: "#B22C46", note: "a red dyed from the madder root", hue: "Red" },
  { name: "缃色", pinyin: "xiāngsè", hex: "#F0C239", note: "a pale yellow, the colour of a book's silk wrapper", hue: "Yellow" },
  { name: "琥珀", pinyin: "hǔpò", hex: "#CA6924", note: "amber, the golden brown of fossil resin", hue: "Yellow" },
  { name: "松花", pinyin: "sōnghuā", hex: "#BDD07C", note: "the yellow-green of pine pollen", hue: "Green" },
  { name: "青碧", pinyin: "qīngbì", hex: "#48C0A3", note: "a blue-green, the colour of jade", hue: "Green" },
  { name: "藏青", pinyin: "zàngqīng", hex: "#2E4E7E", note: "navy blue, deep as a mountain dusk", hue: "Blue" },
  { name: "群青", pinyin: "qúnqīng", hex: "#4C8DAE", note: "ultramarine, once made from lapis lazuli", hue: "Blue" },
  { name: "青莲", pinyin: "qīnglián", hex: "#884898", note: "the purple of a blue lotus", hue: "Purple" },
  { name: "茶色", pinyin: "chásè", hex: "#B35C44", note: "tea, the brown of steeped leaves", hue: "Neutral" }
];

// Append the extra colours to the main palette.
EXTRA_COLORS.forEach(function (c) { COLORS.push(c); });
