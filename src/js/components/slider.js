export default class Slider {
  constructor(id, minValue, maxValue, curValue, step) {
    const slider = document.createElement('input');
    slider.id = id;
    slider.setAttribute('type', 'range');
    slider.setAttribute('min', minValue);
    slider.setAttribute('max', maxValue);
    slider.setAttribute('step', step);
    slider.value = curValue;
    return slider;
  }
}
