const image = document.querySelector('img');

fetch('callback.png').then(response => {
    return response.blob();
}).then(function (blob) {
    let imageURL = URL.createObjectURL(blob);
    image.src = imageURL;
});
