import { categories } from '../constants';

export function generateCategoriesOptions(parentNode) {
  for (const category of categories) {
    const c = document.createElement('option');
    c.value = category.slug;
    c.innerText = category.name;
    parentNode.appendChild(c);
  }
}
