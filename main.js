const apimanager = new APIManager
const renderer = new Renderer

const loadData = () => apimanager.loadData()
const renderData = () => renderer.render(apimanager.getData())

const saveUserPage = () => {
    let name = apimanager.getData().user.firstName + " " + apimanager.getData().user.lastName
    let users = JSON.parse(localStorage.users || "{}")
    users[name] = apimanager.getData()
    localStorage.users = JSON.stringify(users)
}

//loading the keys of saved users into the dropup menu
const loadUserPage = () => {
    let object = Object.keys(JSON.parse(localStorage.users))
    renderer.renderLoadedData({object})
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