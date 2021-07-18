/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
import returnSpecificRepositories from '../../utils/returnSpecificRepositories'

export default (request, response) => {

  const {
    query: { api }
  } = request

  const getGit = async()=>{
    const data = await axios.get('https://api.github.com/users/david-fernando/repos')

    const repositoryNames = [
      'Listador_de_arquivos',
      'KeyboardVideoController',
      'medium-posts-api',
      'noLoopFor',
      'react-electron-ts'
    ]

    const specificRepositories = returnSpecificRepositories(repositoryNames, data.data)

    const repositorys = [
      {
        title: specificRepositories[1].name,
        link: specificRepositories[1].html_url,
        description: specificRepositories[1].description,
      }, 
      {
        title: specificRepositories[0].name,
        link: specificRepositories[0].html_url,
        description: specificRepositories[0].description,
      }, 
      {
        title: specificRepositories[2].name,
        link: specificRepositories[2].html_url,
        description: specificRepositories[2].description,
      }, 
      {
        title: specificRepositories[3].name,
        link: specificRepositories[3].html_url,
        description: specificRepositories[3].description,
      }, 
      {
        title: specificRepositories[4].name,
        link: specificRepositories[4].html_url,
        description: specificRepositories[4].description,
      }
    ]      
    
    try {
      let image

      for(let index = 0; index < repositoryNames.length; index++){

        const data = await axios.get(`https://githubcardapi.herokuapp.com/?githubuser=david-fernando&repository=${repositoryNames[index]}`)

        image = data.data.imageUrl
        
        repositorys[index].image = image
      }

      return response.json(repositorys)

    }catch(error){
      console.log(error)
    }

  }
  const getMedium = async()=>{
    const data = await axios.get('https://mediumpostsapi.herokuapp.com/?usermedium=davidfernandodamata21')

    return response.json(data.data)
  }

  const responseData = {
    git: getGit,
    medium: getMedium
  }

  try {
    responseData[api]()    
  } catch {
    return response.json({ message: 404 })
  }

}