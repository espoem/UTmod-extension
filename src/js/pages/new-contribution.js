import { generateCategoriesOptions } from '../components/category_select';
import { setNavLabelText } from '../utils';

export function setupNewContributionPage() {
  const catSelect = document.querySelector('#ut-new-contribution .ut-category__select');
  generateCategoriesOptions(catSelect);
}

export function setNewContributionPageNavText() {
  setNavLabelText('Contribution templates');
}
