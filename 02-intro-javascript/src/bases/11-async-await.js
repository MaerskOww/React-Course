const getImagen = async () => {
    try {
        const apiKey = '3zEyoVeQRlj7SiS14V08jXmZHIrovsB9';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (err) {
        console.error(err);
    }
}

getImagen();