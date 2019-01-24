export class GHListItem {
  constructor({
    avatarURL,
    repoFullName,
    repoLastUpdate,
    repoStarsCount,
    repoForksCount,
    repoLicense,
    repoURL,
    username,
  }) {
    const li = document.createElement('li');
    li.classList.add('gh-list__item');
    li.setAttribute('data-repo-url', repoURL);

    const avatarDiv = this.createAvatarDiv(avatarURL);
    const repoDiv = this.createRepoDiv(
      username,
      repoFullName,
      repoLastUpdate,
      repoStarsCount,
      repoForksCount,
      repoLicense,
    );

    li.appendChild(avatarDiv);
    li.appendChild(repoDiv);
    return li;
  }

  createRepoDiv(
    username,
    repoFullName,
    repoLastUpdate,
    repoStarsCount,
    repoForksCount,
    repoLicense,
  ) {
    const repoDiv = document.createElement('div');
    repoDiv.classList.add('gh-repo');
    repoDiv.setAttribute('data-username', username);
    const repoFullnameDiv = document.createElement('div');
    repoFullnameDiv.classList.add('gh-repo__fullname');
    repoFullnameDiv.innerHTML = repoFullName;
    const repoInfoDiv = document.createElement('div');
    repoInfoDiv.classList.add('gh-repo__info');
    const repoUpdateDiv = document.createElement('div');
    repoUpdateDiv.classList.add('gh-repo__update-time');
    repoUpdateDiv.innerHTML = repoLastUpdate;
    const repoStarsDiv = document.createElement('div');
    repoStarsDiv.classList.add('gh-repo__stars');
    repoStarsDiv.innerHTML = repoStarsCount;
    const repoForksDiv = document.createElement('div');
    repoForksDiv.classList.add('gh-repo__forks');
    repoForksDiv.innerHTML = repoForksCount;
    const repoLicenseDiv = document.createElement('div');
    repoLicenseDiv.classList.add('gh-repo__license');
    repoLicenseDiv.innerHTML = repoLicense;
    repoInfoDiv.appendChild(repoUpdateDiv);
    repoInfoDiv.appendChild(repoLicenseDiv);
    repoInfoDiv.appendChild(repoStarsDiv);
    repoInfoDiv.appendChild(repoForksDiv);
    repoDiv.appendChild(repoFullnameDiv);
    repoDiv.appendChild(repoInfoDiv);
    return repoDiv;
  }

  createAvatarDiv(avatarURL) {
    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('gh-avatar');
    const avatarImg = document.createElement('img');
    avatarImg.setAttribute('src', avatarURL);
    avatarDiv.appendChild(avatarImg);
    return avatarDiv;
  }
}
