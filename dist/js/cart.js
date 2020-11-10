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
Cart.prototype.showData = function(id) {
    this.oCartList = document.getElementById(id);
    let productDatas = JSON.parse(localStorage.getItem("productDatas"));
    let str = "";

    for (let id in this.cartDatas) {
        str += `<li data-id="${id}">
            <input type="checkbox" class="cks">
            <img src="${productDatas[id].imgsrc}">
            <span>${productDatas[id].title}</span>
            <span class="perPrice">${productDatas[id].price}</span>
            <span class="minus">-</span>
            <input type="text" value="${this.cartDatas[id]}" class="num">
            <span class="plus">+</span>
            <span class="perTotalPrice">${productDatas[id].price*this.cartDatas[id]}</span>
            <span class="del">x</span>
        </li>`;
    }
    this.oCartList.innerHTML = str;


    function getAtts(className) {
        return document.querySelectorAll(className);
    }
    let checkAll = document.getElementById("checkAll"); //选中所有
    this.aLi = document.querySelectorAll("li");
    this.cks = getAtts(".cks"); //复选框
    this.perPrice = getAtts(".perPrice"); //商品单价
    this.minus = getAtts(".minus"); //减
    this.num = getAtts(".num"); //商品数量
    this.plus = getAtts(".plus"); //加号
    this.perTotalPrice = getAtts(".perTotalPrice"); //单个商品总价
    this.del = getAtts(".del"); //删除按钮
    console.log(this.aLi)
        //选中所有
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
            if (this.num[i] < 1) {
                this.num[i] = 1
            }
            this.updateData(i);
        };
        //点击删除
        this.del[i].onclick = () => {
            this.removeData(i);
        }
    }

}

//更新数据
Cart.prototype.updateData = function(i) {
    //更新单个商品总价
    this.perTotalPrice[i].innerText = this.num[i].value * this.perPrice[i].innerText;
    //更新总价
    this.totalPrice();
    //更改cookie数据，以便刷新后更新最新的数据
    let id = this.aLi[i].getAttribute("data-id");
    this.saveData(id, this.num[i].value, true);
}

//更新总价
Cart.prototype.totalPrice = function() {
    let totalPrice = document.getElementById("totalPrice");
    let price = 0;
    for (let i = 0; i < this.cks.length; i++) {
        if (this.cks[i].checked) {
            price += (+this.perTotalPrice[i].innerText);
        }
    }
    totalPrice.innerText = price;
};

Cart.prototype.removeData = function(i) {
    let id = this.aLi[i].getAttribute("data-id");
    this.oCartList.removeChild(this.aLi[i]); //删节点
    this.cks[i].checked = false; //输出节点后，将节点处的复选框清空
    delete this.cartDatas[id]; //删数据
    localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas), 7);
}

// 