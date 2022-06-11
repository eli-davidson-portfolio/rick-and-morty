const getCharacters = async (charactersIds = "", search = "") => {
    let url = `https://rickandmortyapi.com/api/character`
    if (charactersIds) {
        url = `${url}/${charactersIds}`
    } 
    if (search) {
        url = `${url}/${search}`
    }
   return await fetch(url, {
    method: 'GET',
    redirect: 'follow'
    })
    .then(response => response.json())
}

const getLocations = async (locationIds = "", search = "") => {
    let url = `https://rickandmortyapi.com/api/location`
    if (locationIds) {
        url = `${url}/${locationIds}`
    } 
    if (search) {
        url = `${url}/${search}`
    }
    return await fetch(url, {
        method: 'GET',
        redirect: 'follow'
        })
        .then(response => response.json())
}

const getEpisodes = async (episodeIds = "", search = "") => {
    let url = `https://rickandmortyapi.com/api/episode`
    if (episodeIds) {
        url = `${url}/${episodeIds}`
    } 
    if (search) {
        url = `${url}/${search}`
    }
    return await fetch(url, {
            method: 'GET',
            redirect: 'follow'
            })
            .then(response => response.json())

}

export {getCharacters, getLocations, getEpisodes}