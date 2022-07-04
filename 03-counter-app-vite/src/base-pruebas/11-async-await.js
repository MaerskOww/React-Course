export const getImagen = async () => {

    try {

        const apiKey = '3zEyoVeQRlj7SiS14V08jXmZHIrovsB9';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;
    } catch (error) {
        return 'No se encontro la imagen';
    }

};