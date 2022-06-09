const getCharactors = async () => {
   return await fetch("https://rickandmortyapi.com/api/character", {
            method: 'GET',
            redirect: 'follow'
            })
            .then(response => response.json())

}

const getLocations = async () => {
    await fetch("https://rickandmortyapi.com/api/location", {
            method: 'GET',
            redirect: 'follow'
            })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
}

const getEpisodes = async () => {
    await fetch("https://rickandmortyapi.com/api/episode", {
            method: 'GET',
            redirect: 'follow'
            })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
}

export {getCharactors, getLocations, getEpisodes}