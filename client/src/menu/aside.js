// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '页面',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '页面 1' },
      { path: '/page2', title: '页面 2' },
      { path: '/page3', title: '页面 3' }
    ]
  },
  {
    title: '薛晓桂',
    icon: 'folder-o',
    children: [
      { path: '/xuexg/page1', title: '页面 xuexg' }
    ]
  },
  {
    title:'黄立央',
    icon: 'folder-o',
    children: [
      { path: 'hly', title: '央央的页面' }
    ]
  }
]
