const getCharactors = async () => {
   return await fetch("https://rickandmortyapi.com/api/character", {
    method: 'GET',
    redirect: 'follow'
    })
    .then(response => response.json())
}

const getLocations = async () => {
    return await fetch("https://rickandmortyapi.com/api/location", {
        method: 'GET',
        redirect: 'follow'
        })
        .then(response => response.json())
}

const getEpisodes = async () => {
    return await fetch("https://rickandmortyapi.com/api/episode", {
            method: 'GET',
            redirect: 'follow'
            })
            .then(response => response.json())

}

export {getCharactors, getLocations, getEpisodes}