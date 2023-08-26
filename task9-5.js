const button = document.querySelector('button');
const value_1 = document.querySelector('.page');
const value_2 = document.querySelector('.limit');
const photos = document.querySelector('div');
const outputSpan = document.querySelector("span");

button.addEventListener('click', () => {
    const page = value_1.value;
    const limit = value_2.value;

    if(page<1 || page>10 || isNaN(page)) {
        write('Номер страницы вне диапазона от 1 до 10');
        return
    } else if(limit<1 || limit>10 || isNaN(limit)) {
        write('Лимит вне диапазона от 1 до 10');
        return
    } else if((page<1 || page>10 || isNaN(page)) && (limit<1 || limit>10 || isNaN(limit))) {
        write('Номер страницы и лимит вне диапазона от 1 до 10')
    } else {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then((response) => {response.url})
            .then((result) => {loadPhoto(result)})
            .catch((reason) => {write("Error " + reason)})
    }       
});

function loadPhoto(photoUrl) {
    const cardBlock =   `<img
                         src="${photoUrl}"/>`;

    photos.innerHTML = cardBlock;
};
function write(text) {
    outputSpan.innerHTML = text;
};

localStorage.setItem('lastPhoto', photos.innerHTML);
localStorage.getItem('lastPhoto');