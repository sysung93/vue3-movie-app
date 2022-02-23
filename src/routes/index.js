import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

//main.js로 내보내기
export default createRouter({
  //Hash모드,history모드 2가지로 이용 가능
  //Hash모드 http://google.com/#/search
  history: createWebHashHistory(),

  //스크롤 초기화
  scrollBehavior() {
    return { top: 0 }
  },
  
  //page를 구분
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})