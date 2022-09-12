export default function popMenubar() {
    const popMenu = document.querySelector('.sm-menu');
    const body = document.querySelector('body');
    let controller = 0;

document.addEventListener('click', e => {
    if (e.target.id === 'sm-menu') {
        if (controller === 0) {
            let header = document.querySelector('#header')
            let div = document.createElement('div');
            div.classList.add('md:hidden', 'menu-on','flex', 'justify-center', 'absolute', 'bg-white', 'w-30', 
                              'rounded-md', 'm-1', 'border-solid', 'border-2', 'border-black', 'm-0', 'z-40', 'right-0');
            div.innerHTML = `<ul><li class="my-2 px-4"><a href="./" class="hover:text-purple-800 text-sm">Home</a></li>
                            <li class="my-2 px-4"><a href="./about.html" class="hover:text-purple-800 text-sm">About</a></li>
                            <li class="my-2 px-4"><a href="./projects.html" class="hover:text-purple-800 text-sm">Projects</a></li></ul>`;
            header.appendChild(div);
            controller++;
        } else {
            const menu = document.querySelector('.menu-on');
            menu.remove();
            controller--;
        }
    }

    if (controller === 1 && e.target.id !== 'sm-menu') {
        const menu = document.querySelector('.menu-on');
        menu.remove();
        controller--;
    }
});
}