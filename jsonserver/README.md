// 获取所有用户信息
http://localhost:3000/users

// 获取id为1的用户信息
http://localhost:3000/users/1

// 获取公司的所有信息
http://localhost:3000/companies

// 获取单个公司的信息
http://localhost:3000/companies/1

// 获取所有公司id为3的用户
http://localhost:3000/companies/3/users

// 根据公司名字获取信息
http://localhost:3000/companies?name=Microsoft

// 根据多个名字获取公司信息
http://localhost:3000/companies?name=Microsoft&name=Apple

// 获取一页中只有两条数据
http://localhost:3000/companies?_page=1&_limit=2

// 升序排序 asc升序 desc降序
http://localhost:3000/companies?_sort=name&_order=asc

// 获取年龄30及以上的
http://localhost:3000/users?age_gte=30

// 获取年龄在30到40之间
http://localhost:3000/users?age_gte=30&age_lte=40

// 搜索用户信息
http://localhost:3000/users?q=h

# 步骤
###
01.安装全局的json-server
	（mac：sudo cnpm install -g json-server）
02.cd到相关文件JSONSERVER下，初始化 cnpm init --yes
03. 安装json-server
	(cnpm install json-server --save-dev)
04.package.json
	修改："scripts":{
		"名字1(json:server)":"json-server --watch json文件名字2.json"
	}
05.新建一个json文件名字2.json文件（与上次文件名相同），并添加相应的json数据(一定要有id)
06.终端运行 cnpm run 名字1(json:server)
	有一个笑脸，Resources
	找到home，粘贴下面的网址并运行到浏览器
07.下载postman并安装
08.操作数据
	*1.GET：get方法（查询）
		详情参考JSONSERVER文件夹下的readMe.md直接粘贴到地址栏就可以访问到相应的内容
	*2.POST:(添加)
		需要修改headers和Body，key：Content-Type，Value：application/json
		http://localhost:3000/users就可以直接访问了
	*3.PATCH：修改
		http://localhost:3000/users/要修改的id
		在body>Raw里直接填写要添加的对象即可
	*4DELETE：删除
		http://localhost:3000/users/要删除的id
		地址/要删除的id
	*5PUT:修改
		地址/要修改的id,在body>Raw里直接填写要修改的对象即可



