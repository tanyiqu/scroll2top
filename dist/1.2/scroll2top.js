/**
 * JS
 */

class Scroll2Top {

    constructor() {
        // 样式
        this.css_text = `    
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
        }`;

        // 向上箭头图标
        this.scroll2top_icon_html = `
        <svg t="1609992089351" class="scroll2top_img icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1115" width="144" height="144"><path d="M512 324.288l256 256L708.288 640 512 443.712 315.712 640 256 580.288z" fill="#ffffff" p-id="1116"></path></svg>
        `;

        // 计时器
        this.scroll2top_timer = null;

        // 自己
        this.btn = document.createElement('div');
    }


    // 创建dom对象
    create() {
        // 追加样式
        let scroll2top_style = document.createElement('style');
        scroll2top_style.innerHTML = this.css_text;
        document.getElementsByTagName('head').item(0).appendChild(scroll2top_style);

        // 创建btn
        this.btn.className = 'scroll2top';

        // 添加图标
        this.btn.innerHTML = this.scroll2top_icon_html;

        // 将自己添加进document
        document.body.appendChild(this.btn);

        // 添加事件
        this.setEvent();
    }


    // 添加事件
    setEvent() {
        const _this = this;

        this.btn.addEventListener('click', () => {

            // 取消当前的监听
            _this.btn.removeEventListener('click', this, false);

            let speed = 75; //定义一个速度，即每隔10毫秒走多少px
            _this.scroll2top_timer = setInterval(function () {
                document.documentElement.scrollTop = document.documentElement.scrollTop - speed;
                // 到达顶部
                if (document.documentElement.scrollTop <= 0) {
                    clearInterval(_this.scroll2top_timer);
                    // 再给按钮加上监听
                    _this.btn.addEventListener('click', this, false);
                }
            }, 10);

        }, false);
    }

    // 挂载到页面上
    mount() {
        console.log('挂载 scroll2top v1.2\n项目地址：https://github.com/tanyiqu/scroll2top');
        this.create();

        // 监听滚动事件
        window.addEventListener("scroll", () => {
            //获取scroll的滚动值
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop >= 1000) {
                this.btn.style.display = 'block';
            } else {
                this.btn.style.display = 'none';
            }
        });
    }
}

new Scroll2Top().mount();