import { generateCategoriesOptions } from '../components/category_select';
import { setNavLabelText, removeChildrenNodes, copyTextToClipboard } from '../utils';
import { searchRepositories, userExists } from '../github';
import { GHListItem } from '../components/github_repo_list';

export const setupNewContributionPage = () => {
  const catSelect = document.querySelector('#ut-new-contribution .ut-category__select');
  generateCategoriesOptions(catSelect);

  const repoList = document.querySelector('.gh-list');
  repoList && selectListItem(repoList);

  setupCopyTemplate();

  validateGitHubUserOnInput();
  updateGHListOnInput();
};

const setupCopyTemplate = () => {
  const copyBtn = document.querySelector('#copy-contribution-template');
  copyBtn &&
    copyBtn.addEventListener('click', async () => {
      await copyTemplateToClipboard();
    });
};

const validateGitHubUserOnInput = () => {
  const inputDiv = document.querySelector('#github-user');
  let to;
  inputDiv &&
    inputDiv.addEventListener('input', e => {
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
      }, 400);
    });
};

const selectListItem = listNode =>
  listNode.addEventListener('click', e => {
    const t = e.target;
    let closest;
    if (t && (closest = t.closest('.gh-list__item'))) {
      const item = document.querySelector('.gh-list__item--selected');
      item && item.classList.remove('gh-list__item--selected');
      closest.classList.add('gh-list__item--selected');
    }
  });

const updateGHListOnInput = () => {
  const repoList = document.querySelector('.gh-list');
  const inputDiv = document.querySelector('#github-search');
  const input = inputDiv.querySelector('input');
  let to;
  input &&
    input.addEventListener('input', async e => {
      if (!(e.target && e.target.value.length > 0)) {
        inputDiv.classList.remove('ut-input--valid');
        inputDiv.classList.remove('ut-input--error');
      }
      to && window.clearTimeout(to);
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
          repoList.appendChild(createRepoListItem(repos[i]));
        }
      }, 400);
    });
};

const createRepoListItem = repoJson => {
  const {
    owner: { avatar_url: avatarURL, login: username },
    full_name: repoFullName,
    pushed_at: repoLastUpdate,
    stargazers_count: repoStarsCount,
    forks_count: repoForksCount,
    html_url: repoURL,
  } = repoJson;
  const repoLicense = (repoJson.license && repoJson.license.spdx_id) || 'NONE';
  const li = new GHListItem({
    avatarURL,
    username,
    repoFullName,
    repoLastUpdate: (repoLastUpdate && repoLastUpdate.split('T')[0]) || 'Unknown',
    repoStarsCount,
    repoForksCount,
    repoLicense,
    repoURL,
  });
  return li;
};

const copyTemplateToClipboard = async () => {
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
  tBody = tBody.replace(/::GH_PROFILE::/g, ghUserUrl || '');
  tBody = tBody.replace(/::REPO_URL::/g, ghRepoUrl || '');

  copyTextToClipboard(tBody);
};

export const setNewContributionPageNavText = () => setNavLabelText('Templates');
