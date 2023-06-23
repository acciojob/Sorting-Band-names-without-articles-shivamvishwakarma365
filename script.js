const bandNames = [
  'The Rolling Stones',
  'Pink Floyd',
  'Led Zeppelin',
  'The Beatles',
  'Nirvana',
  'Red Hot Chili Peppers',
  'The Who',
];

function stripArticle(name) {
  const articles = ['a', 'an', 'the'];
  const words = name.split(' ');
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }
  return words.join(' ');
}

const sortedBandNames = bandNames.sort((a, b) => {
  const bandA = stripArticle(a);
  const bandB = stripArticle(b);
  return bandA.localeCompare(bandB);
});

const ul = document.querySelector('#bands');

sortedBandNames.forEach((band) => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
