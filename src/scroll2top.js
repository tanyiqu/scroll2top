/**
 * JS
 */


// 滚动计时器
let scroll2top_timer = null;
let scroll2top_btn = null;

// 滚动到顶部
function scrollToTop() {
    console.log('点击');
    // 取消当前的监听
    scroll2top_btn.removeEventListener('click', scrollToTop, false);
    let speed = 75; //定义一个速度，即每隔12毫秒走多少px
    scroll2top_timer = setInterval(function () {
        document.documentElement.scrollTop = document.documentElement.scrollTop - speed;
        // 到达顶部
        if (document.documentElement.scrollTop <= 0) {
            clearInterval(scroll2top_timer);
            // 再给按钮加上监听
            scroll2top_btn.addEventListener('click', scrollToTop, false);
        }
    }, 10);
}


// 挂载到body中
window.onload = () => {
    scroll2top_btn = document.createElement('div');
    scroll2top_btn.className = 'scroll2top';
    document.body.appendChild(scroll2top_btn);
    // scroll2top_btn.onclick = scrollToTop;
    scroll2top_btn.addEventListener('click', scrollToTop, false);
};


// 监听滚动事件
window.addEventListener("scroll", () => {
    //获取scroll的滚动值
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(scrollTop);
});