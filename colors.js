// 中国传统色 —— 颜色数据。每一条：名字、拼音、色值、一句话、色系。
const COLORS = [
  { name: "朱砂", pinyin: "zhūshā", hex: "#FF461F", note: "印泥与颜料用的朱红矿石", hue: "红" },
  { name: "胭脂", pinyin: "yānzhī", hex: "#9D2933", note: "女子涂脸的胭脂红", hue: "红" },
  { name: "银朱", pinyin: "yínzhū", hex: "#E34D59", note: "比朱砂更亮的一种红", hue: "红" },
  { name: "枣红", pinyin: "zǎohóng", hex: "#7C1823", note: "熟红枣的深红", hue: "红" },
  { name: "鹅黄", pinyin: "éhuáng", hex: "#FFF143", note: "初生小鹅的嫩黄", hue: "黄" },
  { name: "藤黄", pinyin: "ténghuáng", hex: "#FFBF37", note: "藤本植物熬出的黄颜料", hue: "黄" },
  { name: "秋香", pinyin: "qiūxiāng", hex: "#D9B611", note: "秋天稻谷的香色", hue: "黄" },
  { name: "竹青", pinyin: "zhúqīng", hex: "#789262", note: "竹子表面的青绿", hue: "绿" },
  { name: "石绿", pinyin: "shílǜ", hex: "#57C3C2", note: "孔雀石磨出的颜料", hue: "绿" },
  { name: "豆绿", pinyin: "dòulǜ", hex: "#A7C080", note: "嫩豆荚的绿", hue: "绿" },
  { name: "黛蓝", pinyin: "dàilán", hex: "#4A4266", note: "画眉的青黑色", hue: "蓝" },
  { name: "月白", pinyin: "yuèbái", hex: "#D6ECF0", note: "月光般的冷白", hue: "蓝" },
  { name: "天青", pinyin: "tiānqīng", hex: "#B0D8E0", note: "雨过天青的颜色", hue: "蓝" },
  { name: "靛青", pinyin: "diànqīng", hex: "#177CB0", note: "蓝草染出的靛蓝", hue: "蓝" },
  { name: "藕荷", pinyin: "ǒuhé", hex: "#E4C6D0", note: "藕与荷花的灰紫粉", hue: "紫" },
  { name: "丁香", pinyin: "dīngxiāng", hex: "#CCA4E3", note: "丁香花的浅紫", hue: "紫" },
  { name: "墨色", pinyin: "mòsè", hex: "#161823", note: "墨的颜色", hue: "中性" },
  { name: "玄", pinyin: "xuán", hex: "#3E3A39", note: "黑中带赤", hue: "中性" },
  { name: "素", pinyin: "sù", hex: "#F5F2E9", note: "未经染色的宣纸白", hue: "中性" },
];

// 把一个颜色数组渲染成色板墙，填进给定元素。
function renderWall(el) {
  el.innerHTML = COLORS.map(function (c) {
    return (
      '<div class="swatch">' +
      '<div class="chip" style="background:' + c.hex + '"></div>' +
      '<div class="meta">' +
      '<div class="name">' + c.name + '</div>' +
      '<div class="pinyin">' + c.pinyin + ' · ' + c.hue + '</div>' +
      '<div class="hex">' + c.hex + '</div>' +
      '</div>' +
      '</div>'
    );
  }).join("");
}
