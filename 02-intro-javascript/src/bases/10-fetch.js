//URL: https://developer.mozilla.org/es/docs/Web/API/Fetch_API
//Free API: https://developers.giphy.com/

const apiKey = '3zEyoVeQRlj7SiS14V08jXmZHIrovsB9';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(r => r.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);