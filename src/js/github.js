const ghApiUrl = 'https://api.github.com';
const ghSearchReposUrl = `${ghApiUrl}/search/repositories`;
const ghUserRepositories = `${ghApiUrl}/users/:username/repos`;
const ghUser = `${ghApiUrl}/users/:username`;

const headers = new Headers();
headers.append('Accept', 'application/vnd.github.v3+json');

const timeMonth = 60 * 60 * 24 * 30 * 1000;
const timeEightMonths = timeMonth * 8;

export async function searchRepositories(queryText) {
  if (!queryText) {
    return {};
  }
  queryText = queryText.trim();
  console.log(`Searching for repos: ${queryText}`);
  const q = queryText.replace(/\s+/, '+');
  const past = beforeSixMonthsString();
  const out = {};
  const resp = await fetch(`${ghSearchReposUrl}?q=${q}+pushed:>${past}`, { headers });
  if (!resp.ok) {
    console.log("Can't search for", queryText);
  } else {
    const json = await resp.json();
    for (let i = 0, len = json.items.length; i < len; ++i) {
      out[json.items[i].full_name] = json.items[i];
    }
  }

  const user = queryText
    .split('/')[0]
    .split(' ')[0]
    .trim();
  const parts = queryText.split(/[\s/_-]/);
  const r = await getUserRepositories(user);
  for (let i = 0, len = r.length; i < len; ++i) {
    if (new RegExp(r[i].name).test(queryText)) {
      out[r[i].full_name] = r[i];
    } else if (parts.length > 1) {
      for (let j = 0, lp = parts.length; j < lp; ++j) {
        if (parts[j] && new RegExp(parts[j]).test(r[i].name)) {
          out[r[i].full_name] = r[i];
        }
      }
    } else {
      out[r[i].full_name] = r[i];
    }
  }

  return Object.values(out);
}

export async function getUserRepositories(username) {
  console.log(`Getting repositories of user ${username}`);
  const resp = await fetch(ghUserRepositories.replace(/:username/, username), { headers });
  if (!resp.ok) {
    console.log("Can't get repositories of", username);
    return [];
  }
  return await resp.json();
}

export async function getUser(username) {
  const resp = await fetch(ghUser.replace(/:username/, username), { headers });
  if (!resp.ok) {
    return {};
  }

  const json = await resp.json();
  console.log('User', json);
  return json;
}

function beforeSixMonthsString() {
  const past = new Date(new Date().getTime() - timeEightMonths);
  return past.toISOString().split('T')[0];
}

export async function userExists(username) {
  const user = await getUser(username);
  return username === user.login;
}
