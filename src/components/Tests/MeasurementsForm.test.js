import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import MeasurementsForm from '../MeasurementsForm.vue';

describe('MeasurementsForm.vue', () => {
  it('renders the initial height value correctly from the range input', () => {
    const wrapper = mount(MeasurementsForm);
    const heightRangeInput = wrapper.find('input[id="heightRangeInput"]');
    expect(heightRangeInput.element.value).toBe('36');
  });

  it('renders the initial height value correctly from the text input', () => {
    const wrapper = mount(MeasurementsForm);
    const heightTextInput = wrapper.find('input[id="heightTextInput"]');
    expect(heightTextInput.element.value).toBe('36');
  });

  it('updates the height value when the range input is changed', async () => {
    const wrapper = mount(MeasurementsForm);
    const heightRangeInput = wrapper.find('input[id="heightRangeInput"]');
    const heightTextInput = wrapper.find('input[id="heightTextInput"]');
    await heightRangeInput.setValue(50);
    expect(heightTextInput.element.value).toBe('50');
    expect(heightRangeInput.element.value).toBe('50');
  });
});