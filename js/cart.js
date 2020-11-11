function Cart() {
    if (localStorage.getItem("cartDatas")) {
        this.cartDatas = JSON.parse(localStorage.getItem("cartDatas"));
    } else {
        this.cartDatas = {};
    }
}

Cart.prototype.saveData = function(id, num, tel) {
    if (this.cartDatas[id] === undefined || tel) {
        this.cartDatas[id] = num;
    } else {
        this.cartDatas[id] += num;
    }

    localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas), 7);
}
Cart.prototype.showData = function(id,cartList,cks,per_price,minus,per_num,plus,per_total_price,del,total_Price) {
    this.oCartList = document.getElementById(id);
    let str="";
    for (let id in this.cartDatas) {
        let aNum = this.cartDatas[id];
        console.log(+id)
        $.get("http://jx.xuzhixiang.top/ap/api/detail.php",{
            id:+id,//字符串 转为数字
        },data=>{
            $.each(data,function(index, item){
                // console.log(item)
                if (item.pimg){
                    // console.log(item.pimg);
                    str+= `
                    <ul class="cartList" data-id="${id}">
                        <li class="cartList1">
                            <input type="checkbox" name="" class="cks">
                            <img src="../${item.pimg}" alt="">
                        </li>
                        <li class="cartList2">${item.pname}${item.pdesc}</li>
                        <li class="per_price cartList3">${item.pprice}</li>
                        <li class="cartList4">
                            <span class="minus">-</span>
                            <input type="text" value="${aNum}" class="per_num">
                            <span class="plus">+</span>
                        </li>
                        <li class="per_total_price cartList5">${item.pprice*aNum}</li>
                        <li class="del cartList6">×</li>
                    </ul>
                    `;
                }else {
                    alert(item.msg)
                }
            })
            // console.log(str)
            //为什么非要放这里
            this.oCartList.innerHTML=str;
        })
        
    }
    var timer = setTimeout(function(){
        this.cartList = $(cartList).get()
        console.log(this.cartList)
        console.log("b")
        let checkAll = document.getElementById("checkAll"); //选中所有
        ;//ul 商品列表
        this.cks = $(cks).get();//复选框
        this.perPrice = $(per_price).get();//商品单价
        this.minus = $(minus).get();//减
        this.num = $(per_num).get();//商品数量
        this.plus = $(plus).get();//加号
        this.perTotalPrice = $(per_total_price).get();//单个商品总价
        this.del = $(del).get();//删除按钮
        console.log(checkAll)
        console.log(this.cartList)
        console.log(this.cks)
        console.log(this.perPrice)
        console.log(this.minus)
        console.log(this.num)
        console.log(this.plus)
        console.log(this.perTotalPrice)
        console.log(this.del)

        checkAll.onclick = () => {
            for (let i = 0; i < this.cks.length; i++) {
                this.cks[i].checked = checkAll.checked; //选中所有点击时，复选框状态与其保持一致
            }
            totalPrice();
        }
    
        //点击每个商品
        for (let i = 0; i < this.cks.length; i++) {
            this.cks[i].onclick = () => {
                var count = 0;
                for (let j = 0; j < this.cks.length; j++) {
                    if (this.cks[j].checked) { //检查当前所有复选框状态，选中加1
                        count++;
                    }
                }
                if (count == this.cks.length) { //所有选中，全选点亮
                    checkAll.checked = true;
                } else {
                    checkAll.checked = false;
                }
                totalPrice();
            }
        }
    
        //循环减号，进行加减操作
        for (let i = 0; i < this.minus.length; i++) {
            //减号
            this.minus[i].onclick = () => {
                this.num[i].value--;
                if (this.num[i].value < 1) {
                    this.num[i].value = 1;
                }
                updateData(i);
            };
            //加号
            this.plus[i].onclick = () => {
                this.num[i].value++;
                updateData(i);
            };
            //input输入框内容改变
            this.num[i].onchange = () => {
                if (this.num[i] < 1) {
                    this.num[i] = 1
                }
                updateData(i);
            };
            //点击删除
            this.del[i].onclick = () => {
                removeData(i);
            }
        }
        function updateData(i){
            this.perTotalPrice[i].innerText = this.num[i].value * this.perPrice[i].innerText;
            //更新总价
            /* let totalPrice = document.getElementById(total_Price);
            let price = 0;
            for (let i = 0; i < this.cks.length; i++) {
                if (this.cks[i].checked) {
                    price += (+this.perTotalPrice[i].innerText);
                }
            }
            totalPrice.innerText = price; */
            totalPrice();
            //更改数据，以便刷新后更新最新的数据
            let id = this.cartList[i].getAttribute("data-id");
            this.saveData(id, this.num[i].value, true);
        }
        function totalPrice(){
            let totalPrice = document.getElementById(total_Price);
            let price = 0;
            for (let i = 0; i < this.cks.length; i++) {
                if (this.cks[i].checked) {
                    price += (+this.perTotalPrice[i].innerText);
                }
            }
            totalPrice.innerText = price;
        }
        function removeData(i){
            let id = this.cartList[i].getAttribute("data-id");
            this.oCartList.removeChild(this.cartList[i]); //删节点
            this.cks[i].checked = false; //输出节点后，将节点处的复选框清空
            delete this.cartDatas[id]; //删数据
            localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas), 7);
        }
        /* function saveData(id, num, tel) {
            if (this.cartDatas[id] === undefined || tel) {
                this.cartDatas[id] = num;
            } else {
                this.cartDatas[id] += num;
            }
            localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas), 7);
        } */
    },100)
    
    /* let checkAll = $("#checkAll")[0]; //选中所有
    this.aLi = $(".cartList").children();
    this.cks = $(".cks")[0]; //复选框
    this.perPrice = $(".per-price")[0]; //商品单价
    this.minus = $(".minus")[0]; //减
    this.num = this.cartDatas[productID]; //商品数量
    this.plus = $(".plus")[0]; //加
    this.perTotalPrice = $(".per-total-price")[0]; //单个商品总价
    this.del = $(".delete")[0]; //删除按钮 */

    //选中所有
    
}

/* //更新数据
Cart.prototype.updateData = function(i) {
    //更新单个商品总价
    this.perTotalPrice[i].innerText = this.num[i].value * this.perPrice[i].innerText;
    //更新总价
    this.totalPrice();
    //更改数据，以便刷新后更新最新的数据
    let id = this.cartList[i].getAttribute("data-id");
    this.saveData(id, this.num[i].value, true);
}

//更新总价
Cart.prototype.totalPrice = function() {
    let totalPrice = document.getElementById(total_Price);
    let price = 0;
    for (let i = 0; i < this.cks.length; i++) {
        if (this.cks[i].checked) {
            price += (+this.perTotalPrice[i].innerText);
        }
    }
    totalPrice.innerText = price;
};

Cart.prototype.removeData = function(i) {
    let id = this.cartList[i].getAttribute("data-id");
    this.oCartList.removeChild(this.cartList[i]); //删节点
    this.cks[i].checked = false; //输出节点后，将节点处的复选框清空
    delete this.cartDatas[id]; //删数据
    localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas), 7);
} */

// 