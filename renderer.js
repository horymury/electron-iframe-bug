

const addFrame = () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://en.wikipedia.org/wiki/Main_Page';
    iframe.className = 'wiki';
    document.body.appendChild(iframe);
}

const removeIFrames = () => {
    const iframes = document.querySelectorAll('.wiki');
    iframes.forEach(iframe => {
        document.body.removeChild(iframe);
    })
}
