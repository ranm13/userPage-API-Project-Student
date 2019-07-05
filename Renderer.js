class Renderer {
    
   renderHendelbar(templateId, objToTemplate, appendToPlace) {
        $(appendToPlace).empty()
        const source = $(templateId).html();
        const template = Handlebars.compile(source)
        const newHTML = template(objToTemplate);
        $(appendToPlace).append(newHTML);
    }

    _renderUsers(users) {
        this.renderHendelbar("#user-template", users, ".user-container" )
    }

    _renderFriends(users) { 
        this.renderHendelbar("#user-friends-template", users, ".friends-container" )
    }

    _renderQuote(quoteInfo) {
        this.renderHendelbar("#quote-template", quoteInfo, ".quote-container" )
    }

    _renderPokemon(pokemonInfo) { 
        this.renderHendelbar("#pokemon-template", pokemonInfo, ".pokemon-container" )
    }

    _renderMeat(meatText) { 
        this.renderHendelbar("#meat-template", meatText, ".meat-container" )
    }

    renderLoadedData(loadedData){
        this.renderHendelbar("#dropup-content-template", loadedData, ".dropup-content" )
    }

    render(data){
        this._renderUsers(data.user)
        this._renderFriends(data.user)
        this._renderQuote(data)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data)
    }
}