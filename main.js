const apimanager = new APIManager
const renderer = new Renderer

const loadData = () => apimanager.loadData()
const renderData = () => renderer.render(apimanager.getData())

const saveUserPage = function(){
    let currentUserData = apimanager.getData()
    let name = currentUserData.user.firstName + " " + currentUserData.user.lastName
    let users = JSON.parse(localStorage.users || "{}")
    users[name] = currentUserData
    localStorage.users = JSON.stringify(users)
}

//loading the keys of saved users into the dropup menu
const loadUserPage = function(){
    let SavedUsersList = JSON.parse(localStorage.users)
    let names = Object.keys(SavedUsersList)
    let savedUsersData = names.map(n => ({name: n, pic: SavedUsersList[n].user.picture}))
    renderer.renderLoadedData({savedUsersData})
}

//clicking on each user name will render his page 
$(".dropup-content").on("click", ".users-to-load", function(){
    let key = $(this).text().toLowerCase()
    renderer.render(JSON.parse(localStorage.users)[key])
})

Handlebars.registerHelper('toProperCase', function(str) {
    const strArr = str.split(" ")
    for(let i in strArr){
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1)
    }
    return strArr.join(" ")
  })
