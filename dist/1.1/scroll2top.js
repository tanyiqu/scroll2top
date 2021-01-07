/**
 * JS
 */

const scroll2top_icon_html = `
<svg t="1609992089351" class="scroll2top_img icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1115" width="144" height="144"><path d="M512 324.288l256 256L708.288 640 512 443.712 315.712 640 256 580.288z" fill="#ffffff" p-id="1116"></path></svg>
`;

const scroll2top_css_text = `
    body {
        position: relative;
    }

    .scroll2top {
        display: none;
        position: fixed;
        width: 50px;
        height: 50px;
        bottom: 30px;
        right: 10px;
        background: #2371ef;
        border-radius: 10px;
        cursor: pointer;
    }

    .scroll2top .scroll2top_img {
        width: 100%;
        height: 100%;
    }
`;

// 追加样式
let scroll2top_style = document.createElement("style");
scroll2top_style.innerHTML = scroll2top_css_text;
document.getElementsByTagName('head').item(0).appendChild(scroll2top_style);

// 滚动计时器
let scroll2top_timer = null;
let scroll2top_btn = null;

// 滚动到顶部
function scrollToTop() {
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
    // div
    scroll2top_btn = document.createElement('div');
    scroll2top_btn.className = 'scroll2top';
    document.body.appendChild(scroll2top_btn);
    scroll2top_btn.innerHTML = scroll2top_icon_html;
    scroll2top_btn.addEventListener('click', scrollToTop, false);

    // 修改背景色
    let script = document.querySelector('#scroll2top');
    let background = script.attributes.background.value;
    if (background) {
        scroll2top_btn.style.backgroundColor = background;
    }

    // 监听滚动事件
    window.addEventListener("scroll", () => {
        //获取scroll的滚动值
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= 1000) {
            scroll2top_btn.style.display = 'block';
        } else {
            scroll2top_btn.style.display = 'none';
        }
    });
};