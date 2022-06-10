const getCharacters = async (charactersIds = "", search = "") => {
    let url = `https://rickandmortyapi.com/api/character`
    if (charactersIds) {
        url = `${url}/${charactersIds}`
    } 
    if (search) {
        url = `${url}/?${search}`
    }
   return await fetch(url, {
    method: 'GET',
    redirect: 'follow'
    })
    .then(response => response.json())
}

const getLocations = async (locationIds) => {
    return await fetch("https://rickandmortyapi.com/api/location", {
        method: 'GET',
        redirect: 'follow'
        })
        .then(response => response.json())
}

const getEpisodes = async (episodeIds) => {
    return await fetch("https://rickandmortyapi.com/api/episode", {
            method: 'GET',
            redirect: 'follow'
            })
            .then(response => response.json())

}

export {getCharacters, getLocations, getEpisodes}