class Renderer {
    
    //Helper function that empties the html that we will render to and render to it using hendelbars
   renderHendelbar(templateId, objToTemplate, appendToPlace) {
        $(appendToPlace).empty()
        const source = $(templateId).html();
        const template = Handlebars.compile(source)
        const newHTML = template(objToTemplate);
        $(appendToPlace).append(newHTML);
    }

    renderLoadedData(loadedData){
        this.renderHendelbar("#dropup-content-template", loadedData, ".dropup-content" )
    }

    render(data){
        this.renderHendelbar("#user-template", data.user, ".user-container" )
        this.renderHendelbar("#user-friends-template", data.user, ".friends-container" )
        this.renderHendelbar("#quote-template", data, ".quote-container" )
        this.renderHendelbar("#pokemon-template", data.pokemon, ".pokemon-container" )
        this.renderHendelbar("#meat-template", data, ".meat-container" )
    }
}