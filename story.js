// Featured colour stories — where the names come from.
const STORIES = [
  {
    name: "朱砂", pinyin: "zhūshā", hex: "#FF461F",
    story: "Cinnabar is the mineral mercury sulphide. For centuries it was ground into the red paste pressed onto seals and stamps — the mark of a name, a title, a decision. So cinnabar became the colour of authority and of the written sign."
  },
  {
    name: "黛蓝", pinyin: "dàilán", hex: "#4A4266",
    story: "黛 (dài) was the blue-black pigment used to paint eyebrows. The colour is named after the painted brow itself — a deep, calm blue-black, the colour of distant hills at dusk."
  },
  {
    name: "月白", pinyin: "yuèbái", hex: "#D6ECF0",
    story: "Moon white is not pure white. It is the faint blue-tinged white of moonlight — a cool, soft light that falls on water and silk."
  },
  {
    name: "竹青", pinyin: "zhúqīng", hex: "#789262",
    story: "Bamboo green is the grey-green of a bamboo stalk — quiet, a little muted. Bamboo stood for resilience and integrity in Chinese culture, so its colour carried that quiet strength."
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
