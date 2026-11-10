// Ten more colours, appended to the main palette.
const EXTRA_COLORS = [
  { name: "绯红", english: "Crimson", pinyin: "fēihóng", hex: "#D9322C", note: "a bright light red", symbolism: "Fēi is the colour of blushing — a light, bright red of shyness and spring. The word lives on in 'fēiwén', modern Chinese for gossip.", hue: "Red" },
  { name: "茜色", english: "Madder", pinyin: "qiànsè", hex: "#B22C46", note: "a red dyed from the madder root", symbolism: "Madder is a dye plant whose root gives a soft, deep red. It was one of the oldest plant dyes in China — the red of ordinary cloth.", hue: "Red" },
  { name: "缃色", english: "Pale Silk", pinyin: "xiāngsè", hex: "#F0C239", note: "the pale yellow of a book's silk wrapper", symbolism: "The pale yellow of a book's silk wrapper — quiet, scholarly, the colour of old paper and gentle learning.", hue: "Yellow" },
  { name: "琥珀", english: "Amber", pinyin: "hǔpò", hex: "#CA6924", note: "the golden brown of fossil resin", symbolism: "Fossil resin, golden and warm. Amber was prized as a jewel; its colour meant warmth, age, and preserved light.", hue: "Yellow" },
  { name: "松花", english: "Pine Pollen", pinyin: "sōnghuā", hex: "#BDD07C", note: "the yellow-green of pine pollen", symbolism: "The yellow-green dust of pine pollen in spring — a fleeting colour, seen for only a few days each year.", hue: "Green" },
  { name: "青碧", english: "Jade", pinyin: "qīngbì", hex: "#48C0A3", note: "a blue-green, the colour of jade", symbolism: "Jade's blue-green, the colour of the stone once valued above gold. It meant purity, dignity, and eternity.", hue: "Green" },
  { name: "藏青", english: "Navy", pinyin: "zàngqīng", hex: "#2E4E7E", note: "deep blue, like a mountain dusk", symbolism: "A deep, serious blue, the colour of the sea at dusk or the robes of old officials. Navy meant restraint and depth.", hue: "Blue" },
  { name: "群青", english: "Ultramarine", pinyin: "qúnqīng", hex: "#4C8DAE", note: "once made from lapis lazuli", symbolism: "Once made from ground lapis lazuli, more precious than gold. Ultramarine was reserved for the most sacred parts of a painting.", hue: "Blue" },
  { name: "青莲", english: "Blue Lotus", pinyin: "qīnglián", hex: "#884898", note: "the purple of a blue lotus", symbolism: "The purple of the blue lotus, a flower said to rise pure from mud. A colour of spiritual calm.", hue: "Purple" },
  { name: "茶色", english: "Tea", pinyin: "chásè", hex: "#B35C44", note: "the brown of steeped leaves", symbolism: "The brown of steeped tea leaves — warm, humble, the colour of an ordinary daily ritual.", hue: "Neutral" }
];

// Append the extra colours to the main palette.
EXTRA_COLORS.forEach(function (c) { COLORS.push(c); });
