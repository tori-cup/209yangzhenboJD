function Cart() {
    if (localStorage.getItem("cartDatas")) {
        this.cartDatas = JSON.parse(localStorage.getItem("cartDatas"));
    } else {
        this.cartDatas = {};
    }
    // this.cartDatas=JSON.parse(localStorage.getItem("cartDatas"));
}

Cart.prototype.saveData = function(id, num, tel) {
    this.cartDatas = JSON.parse(localStorage.getItem("cartDatas"));
    if (this.cartDatas[id] === undefined || tel) {
        this.cartDatas[id] = num;
    } else {
        // let finishNum = Number(this.cartDatas[id])+=num;
        this.cartDatas[id] += num;
    }
    localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas));
}

//传入DOM对象的id和class
Cart.prototype.showData = function(id,cartList,cks,per_price,minus,per_num,plus,per_total_price,del,total_Price) {
    this.oCartList = document.getElementById(id);
    let data =JSON.parse(localStorage.getItem("productDatas"));
    let str="";
    console.log(data)
    console.log(this.cartDatas)
    //当this.cartDatas长度大于0才执行
    if(Object.keys(this.cartDatas).length>0){
        for(let dataID in data){
            if(this.cartDatas[dataID]){
                console.log(dataID)
                //在data-id="${dataID}"多了空格，成data-id=" ${dataID}，一直无法完全删除，总会保留 dataID数据
                str+= `
                <ul class="cartList" data-id="${dataID}">
                    <li class="cartList1">
                        <input type="checkbox" name="" class="cks">
                        <img src="../${data[dataID].pimg}" alt="">
                    </li>
                    <li class="cartList2">${data[dataID].pname}${data[dataID].pdesc}</li>
                    <li class="per_price cartList3">${data[dataID].pprice}</li>
                    <li class="cartList4">
                        <span class="minus">-</span>
                        <input type="text" value="${this.cartDatas[dataID]}" class="per_num">
                        <span class="plus">+</span>
                    </li>
                    <li class="per_total_price cartList5">${data[dataID].pprice*this.cartDatas[dataID]}</li>
                    <li class="del cartList6">×</li>
                </ul>
                        `;
            }
        }
    }
        
    
    this.oCartList.innerHTML=str;

    let checkAll = document.getElementById("checkAll"); //选中所有
    this.total_Price = document.getElementById(total_Price);
    this.cartList = $(cartList).get();//ul 商品列表
    this.cks = $(cks).get();//复选框
    this.perPrice = $(per_price).get();//商品单价
    this.minus = $(minus).get();//减
    this.num = $(per_num).get();//商品数量
    this.plus = $(plus).get();//加号
    this.perTotalPrice = $(per_total_price).get();//单个商品总价
    this.del = $(del).get();//删除按钮
    console.log(this.cartList)
    checkAll.onclick = () => {
        for (let i = 0; i < this.cks.length; i++) {
            this.cks[i].checked = checkAll.checked; //选中所有点击时，复选框状态与其保持一致
        }
        this.totalPrice();
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
            this.totalPrice();
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
                this.updateData(i);
            };
            //加号
            this.plus[i].onclick = () => {
                this.num[i].value++;
                this.updateData(i);
            };
            //input输入框内容改变
            this.num[i].onchange = () => {
                if (this.num[i].value < 1) {
                    this.num[i].value = 1
                }
                this.updateData(i);
            };
            //点击删除
            this.del[i].onclick = () => {
                this.removeData(i);
                this.totalPrice();
            }
        }
}

 //更新数据
Cart.prototype.updateData = function(i) {
    //更新单个商品总价
    this.perTotalPrice[i].innerText = this.num[i].value * this.perPrice[i].innerText;
    //更新总价
    this.totalPrice();
    //更改数据，以便刷新后更新最新的数据
    let id = this.cartList[i].getAttribute("data-id");
    //调用更新本地存储数据，+this 将字符串转为数字以免出现字符串拼接
    this.saveData(id, +this.num[i].value, true);
}

//更新总价
Cart.prototype.totalPrice = function() {
    
    let price = 0;
    for (let i = 0; i < this.cks.length; i++) {
        if (this.cks[i].checked) {
            price += (+this.perTotalPrice[i].innerText);
        }
    }
    this.total_Price.innerText = "总价"+price;
};

Cart.prototype.removeData = function(i) {
    let id = this.cartList[i].getAttribute("data-id");
    this.oCartList.removeChild(this.cartList[i]); //删节点
    this.cks[i].checked = false; //输出节点后，将节点处的复选框清空
    console.log(id)
    /* for(let delID in this.cartDatas){
        console.log(delID===id)
        if(id==delID){
            delete this.cartDatas[id]; //删数据
        }
    } */
    delete this.cartDatas[id]; //删数据
    localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas));
}