# register注册 http://localhost:8080/html/register.html register.html register.css register.js
1. 注册接口在register.js中，css样式为.css书写
2. 弹窗协议z-index为10。
3. 弹窗协议点击×，跳转首页，http://localhost:8080/index.html
4. 弹窗协议点击请登陆，跳转登录页面，http://localhost:8080/html/login.html
5. 手机号验证注释，账号密码注册即可。注册失败弹出data.msg用户名已存在，成功弹出data.msg注册成功，跳转登录页面。
6. 账号一样，密码不一样，同样可以注册成功

# login登录 http://localhost:8080/html/login.html login.html login.scss
1. 登录页面：没有连接login.js文件，所有样式为scss书写，登录接口在login.html中
2. 登录失败提示请检查密码，成功弹出data.msg登陆成功，当code==1登陆成功，登录成功后会生成唯一的uid用户码，保存用户名、密码、用户id、登录状态1。添加商品接口可选择输入用户id
3. q123456 123  商品1~10


# index首页 index.js index.html index.scss index-slideshow.css index-slideshow.js index-productList.js
1. top为广告部分，右上角×号点击取消，下方元素上移，最右侧悬浮11.11图标（fixed）
2. nav部分有注册登录，注意链接 接口等
3. classify产品分类，未接入产品接口，悬浮显示模块为外部接入html文件
4. 轮播图采用swiper，最右侧登录后显示具体个人信息
5. z-index：产品分类所在模块的背景图-1，左侧产品二级分类3，右侧登录个人信息2，滚动条滚动顶部搜索框4
6. 自day-brand 每日特价 品牌闪购，暂定块上下外边距各10px
7. 注册、登录接口分别写在各自页面内，其余接口写在index-productList.js，index外部接入
8. index-productList.js写有商品列表接口、修改商品接口、添加商品接口（将商品id拼接到a标签的url?后，跳转详情页）

# detail详情 detail.css cart.js
1. 详情页调用根据商品id获取商品详情接口，获取?后的商品id，展示在详情页面上，添加数量加减操作。
2. 点击添加购物车，存储商品数量和商品详情数据。
