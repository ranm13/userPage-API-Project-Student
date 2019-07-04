const apimanager = new APIManager
const renderer = new Renderer

const loadData = () => apimanager.loadData()
const renderData = () => renderer.render(apimanager.getData())

Handlebars.registerHelper('toProperCase', function(str) {
    const strArr = str.split(" ")
    for(let i in strArr){
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1)
    }
    return strArr.join(" ")
  })