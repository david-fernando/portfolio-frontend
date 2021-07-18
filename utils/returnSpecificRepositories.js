function returnSpecificRepositories(repositoryNames, data){
  let specificRepositories = []

  try {
    data.map((item, index) => {
      return repositoryNames.map((subItem, subIndex) => {
        if(data[index].name === repositoryNames[subIndex]){
          specificRepositories.push(data[index])
        }
      })
    })
  
    return specificRepositories
  }catch(error){
    return error
  }
  
}

export default returnSpecificRepositories