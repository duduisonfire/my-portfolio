export default function loadPage() {
    async function loadPage(element) {
        const href = element.getAttribute('href');
        const response = await fetch(href);
        if (response.status >= 200 && response.status < 300){
            const html = await response.text();
            let resultado = document.querySelector('#main-section');
            resultado.innerHTML = html;
        } else {
            throw new Error('Erro 404!')
        }
    }
    
    const header = document.querySelector('#header');
    header.addEventListener('click', e => {
        let element = e.target;
        let tag = element.tagName.toLowerCase();
        if (tag === 'a' && element.text !== 'Home') {
            e.preventDefault();
            loadPage(element);
        }
    })

    header.addEventListener('contextmenu', e => {
        let element = e.target;
        let tag = element.tagName.toLowerCase();
        if (tag === 'a' && element.text !== 'Home') {
            e.preventDefault();
            loadPage(element);
        }
    })
}