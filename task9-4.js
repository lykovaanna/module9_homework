const button = document.querySelector('button');
const value_1 = document.querySelector('.width');
const value_2 = document.querySelector('.height');
const photos = document.querySelector('div');
const outputSpan = document.querySelector("span");

button.addEventListener('click', () => {
    const width = value_1.value;
    const height = value_2.value;

    if ((width<100 || width>300 || isNaN(width)) || (height<100 || height>300 || isNaN(height))) {
        write('одно из чисел вне диапазона от 100 до 300');
      return
    } 
  write('Loading')
  
   fetch(`https://picsum.photos/${width}/${height}`) 
        .then((response) => {response.url})
        .then((result) => {loadPhoto(result)})
        .catch((reason) => {write("Error " + reason)})
});

function loadPhoto(photoUrl) {
    const cardBlock =   `<img
                         src="${photoUrl}"/>`;

    photos.innerHTML = cardBlock;
};
function write(text) {
    outputSpan.innerHTML = text;
}