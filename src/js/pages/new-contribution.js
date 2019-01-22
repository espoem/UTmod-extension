import { generateCategoriesOptions } from '../components/category_select';
import { setNavLabelText, removeChildrenNodes, copyTextToClipboard } from '../utils';
import { searchRepositories, userExists } from '../github';
import { GHListItem } from '../components/github_repo_list';

export async function setupNewContributionPage() {
  const catSelect = document.querySelector('#ut-new-contribution .ut-category__select');
  generateCategoriesOptions(catSelect);

  const repoList = document.querySelector('.gh-list');
  repoList && selectListItem(repoList);

  setupCopyTemplate();

  validateGitHubUserOnInput();
  updateGHListOnInput();
}

function setupCopyTemplate() {
  const copyBtn = document.querySelector('#copy-contribution-template');
  copyBtn
    && copyBtn.addEventListener('click', async () => {
      await copyTemplateToClipboard();
    });
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
            html_url: repoURL,
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
            repoURL,
          });
          repoList.appendChild(li.render());
        }
      }, 500);
    });
}

async function copyTemplateToClipboard() {
  const categorySelect = document.querySelector('#ut-new-contribution .ut-category__select');
  if (!categorySelect) {
    console.log("Can't copy template. No category select node.");
    return;
  }

  const ghUserNode = document.querySelector('#github-user.ut-input--valid input');
  const ghRepoNode = document.querySelector('#ut-new-contribution .gh-list__item--selected');

  const templateFile = chrome.runtime.getURL(
    `post_templates/${categorySelect.options[categorySelect.selectedIndex].value}.md`,
  );

  const tResp = await fetch(templateFile);
  let tBody = await tResp.text();
  const ghUserUrl = ghUserNode && `https://github.com/${ghUserNode.value}`;
  const ghRepoUrl = ghRepoNode && ghRepoNode.getAttribute('data-repo-url');
  console.log(ghRepoUrl)
  tBody = tBody.replace(/::GH_PROFILE::/, ghUserUrl || '');
  tBody = tBody.replace(/::REPO_URL::/g, ghRepoUrl || '');

  copyTextToClipboard(tBody);
}

export function setNewContributionPageNavText() {
  setNavLabelText('Templates');
}
