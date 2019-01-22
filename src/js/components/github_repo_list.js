export class GHListItem {
  constructor({
    avatarURL,
    repoFullName,
    repoLastUpdate,
    repoStarsCount,
    repoForksCount,
    repoLicense,
    username,
  }) {
    this.node = document.createElement('li');
    this.node.classList.add('gh-list__item');

    // repo owner image
    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('gh-avatar');
    const avatarImg = document.createElement('img');
    avatarImg.setAttribute('src', avatarURL);
    avatarDiv.appendChild(avatarImg);

    // repo info
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

    this.node.appendChild(avatarDiv);
    this.node.appendChild(repoDiv);
  }

  render() {
    return this.node;
  }
}

export class GHList {
  constructor() {
    this.node = document.createElement('ul');
    this.node.classList.add('gh-list');
  }

  render() {
    return this.node;
  }
}
