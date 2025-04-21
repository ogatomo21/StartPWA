document.addEventListener('DOMContentLoaded', () => {
    const url = document.getElementById('url');
    const go = document.getElementById('go');
    
    const goURL = () => {
        const getURL = url.value;
        if(getURL !== '') {
            if(getURL.startsWith('http://') || getURL.startsWith('https://')) {
                window.location.href = getURL;
            }else{
                window.location.href = 'http://' + getURL;
            }
        }else{
            window.location.reload();
        }
    }

    go.addEventListener('click', goURL);
    url.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            goURL();
        }
    });
})
