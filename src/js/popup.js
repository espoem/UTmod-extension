import '../sass/main.scss';
import { setupQuestionnairePage, setQuestionnairePageNavText } from './pages/questionnaire';
import { setupNewContributionPage, setNewContributionPageNavText } from './pages/new-contribution';
import { removeChildrenNodes } from './utils';

const pagesIds = {
  QUESTIONNAIRE: 'ut-questionnaire',
  NEW_CONTRIBUTION: 'ut-new-contribution',
};

window.addEventListener('DOMContentLoaded', () => {
  setupQuestionnairePage();
  setupNewContributionPage();

  setupPageSwitching();
});

function setupPageSwitching() {
  const tabs = document.querySelectorAll('.ut-tabs > *');
  for (let i = 0, len = tabs.length; i < len; ++i) {
    tabs[i].addEventListener('click', () => {
      switchToPage(i, tabs);
    });
  }
}

function switchToPage(tabIndex, tabs) {
  if (!tabs) {
    return;
  }
  emptyNavbar();
  let id;
  for (let i = 0, len = tabs.length; i < len; ++i) {
    if (tabs[i].classList.contains('ut-tabs--active')) {
      tabs[i].classList.remove('ut-tabs--active');
      id = `ut-${tabs[i].id.slice(4)}`;
      const page = document.querySelector(`#${id}`);
      if (page) {
        page.classList.remove('ut-body--active');
      }
    }
    if (i === tabIndex) {
      tabs[i].classList.add('ut-tabs--active');
      id = `ut-${tabs[i].id.slice(4)}`;
      const page = document.querySelector(`#${id}`);
      if (page) {
        switch (id) {
          case pagesIds.QUESTIONNAIRE:
            setQuestionnairePageNavText();
            break;
          case pagesIds.NEW_CONTRIBUTION:
            setNewContributionPageNavText();
            break;
        }
        page.classList.add('ut-body--active');
      }
    }
  }
}

function emptyNavbar() {
  const nav = document.querySelector('.ut-nav');
  if (!nav) {
    return;
  }
  const children = nav.children;
  for (let i = 0, len = children.length; i < len; ++i) {
    removeChildrenNodes(children[i]);
  }
}
