function addProduct() {
    //登录
    /* $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
         username: localStorage.getItem("username"),
         password: localStorage.getItem("password")
     }).then(data => {
         console.log(data);
        //  localStorage.setItem("login_uid",JSON.stringify(data.data.id));
        //  console.log(localStorage.getItem("login_uid"));
     }) */
    //查询43918
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        uid: localStorage.getItem("UID"),
    }).then(data => {
        console.log(data);
    })
    //删除
    /* $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
        uid: localStorage.getItem("UID"),
        pid:325635
    }).then(data => {
        console.log(data);
    }) */
    //首页商品列表接口
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
        //传递uid 可以看到添加的商品
        // uid: 43918,
        // uid:localStorage.getItem("UID")
        // uid: Number(localStorage.getItem("login_uid")),
    }).then(data => {
        var str="";  
        $.each(data.data, function(index, item) {
            // console.log(data);
            // console.log(index)
            str += `
            <div class="product">
                <a href="http://localhost:8080/html/detail.html?id=${item.pid}" target="_blank"><img src="../${item.pimg}"></a>
                <p class="product-tit1">${item.pname}</p>

                <p class="price"><span>￥</span>${item.pprice}</p>
            </div>
            `;
            $("#productList").html(str)
        })
    })
{/* 
<p class="product-tit1">${item.pdesc}</p>
<p class="add-cart">加入购物车</p> */}
    //修改商品 接口 index-productList.png
    /* $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-update.php", {
        pimg:"../img/index-productList16.png",
        pid: 355831,
        pname:"四季欧式布艺素色沙发垫 沙发套沙发罩防滑靠背巾全包定做抱枕套子 浅绿色 68*70+15cm",
        pprice:"79.00",
    }).then(data => {
        console.log(data);
    }) */
    /* $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-update.php", {
        pid: 355540,
        pname:"保温壶超大容量保暖热水瓶男2L户外便携大号旅行水杯3升1000 1000毫升/蓝色/按弹盖",
        pprice:"174",
        pimg:"../img/index-productList14.png"
    }).then(data => {
        console.log(data);
    }) */
    //删除商品 接口 
    /* $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php", {
        pid: 339504,
        uid: null,
        token: "94f2dff69c7281b13a64f4ce65b8fd32"
    }).then(data => {
        console.log(data);
    }) */

    // 添加商品
     /* $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList20.png",
        pname: "中国李宁运动鞋男鞋2020秋季新品001原点男士经典时尚低帮耐磨休闲鞋巴黎时装周走秀同款官方旗舰网 标准白/云雾白/青椒绿-1 41",
        pprice: "258.00",
        uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    })
     $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList21.png",
        pname: "《无限爱》女士项链原创小众设计纯银吊坠时尚首饰Ag925银饰品镀铂金七夕礼物送女友 轻奢珠宝 项链+吊坠+精美高档礼盒",
        pprice: "368.00",
        uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    }) 
      $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList22.png",
        pname: "佰魅伊人提神防瞌睡学生防疲劳醒脑防困上课开车高考熬夜防困薄荷醒神棒精油 清醒棒",
        pprice: "39.00",
        uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    })  
     $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList23.png",
        pname: "都市丽人内衣套装女2020秋冬蕾丝无钢圈透气手掌杯收副乳聚拢BC薄杯文胸套装2B05A4 中国红 34/75A杯",
        pprice: "149.90",
        uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    }) */

    /*($.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList3.png",
        pname: "电动按摩枕U型颈椎低头族神器午睡枕头汽车旅行脖子护颈仪记忆棉靠肩膀加热 揉捏充电按摩枕 经典款单键【震动舒缓】",
        pprice: 49.00,
        uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    }) 
    $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList4.png",
        pname: "攀升商睿2代电脑主机办公商用台式机十代i3-10100 8G 256GSSD 商务键鼠 3年上门",
        pprice: 1925,
        uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    })
    $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList5.png",
        pname: "程序员 装备必须牛",
        pprice: 9999,
        uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    })
    $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList6.png",
        pname: "北欧个性创意设计师客厅金属壁灯现代简约样板卧室床头玻璃壁灯 直径160*370 带光源",
        pprice: 439,
        uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    })
    $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList7.png",
        pname: "一叶子套装 补水保湿清洁滋养提亮改善暗沉粗糙护肤品男女 白百合三件套洗面奶/洁面爽肤水乳液",
        pprice: 89,
        uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    })
    $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList8.png",
        pname: "创意简约蓝白地中海装饰组合相框影楼走廊卧室客厅画框照片墙 地中海风格-2.1",
        pprice: 449,
        uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    })
    $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList9.png",
        pname: "创意简约蓝白地中海装饰组合相框影楼走廊卧室客厅画框照片墙 地中海风格-2.1",
        pprice: 449,
        uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    })
    $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList10.png",
        pname: "蛋糕模具家用不粘做慕斯活底的烘焙磨具工具4寸六6/8寸胚子小 圆形阳极活底6寸(送阳极活底4寸+脱模刀+刮板)",
        pprice: 449,
        uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    })  */
    /* $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList11.png",
        pname: "创意简约蓝白地中海装饰组合相框影楼走廊卧室客厅画框照片墙 地中海风格-2.1",
        pprice: 449,
        // uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    }) */
    /* $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList12.png",
        pname: "创意简约蓝白地中海装饰组合相框影楼走廊卧室客厅画框照片墙 地中海风格-2.",
        pprice: 449,
        // uid:localStorage.getItem("UID"),
    }, data => {
        console.log(data)
    }) */
    /* $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList13.png",
        pname: "创意简约蓝白地中海装饰组合",
        pdesc: "相框影楼走廊卧室客厅画框照片墙 地中海风格-2.1",
        pprice: 449,
        // uid:43918,
    }, data => {
        console.log(data)
    }) */
    /* $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList14.png",
        pname: "创意简约蓝白地中海装饰组合",
        pdesc: "相框影楼走廊卧室客厅画框照片墙 地中海风格-2.1",
        pprice: 449,
        // uid:43918,
    }, data => {
        console.log(data)
    }) */
    /* $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList15.png",
        pname: "创意简约蓝白地中海装饰组合",
        pdesc: "相框影楼走廊卧室客厅画框照片墙 地中海风格-2.1",
        pprice: 449,
        // uid:43918,
    }, data => {
        console.log(data)
    }) */
    /* $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList16.png",
        pname: "创意简约蓝白地中海装饰组合",
        pdesc: "相框影楼走廊卧室客厅画框照片墙 地中海风格-2.1",
        pprice: 449,
        // uid:43918,
    }, data => {
        console.log(data)
    }) */
    /* $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList17.png",
        pname: "创意简约蓝白地中海装饰组合",
        pdesc: "相框影楼走廊卧室客厅画框照片墙 地中海风格-2.1",
        pprice: 449,
        // uid:43918,
    }, data => {
        console.log(data)
    }) */
    /* $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList18.png",
        pname: "创意简约蓝白地中海装饰组合",
        pdesc: "相框影楼走廊卧室客厅画框照片墙 地中海风格-2.1",
        pprice: 449,
        // uid:43918,
    }, data => {
        console.log(data)
    }) */
    /* $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList19.png",
        pname: "创意简约蓝白地中海装饰组合",
        pdesc: "相框影楼走廊卧室客厅画框照片墙 地中海风格-2.1",
        pprice: 449,
        // uid:43918,
    }, data => {
        console.log(data)
    }) */
    /* $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        // 
        pimg: "../img/index-productList20.png",
        pname: "创意简约蓝白地中海装饰组合",
        pdesc: "相框影楼走廊卧室客厅画框照片墙 地中海风格-2.1",
        pprice: 449,
        // uid:43918,
    }, data => {
        console.log(data)
    }) */
}