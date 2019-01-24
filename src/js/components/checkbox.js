export default class Checkbox {
  constructor(id, labelText) {
    const div = document.createElement('div');
    div.id = id
    div.classList.add('checkbox_wrapper');
    div.innerHTML = `
    <div class="checkbox_label">
        ${labelText}
    </div>
    <div class="switch_box">
        <div class="checkbox_input_wrapper">
        <input type="checkbox" class="switch_4" />
        <svg xmlns="http://www.w3.org/2000/svg" class="is_checked" viewBox="0 0 426.67 426.67">
            <path d="M153.5 366.84c-8.65 0-17.32-3.3-23.92-9.91L9.9 237.26a33.84 33.84 0 1 1 47.87-47.86l95.72 95.73L368.9 69.74a33.84 33.84 0 1 1 47.85 47.87L177.44 356.93a33.75 33.75 0 0 1-23.94 9.9z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="is_unchecked" viewBox="0 0 212.982 212.982">
            <path fill-rule="evenodd" d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" clip-rule="evenodd"/>
        </svg>
        </div>
    </div>
    `;
    return div;
  }
}
