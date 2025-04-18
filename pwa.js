document.addEventListener('DOMContentLoaded', () => {
    const url = document.getElementById('url');
    const go = document.getElementById('go');
    
    const goURL = () => {
        const getURL = url.value;
        if(getURL !== '') {
            window.location.href = getURL;
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
