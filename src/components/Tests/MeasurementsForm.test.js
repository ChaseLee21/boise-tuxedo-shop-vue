import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import MeasurementsForm from '../MeasurementsForm.vue';

describe('MeasurementsForm.vue', () => {
  it('renders the initial height value correctly from the range input', () => {
    const wrapper = mount(MeasurementsForm);
    const heightRange = wrapper.find('input[id="heightRange"]');
    expect(heightRange.element.value).toBe('46');
  });

  it('renders the initial height value correctly from the text input', () => {
    const wrapper = mount(MeasurementsForm);
    const heightString = wrapper.find('input[id="heightString"]');
    expect(heightString.element.value).toBe(`5'9"`);
  });

  it('updates the height value when the range input is changed', async () => {
    const wrapper = mount(MeasurementsForm);
    const heightRange = wrapper.find('input[id="heightRange"]');
    const heightString = wrapper.find('input[id="heightString"]');
    await heightRange.setValue(50);
    expect(heightString.element.value).toBe(`6'1"`);
    expect(heightRange.element.value).toBe('50');
  });
});