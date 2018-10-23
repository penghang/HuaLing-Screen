const ACTIVE = 'active'
/**
 * 动画方式
 */
const ANITATION_TYPE = 'slide'
const IN = 'in'
const OUT = 'out'
const PAGE_COUNT = 5
let current = 0
let playing = false

/**
 * 滚屏动画
 * @param {HTMLElement} from - 当前页
 * @param {HTMLElement} to - 目标页
 * @param {Boolean} isReverse - 是否反向
 */
const animate = function (from, to, isReverse) {
    if (from) {
        from.classList[isReverse ? 'remove' : 'add']('reverse');
        from.style.display = 'block';
        from.classList.add(ANITATION_TYPE);
        from.classList.add(OUT);
        from.classList.remove(IN);
        from.classList.remove(ACTIVE);
    }

    to.classList[isReverse ? 'remove' : 'add']('reverse');
    to.classList.add(ANITATION_TYPE);
    to.classList.add(IN);
    to.classList.remove(OUT);
    to.classList.add(ACTIVE);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
    // document.title = curpage.getAttribute("data-title");
    // var moduleName;
    // if (moduleName = curpage.getAttribute("data-module")) {
    //     if (!require.defined(moduleName)) {
    //         require([moduleName]);
    //     }
    // }
}

const scrollFunc = function (event) {
    event = event || window.event;
    event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
    if (event.delta < 0) {
        pageDown();
    } else {
        pageUp();
    }
}
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
window.onmousewheel = document.onmousewheel = scrollFunc;
document.onkeydown = function (event) {
    event = event || window.event;
    var c = event.keyCode;
    if (c == 40 || c == 32 || c == 39) {
        pageDown();
    } else if (c == 38 || c == 37) {
        pageUp();
    }
}
const getPage = function (index) {
    return document.getElementById(`page${index}`)
}
const pageDown = function () {
    pageTo(current + 1)
}
const pageUp = function () {
    pageTo(current - 1)
}
const pageTo = function (to) {
    if (to >= 1 && to <= PAGE_COUNT && !playing) {
        const from = current
        current = to
        import(`./pages/page${to}`).then(m => {
            playing = true
            animate(getPage(from), getPage(to), to > from)
                .then(() => {
                    playing = false
                })
        })
    }
}
console.log('load file animation.js')
export { pageDown, pageUp, pageTo }
