import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import MeasurementsForm from '../MeasurementsForm.vue';

describe('MeasurementsForm.vue', () => {
  it('renders the initial height value correctly', () => {
    const wrapper = mount(MeasurementsForm);
    const heightInput = wrapper.find('input[id="heightInput"]');
    expect(heightInput.element.value).toBe('36');
  });

  it('updates the height value when the range input is changed', async () => {
    const wrapper = mount(MeasurementsForm);
    const rangeInput = wrapper.find('input[type="range"]');
    await rangeInput.setValue(50);
    const heightInput = wrapper.find('input[type="text"]');
    expect(heightInput.element.value).toBe('50');
  });
});