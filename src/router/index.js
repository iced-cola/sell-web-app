import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/components/Order'
import Cart from '@/components/Cart'
import Address from '@/components/Address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Order',
      component: Order
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    }
  ]
})
