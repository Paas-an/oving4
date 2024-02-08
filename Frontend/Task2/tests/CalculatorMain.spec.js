// tests/CalculatorMain.spec.js
import { test } from 'vitest'
import { mount } from '@vue/test-utils'
import CalculatorMain from '../src/components/CalculatorMain.vue'

test('calculate', ({ is }) => {
  const wrapper = mount(CalculatorMain)

  // Set the input
  wrapper.vm.input = '2+2'

  // Call the calculate method
  wrapper.vm.calculate()

  // Check the result
  is(wrapper.vm.result, 4)

  // Check the calculation log
  is(wrapper.vm.calculationLog, ['2+2 = 4'])

  // Check the input has been cleared
  is(wrapper.vm.input, '')
})