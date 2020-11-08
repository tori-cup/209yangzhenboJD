(function($) {
    $.fn.extend({
        headerWrap: function() {
            $("#header-wrap #header p").click(function() {
                $("#header-wrap").css("display", "none");
            })
        },
        //二级产品、左侧产品分类目录
        subProduct: function() {
            //筛选二级产品列表含有span的标签a，使其文字对齐为右对齐
            $("#classify .sub-product .item a").parent().has("span").css({
                "text-align": "right",
            });
            //划过二级产品列表，颜色变化
            $("#classify .sub-product .item a").hover(function() {
                $(this).css("color", "#e1251b");
            }, function() {
                $(this).css("color", "#999");
            });
            //
        },
        //倒计时
        countDown: function() {
            var oTime = $(".time")[0];
            var oTime1 = oTime.children[0];
            var oTime2 = oTime.children[2];
            var oTime3 = oTime.children[4];

            function rank(date) {
                var newDate = new Date();
                var secondInteval = Math.floor((date - newDate) / 1000);
                var hour = Math.floor(secondInteval / 3600);
                var minute = Math.floor(secondInteval / 60 % 60);
                var second = Math.floor(secondInteval % 60);
                if (secondInteval < 1) {
                    clearInterval(timer);
                }

                function add(s) {
                    return s < 10 ? 0 + s : s
                }
                hour = add(hour)
                minute = add(minute)
                second = add(second);
                oTime1.innerText = hour;
                oTime2.innerText = minute;
                oTime3.innerText = second;
            }
            var oDate = new Date("2020/11/8 10:59:59");
            rank(oDate);
            var timer = setInterval(function() {
                rank(oDate);
            }, 1000);
        },

        seckillSlide: function() {
            console.log($("#seckill-slide-wrap .seckill-slide-move"));
            var seckillIndex = 0;
            $("#seckill .seckill-slide-left").on("click", function() {
                seckillIndex = seckillIndex = 2 ? 0 : seckillIndex++;
            })
        }
    })
})(jQuery);

/* //图片轮播
class SeckillSlide {
    constructor(id, interval) {
        this.sliderBox = document.getElementsByClassName(id)[0];
        this.sliderUl = this.sliderBox.children[0];
        this.sliderLi = this.sliderUl.children;
        this.perWidth = this.sliderLi[0].offsetWidth;
        this.sliderUl.style.width = this.sliderLi.length * this.perWidth + "px";
        this.timer = null;
        this.i = 0;
        this.autoPlay(interval);
        this.clear(interval);
    };
    //移动
    move() {
        this.i++;
        if (this.i == this.sliderLi.length) {
            this.sliderUl.style.left = 0;
            this.i = 1;
        }
        if (this.i == -1) {
            this.sliderUl.style.left = -(this.sliderLi.length - 1) * this.perWidth + "px";
            this.i = this.sliderLi.length - 2;
        }
        if (this.aNums) {
            for (let j = 0; j < this.aNums.length; j++) {
                this.aNums[j].className = "";
            }

            if (this.i == this.sliderLi.length - 1) {
                this.aNums[0].className = "hover";
            } else {
                this.aNums[this.i].className = "hover";
            }
        }
        startMove(this.sliderUl, {
            left: -this.perWidth * this.i
        });
    };
    //自动轮播
    autoPlay(interval) {
        this.timer = setInterval(() => {
            this.move();
        }, interval);
    };
    //添加按钮，左右箭头，点击轮播
    addBtns() {
        let oDiv = document.createElement("div");
        oDiv.className = "btns";
        oDiv.innerHTML = "<span>&lt;</span><span>&gt;</span>";
        this.sliderBox.appendChild(oDiv);
        let aBtns = oDiv.children;
        aBtns[0].onclick = () => {
            this.move();
        }
        aBtns[1].onclick = () => {
            this.i -= 2;
            this.move();
        }
    };
    //清除定时器，划入划出轮播区域
    clear(interval) {
        this.sliderBox.onmouseover = () => {
            clearInterval(this.timer);
        }
        this.sliderBox.onmouseout = () => {
            this.timer = setInterval(() => {
                this.move();
            }, interval)
        }
    }
}

function startMove(domobj, json, fn) {
    clearInterval(domobj.timer);
    domobj.timer = setInterval(function() {
        var flag = true; //表示都达到了目标值
        for (var attr in json) {
            var iTarget = json[attr]; //目标值
            if (attr == "opacity") {
                var iCur = parseInt(getStyle(domobj, "opacity") * 100);
            } else {
                var iCur = parseInt(getStyle(domobj, attr)); //当前值
            }

            var iSpeed = (iTarget - iCur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            if (attr == "opacity") {
                domobj.style.opacity = (iCur + iSpeed) / 100;
                domobj.style.filter = "alpha(opacity=" + (iCur + iSpeed) + ")";
            } else {
                domobj.style[attr] = iCur + iSpeed + "px";
            }


            if (iCur != iTarget) {
                flag = false;
            }
        }

        if (flag) {
            clearInterval(domobj.timer);
            if (fn) {
                fn();
            }
        }

    }, 20);

}

function getStyle(domobj, attr) {
    if (window.getComputedStyle) {
        return getComputedStyle(domobj, null)[attr];
    }
    return domobj.currentStyle[attr];
} */