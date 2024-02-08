import { mount } from '@vue/test-utils';
import CalculatorMain from '../src/components/CalculatorMain.vue';

describe('CalculatorMain', () => {
  it('should set result to null if input is empty', () => {
    const wrapper = mount(CalculatorMain);
    wrapper.setData({ input: '' });

    wrapper.vm.calculate();

    expect(wrapper.vm.result).toBeNull();
  });

  it('should calculate the sum of two numbers', () => {
    const wrapper = mount(CalculatorMain);
    wrapper.setData({ input: '2+3' });

    wrapper.vm.calculate();

    expect(wrapper.vm.result).toBe(5);
  });

  it('should calculate the difference of two numbers', () => {
    const wrapper = mount(CalculatorMain);
    wrapper.setData({ input: '5-2' });

    wrapper.vm.calculate();

    expect(wrapper.vm.result).toBe(3);
  });

 

});