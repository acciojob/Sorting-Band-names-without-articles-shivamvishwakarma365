const bands = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function stripArticles(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => stripArticles(a) > stripArticles(b) ? 1 : -1);

const bandsList = document.querySelector('ul');

sortedBands.forEach((band) => {
  const listItem = document.createElement('li');
  listItem.textContent = band;
  bandsList.appendChild(listItem);
});
