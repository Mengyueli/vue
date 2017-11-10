import Home from './components/home'
import Test from './components/Test'
// 抽离配置路由的界面
export default[
	// path：/就代表根路径 component:要跳转到的组件里
	{path:"/",component:Home},
	{path:"/test",component:Test}
]