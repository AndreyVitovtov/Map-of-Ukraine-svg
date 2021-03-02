class Map {
    init() {
        this.map = document.getElementById('map');
        this.title = this.map.getElementsByClassName('title')[0];
        this.bindEvent();

        let regions = this.map.getElementsByClassName('region');
        for (let r of regions) {
            console.log(r.id);
        }
    }

    bindEvent() {
        this.map.addEventListener('mousemove', e => {
            let x = e.clientX;
            let y = e.clientY;

            let target = e.target;
            let parent = target.parentElement;
            if (parent.classList.contains('region')) {
                this.title.innerText = parent.id;
                this.title.style.display = 'block';
                this.title.style.left = x + 15 + 'px';
                this.title.style.top = y + 15 + 'px';
            } else {
                this.title.innerHtml = '';
                this.title.style.display = 'none';
            }
        });
    }
}

window.addEventListener('load', () => {
    let map = new Map;
    map.init();
});

