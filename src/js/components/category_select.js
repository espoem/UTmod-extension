import { categories } from '../constants';

export const generateCategoriesOptions = parent => categories.forEach((category) => {
  const o = document.createElement('option');
  o.value = category.slug;
  o.innerText = category.name;
  parent.appendChild(o);
});
