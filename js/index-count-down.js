(function($) {
    var oTime1 = $(".time")[0];
    console.log($(".time"))
    var oTime2 = oTime1.children[0];
    var oTime2 = oTime1.children[2];
    var oTime2 = oTime1.children[4];

    function rank(date) {
        var newDate = new Date();
        var secondInteval = Math.floor((date - newDate) / 1000);
        var hour = Math.floor(secondInteval / 3600);
        var minute = Math.floor(secondInteval / 60 % 60);
        var second = Math.floor(secondInteval % 60);

        function add(s) {
            return s < 10 ? "0" + s : s
        }
        hour = add(hour)
        minute = add(minute)
        second = add(second);
        console.log(hour, minute, second, secondInteval);
        oTime1.innerText = hour;
        oTime2.innerText = minute;
        oTime3.innerText = second;
        console.log("aa")
    }
    var oDate = new Date("2020/11/30 12:00:00");
    rank(oDate);
    var timer = setInterval(function() {
        rank(oDate);
    }, 1000);
})(jQuery)