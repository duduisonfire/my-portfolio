export default async function homeAnimation() {
    async function animationDelay(content) {
        return await new Promise(resolve => {
            const interval = setTimeout(() => {
                let element = content;
                clearTimeout(interval);
                resolve(element);
            }, 60);
        })
    }
    
    
    async function run() {
        const welcomeText = document.querySelector('#welcome-text');
        const presentationText = document.querySelector('#presentation-text');
        let welcomeTextContent = welcomeText.innerHTML;
        let presentationTextContent = presentationText.innerHTML;
        welcomeText.innerHTML = '|';
        presentationText.innerHTML = '|'
    
        for (let value of welcomeTextContent) {
            let element = await animationDelay(value);
            welcomeText.innerHTML += element;
        }
    
        for (let value of presentationTextContent) {
            let element = await animationDelay(value);
            presentationText.innerHTML += element;
        }
    }
    
    run();
}