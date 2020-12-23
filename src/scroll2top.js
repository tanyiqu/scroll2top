/**
 * JS
 */


// 滚动计时器
let scroll2top_timer = null;


// 滚动到顶部
function scrollToTop() {
    let speed = 75; //定义一个速度，即每隔12毫秒走多少px
    scroll2top_timer = setInterval(function () {
        document.documentElement.scrollTop = document.documentElement.scrollTop - speed;
        //如果scroll的滚动值为0，也就是到达了页面顶部，需要停止定时器
        if (document.documentElement.scrollTop <= 0) {
            clearInterval(scroll2top_timer)
        }
    }, 10);
}


// 挂载到body中
window.onload = () => {
    let scroll2top_btn = document.createElement('div');
    scroll2top_btn.className = 'scroll2top';
    document.body.appendChild(scroll2top_btn);

    scroll2top_btn.onclick = scrollToTop;
};


// 监听滚动事件
window.addEventListener("scroll", () => {
    //获取scroll的滚动值
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(scrollTop);
});