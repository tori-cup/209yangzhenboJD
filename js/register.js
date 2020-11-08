// $(function() {
/* $("#dialog:has(.dialog-argee)");
console.log($("div"));
console.log("a"); */
// });
;
(function($) {
    $.fn.extend({
        dialog1: function() {
            //注册弹窗协议，点击关闭
            $("#register-dialog>.dialog-argee").on("click", function() {
                $("#register-dialog").css({
                    "display": "none",
                })
                $("#register-bgCover").css({
                    "display": "none",
                })
            });
            //注册弹窗协议，点击跳转首页
            $("#register-dialog>.dialog-close").on("click", function() {
                $(location).attr("href", "http://localhost:8080/index.html");
            });
        },

        //显示国家
        selectCountry: function() {
            // $("#register-dialog #list").
            //点击国家首字母

            //显示常见国家
            $("#register-con .list:not(:first)").each(function() {
                $(this).css({
                    "display": "none"
                })
            });
            //循环a，点击显示对应字母的国家
            $("#register-con .letter a").on("click", function() {
                var curIndex = $(this).index();

                $("#register-con .list").css({ //先清空
                    "display": "none"
                });
                //点击将字母放入
                if (curIndex == 0) { //当索引为0，默认放常用国家地区
                    $("#register-con .letter-con").text($(this).text());
                } else {
                    $("#register-con .letter-con").text($(this).text());
                }

                $("#register-con .list").eq(curIndex).css({ //显示对应索引
                    "display": "block"
                });
            });
            //点击填入对应国家
            $("#register-con .list li").on("click", function() {
                var content1 = $(this).children().eq(0).text();
                var content2 = $(this).children().eq(1).text();
                $("#register-con form .phone .left").html("<div>" + content1 + content2 + "</div>");
            });
            //常规隐藏，点击下拉 显示
            $("#register-con form .phone .select-pic").addClass("pic1")
            $("#register-con #country").css({ "display": "none" });
            var flag = false;
            $("#register-con form .left").on("click", function(e) {
                $("#register-con #country").toggle();
                $("#register-con form .phone .select-pic").toggleClass("pic2");
                /* if ($("#register-con #country").is('visible')) {
                    flag = false;
                } else {
                    flag = true;
                }; */
            });
            /* if (flag) {
                $(document).on("click", function(e) {
                    if ($(e.target).is($("#register-con #country"))) {
                        $("#register-con #country").show();
                    } else {
                        $("#register-con #country").toggle();
                    }
                    console.log($(e.target).is($("#register-con #country")))
                })
            } */
        },

        //手机号为空提示 点击输入提示
        verify: function() {
            $("#register-con form input[type='button']").each(function() {
                $(this).click(function() {
                    if ($("#register-con form input[placeholder='建议使用常用手机号']").val().length == 0) {
                        $("#register-con form .notice").text("请输入手机号")
                    } else {
                        $("#register-con form .notice").text("");
                    };
                });
            });
            //输入手机号
            $("#register-con form input[placeholder='建议使用常用手机号']").click(function() {
                $("#register-con form .notice").text("验证完成后，你可以使用该手机登录或找回密码")
                $(this).change(function() {
                    if ($(this).val() == "" || $(this).val().length == 0) {
                        $("#register-con form .notice").text("验证完成后，你可以使用该手机登录或找回密码")
                    } else {
                        $("#register-con form .notice").text("");
                    };
                });
            });
            //验证码
            $("#register-con form #noticePhone").click(function() {
                $(this).parent().html(
                    "<p>手机验证码</p><input type='text' placeholder='输入验证码' id='notice-code'><div id='regain'>重新获取<div><div id='noCode'>收不到验证码？点击 <a> 获取语音验证码</a><div>"
                )
                $("#register-con form #noticePhone").css({
                    "border": "0"
                });
            });
        },

        //点击下一步
        nextStep: function() {
            $("#register-con form #next").click(function() {
                $("#register-con form #next")
            });
        },
    });
})(jQuery);