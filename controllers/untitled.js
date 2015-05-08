import urllib2,os; pf='Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read()); print( 'Please restart Sublime Text to finish installation')

chrome 浏览器的回退功能
浏览器的history
css 四线 顶线，中线，基线，底线 
vertical-algin  到底应用在哪个对象上，应用之后影响对象是谁。
nodejs template ejs jade nunjucks swing 
bandlebars 是什么
backbone是什么
nodejs
mac 共享windows文件

nodejs 视图引擎 jade ejs 学习成本 doU, doT, nTenjin, jst_speed, tenjin,jqtpl
构建工具 jake < grunt < gulp
css预处理器 less sass stylus实现的功能是一样的，sass多了写继承扩展之类的功能，颜色函数，计算功能都是支持的。

针对iOS7、8的测试
http://developer.telerik.com/featured/scroll-event-change-ios-8-big-deal/
https://code.google.com/p/chromium/issues/detail?id=423444
http://ejohn.org/blog/learning-from-twitter/

http://liulanqi.baidu.com/
没事的时候仿作一下

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects

在北京的搬家经历--canvas动画
北京的成长经历--
自我反省
给我的剪扣子增加后台服务，存储用户信息。增加关卡存储和选择，根据用户信息可以定位到用户的游戏进度
name
score 
level 
游戏逻辑
棋盘生成规则，预置棋盘，随机棋盘，
自动判断是否还可行--先略（下一关）
游戏逻辑：登录-关卡-游戏中-返回-关卡-登录

永丰屯-龙跃苑东五区-龙跃苑东四区-枫丹丽舍2号楼-永泰西里29号楼

rivaled-竞争
assignment-任务

渲染一个页面从多个数据源获取数据，最终渲染至客户端，nodejs同时并发对多个数据源的请求。异步机制 请求之间无阻塞。
雪崩问题，在缓存失效的情况下，大并发高访问量同时涌入数据库中查询，数据库无法承受大量的查询请求，影响到网站整体的响应速度。

eventProxy  	

UI 测试
前端测试

i/o异步和同步
i/o阻塞和非阻塞


模板引擎
gulp task 
路由配置
视图渲染

views 目录结构
	|
	————detail（详情页面） 
	|
	————system（系统控件） 
	|
	————users（用户系统） 
	|
	————lists（列表页面）
	|	|
	|	————index（首页列表）
	|	|
	|	————item（类别列表）
	|
	————static（静态页面） 
	|	|
	|	————activities（活动页面）
	|	|
	|	————normal（普通静态页面）
	|
	————public（公共文件）

data 目录结构
	|
	————detail（详情页面） 
	|
	————system（系统控件） 
	|
	————users（用户系统） 
	|
	————lists（列表页面）
	|	|
	|	————index（首页列表）
	|	|
	|	————item（类别列表）
	|
	————static（静态页面） 
	|	|
	|	————activities（活动页面）
	|	|
	|	————normal（普通静态页面）
	|
	————public（公共文件）

	几种类型的数据接口
	首页数据
	商品列表（类别，商品）
	商品详情页面-类似文章，还是数据拼凑，

	评论纯展示，没有个人空间

	错误页面的统一处理
	模板使用习惯：遍历， 嵌套， 数据计算？

	用户系统
	手机端和PC端？

	路由管理，是否分开管理（不是很有必要）
	控制层和视图层区分开了


	swing（使用量） 功能上跟nunjucks差不多，而且都是服务器 浏览器都同时支持，github的贡献者都差不多。nunjucks的更新稍微快于swing，issue的活跃度也比较高

	gulp 任务内容：静态文件的压缩整合。




	静态化：文件存储，接收post，多线程，静态化一般遵循什么标准，什么样的页面不能静态化，什么样的可以
	HTTP 处理post请求
	接收json数据
	{code 状态码，}
	cluster(多线程)

	1：配置一个post处理器，
	2：扣子游戏的逻辑

调研nodejs的视图引擎，
自动化任务工具

动静分离：场景一：假如我们是一个商户，我们查询自己网店的交易数据，一般这个交易数据我们会放置在页面的右下部分，这个部分我们很自然把它当做动态资源，就算我们的网店交易量很小，我们也不敢把这个部分当做静态资源处理。

　　场景二：我们网站为了给用户一个友好的体验，会在用户登录网站后在页面某个地方显示欢迎语，例如：上午好，夏天的森林，欢迎使用我们的网站！，到了下午，这个欢迎语可能就变成了下午好，夏天的森林，欢迎使用我们的网站！，那么这块内容我们应该是当做静态内容还是动态内容呢？这个就需要思考了。

　　场景三：网站页面里会有很多图片，有些图片的确是很久很久都不会发生变化，例如网站的图标，但是有的图片却不同了，例如有一个星期我们要为某个商户做营销活动，那么营销图片这块更新后就会有一个星期的有效期，复杂点的话，我们可能会在营销活动期间在页面的某一块专设给这个商户营销活动的内容区，这个内容区使用一个html片段，但是当营销活动结束了，这个营销的图片可能就要发生变化，营销的内容区可能会被去掉，那么这些东西我们是当做静态内容还是动态内容处理了？

！！！swig  nunjucks 相对来说 在写文件的时候 swig的使用感觉略显啰嗦，变量作用域还是个问题

less  sass 















1：使用nunjucks，使用cluster 多进程管理
2：静态页面渲染，nodejs path的定义
3:路径深度优先遍历   使用node-dir模块
4：gulp任务设置，css watch autoprefixer cssmin， js uglify watch min， images min， HTML


首页：
banner: [
	{
		id: '',
		imgLink: ''
	}
]

goodRecommend: [
	{
		id: '',
		imgLink: '',
		title: '',
		desc: '',
		size: '',
		price: ''
	}
]
layer: [
	{
		first:{
			id: '',
			imgLink: ''
		}
	}
]



















