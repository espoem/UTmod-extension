import { generateCategoriesOptions } from '../components/category_select';
import { setNavLabelText, removeChildrenNodes } from '../utils';
import { searchRepositories, userExists } from '../github';
import { GHListItem } from '../components/github_repo_list';

export async function setupNewContributionPage() {
  const catSelect = document.querySelector('#ut-new-contribution .ut-category__select');
  generateCategoriesOptions(catSelect);

  const repoList = document.querySelector('.gh-list');
  repoList && selectListItem(repoList);

  validateGitHubUserOnInput();
  updateGHListOnInput();
}

function searchGitHubRepoOnInput() {
  const input = document.querySelector('#github-search input');
  return new Promise((res) => {
    let to;
    input
      && input.addEventListener('input', (e) => {
        to && window.clearTimeout(to);
        let resp;
        to = window.setTimeout(async () => {
          resp = await searchRepositories(e.target.value);
          res(resp);
        }, 1000);
      });
  });
}

function validateGitHubUserOnInput() {
  const inputDiv = document.querySelector('#github-user');
  let to;
  inputDiv
    && inputDiv.addEventListener('input', (e) => {
      to && window.clearTimeout(to);
      if (!(e.target && e.target.value.length > 0)) {
        inputDiv.classList.remove('ut-input--valid');
        inputDiv.classList.remove('ut-input--error');
        return;
      }
      let resp;
      to = window.setTimeout(async () => {
        resp = await userExists(e.target.value);
        if (resp) {
          inputDiv.classList.remove('ut-input--error');
          inputDiv.classList.add('ut-input--valid');
        } else {
          inputDiv.classList.remove('ut-input--valid');
          inputDiv.classList.add('ut-input--error');
        }
      }, 500);
    });
}

function selectListItem(listNode) {
  listNode.addEventListener('click', (e) => {
    const t = e.target;
    let closest;
    if (t && (closest = t.closest('.gh-list__item'))) {
      const item = document.querySelector('.gh-list__item--selected');
      item && item.classList.remove('gh-list__item--selected');
      closest.classList.add('gh-list__item--selected');
    }
  });
}

function updateGHListOnInput() {
  console.log('updateGHListOnInput');
  const repoList = document.querySelector('.gh-list');
  const inputDiv = document.querySelector('#github-search');
  const input = inputDiv.querySelector('input');
  let to;
  input
    && input.addEventListener('input', async (e) => {
      to && window.clearTimeout(to);
      if (!(e.target && e.target.value.length > 0)) {
        inputDiv.classList.remove('ut-input--valid');
        inputDiv.classList.remove('ut-input--error');
        return;
      }
      to = window.setTimeout(async () => {
        const repos = await searchRepositories(input.value);
        console.log(repos);
        if (!repos || repos.length < 1) {
          inputDiv.classList.remove('ut-input--valid');
          inputDiv.classList.add('ut-input--error');
        } else {
          inputDiv.classList.remove('ut-input--error');
          inputDiv.classList.add('ut-input--valid');
        }
        removeChildrenNodes(repoList);
        for (let i = 0, l = Math.min(repos.length, 25); i < l; ++i) {
          const {
            owner: { avatar_url: avatarURL, login: username },
            full_name: repoFullName,
            pushed_at: repoLastUpdate,
            stargazers_count: repoStarsCount,
            forks_count: repoForksCount,
          } = repos[i];
          const repoLicense = (repos[i].license && repos[i].license.spdx_id) || 'NONE';
          const li = new GHListItem({
            avatarURL,
            username,
            repoFullName,
            repoLastUpdate: (repoLastUpdate && repoLastUpdate.split('T')[0]) || 'Uknown',
            repoStarsCount,
            repoForksCount,
            repoLicense,
          });
          repoList.appendChild(li.render());
        }
      }, 500);
    });
}

export function setNewContributionPageNavText() {
  setNavLabelText('Templates');
}
