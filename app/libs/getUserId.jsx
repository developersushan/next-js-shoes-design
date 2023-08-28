
export default async function getUserId(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`,{
        cache:'no-cache'
    })
    if(!response.ok){
        throw new Error('field to fetch data id')
    }
  return await response.json()
}
