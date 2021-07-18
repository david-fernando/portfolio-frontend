// import fetch from 'node-fetch'

function returnImageFromRepository(repository){

  const headers = {
    "Content-Type": "application/json",
    Authorization: "bearer " + process.env.GRAPHQL_TOKEN,
  }

  const url = "https://api.github.com/graphql";

  const body = {
    query: `
    query { 
      repository(owner: "david-fernando", name: "${repository}") {
        openGraphImageUrl
      }
    }
    `
  }

  const imageUrl = async()=> {
    const data =  await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
      })
      .then((response) => response.text())
      .then((string) => { 
        const data = JSON.parse(string)
  
        return data.data.repository.openGraphImageUrl
      }).catch((error)=>console.log(error))

      return data
  }

  return {
    imageUrl
  }

}

export default returnImageFromRepository