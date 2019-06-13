// your code here

function showRepositories() {
  console.log(this.responseText)
  let repoList = '<ul>'
  for (var i = 0; i < this.responseText.length; i++) {
    repoList += '<li>' + this.responseText[i]['name'] + '</li>'
  }
  repolist += '</ul>'
  
  document.getElementById('repositories').innerHTML = repoList
}


function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener('load', showRepositories)
  req.open('GET', 'https://api.github.com/users/octocat/repos')
  req.send()
}

