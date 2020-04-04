import Vue from 'vue'
import Router from 'vue-router'
import movie from '../components/movie/movie'
import productitem from '../components/productItem/productItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movie',
      component: movie
    }
  ]
})
