// Featured colour stories — where the names come from, and what they meant.
const STORIES = [
  {
    name: "朱砂", pinyin: "zhūshā", hex: "#FF461F",
    story: "Cinnabar is the mineral mercury sulphide, a bright red that has been mined in China for over two thousand years. It was ground into the red paste pressed onto seals and stamps — the mark of a name, a title, a decision. Emperors and officials sealed their decrees in cinnabar, so the colour came to mean authority, permanence, and the written sign itself. In traditional architecture, pillars and gates were painted cinnabar red to mark importance. Even today, the red seal on a document or a painting carries that ancient weight."
  },
  {
    name: "黛蓝", pinyin: "dàilán", hex: "#4A4266",
    story: "黛 (dài) was the blue-black pigment used to paint eyebrows in ancient China — women ground the mineral and drew fine, dark brows, and the colour was named after the painted brow itself. It is a deep, calm blue-black, like distant hills at dusk. The phrase 眉黛 (eyebrow-黛) appears throughout classical poetry as an image of feminine beauty. Over time the word widened from a cosmetic to a colour in its own right, used for clothing, ink, and landscape painting."
  },
  {
    name: "月白", pinyin: "yuèbái", hex: "#D6ECF0",
    story: "Moon white is not pure white. It is the faint blue-tinged white of moonlight — a cool, soft light that falls on water, silk, and quiet courtyards. In classical poetry, 月白 describes the moon's glow, a light that is bright but never harsh. Because it is the colour of night rather than day, moon white carries a sense of stillness and distance. Silk dyed in this pale blue-white was worn for quiet, elegant occasions rather than festive ones."
  },
  {
    name: "竹青", pinyin: "zhúqīng", hex: "#789262",
    story: "Bamboo green is the grey-green of a bamboo stalk — quiet, a little muted, never loud. In Chinese culture bamboo stood for resilience and integrity: it bends in the wind but does not break, and it stays green through the winter. Scholars and painters kept bamboo in their studies as a reminder of these virtues, and painted it endlessly. So the colour bamboo green carried that quiet strength, becoming the colour of the modest, principled life."
  }
];

// Render the stories into the given element.
function renderStories(el) {
  el.innerHTML = STORIES.map(function (s) {
    return (
      '<article class="story">' +
      '<div class="story-swatch" style="background:' + s.hex + '"></div>' +
      '<div class="story-body">' +
      '<h2>' + s.name + ' <span class="pinyin">' + s.pinyin + '</span></h2>' +
      '<div class="hex">' + s.hex + '</div>' +
      '<p>' + s.story + '</p>' +
      '</div>' +
      '</article>'
    );
  }).join("");
}
