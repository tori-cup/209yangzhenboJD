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

        //seckill JD秒杀主轮播
        seckillSlide: function() {
            //DOM绘制完毕
            var seckillIndexLeft = 0;
            var seckillIndexRight = 3;
            window.onload = function() {
                $("#seckill #seckill-slide-wrap").children(".seckill-slide-left").on("click", function() {
                    seckillIndexLeft++;
                    if (seckillIndexLeft == 3) {
                        seckillIndexLeft = 0;
                    }
                    $("#seckill #seckill-slide-wrap").children(".seckill-slide").hide();
                    if (seckillIndexLeft == 0) {
                        $("#seckill #seckill-slide-wrap").children(".seckill-slide1").show();
                    }
                    if (seckillIndexLeft == 1) {
                        $("#seckill #seckill-slide-wrap").children(".seckill-slide2").show();
                    }
                    if (seckillIndexLeft == 2) {
                        $("#seckill #seckill-slide-wrap").children(".seckill-slide3").show();
                    }
                })
                $("#seckill #seckill-slide-wrap").children(".seckill-slide-right").on("click", function() {
                    seckillIndexRight--;
                    if (seckillIndexRight == -1) {
                        seckillIndexRight = 2;
                    }
                    $("#seckill #seckill-slide-wrap").children(".seckill-slide").hide();
                    if (seckillIndexRight == 0) {
                        $("#seckill #seckill-slide-wrap").children(".seckill-slide1").show();
                    }
                    if (seckillIndexRight == 1) {
                        $("#seckill #seckill-slide-wrap").children(".seckill-slide2").show();
                    }
                    if (seckillIndexRight == 2) {
                        $("#seckill #seckill-slide-wrap").children(".seckill-slide3").show();
                    }

                })
            }
        },
        //seckill JD秒杀右侧轮播
        seckillSlideBrand: function() {


            var timer1 = setInterval(function() {
                $("#seckill .seckill-slide-brand .slide-brand1").fadeOut();
                $("#seckill .seckill-slide-brand .slide-brand2").fadeIn();
            }, 1000)
            var timer1 = setInterval(function() {
                    $("#seckill .seckill-slide-brand .slide-brand1").fadeIn();
                    $("#seckill .seckill-slide-brand .slide-brand2").fadeOut();
                }, 2000)
                /* var timer = setInterval(function() {
                    if ($("#seckill .seckill-slide-brand .slide-brand1").css("position") == "relative") {
                        $("#seckill .seckill-slide-brand .slide-brand1").animate({
                            "position": "absolute",
                            "z-index": "-1",
                            "left": "-100%"
                        });
                        while ($("#seckill .seckill-slide-brand .slide-brand1").css("left") == "-100%") {
                            $("#seckill .seckill-slide-brand .slide-brand1").css({
                                "left": "100%"
                            })
                        }
                        $("#seckill .seckill-slide-brand .slide-brand2").animate({
                            "position": "absolute",
                            "z-index": "10",
                            "left": "0"
                        });
                    }
                    
                }, 1000)
                var timer = setInterval(function() {
                    $("#seckill .seckill-slide-brand .slide-brand1").animate({
                        "left": "0"
                    });
                    $("#seckill .seckill-slide-brand .slide-brand2").animate({
                        "position": "relative",
                        "z-index": "-1",
                        "left": "0"
                    });
                }, 2000) */
        },
    })
})(jQuery);