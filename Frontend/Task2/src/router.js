import { createRouter, createWebHistory } from 'vue-router'
import FeedbackForm from '@/components/FeedbackForm'
import Calculator from '@/components/CalculatorView'

const routes = [
  {
    path: '/',
    name: 'Calculator',
    component: Calculator // Set Calculator as the default page
  },
  {
    path: '/feedbackform',
    name: 'FeedbackForm',
    component: FeedbackForm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router