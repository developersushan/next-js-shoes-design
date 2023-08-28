
export default async function getUsers() {
    const response = await fetch('https://dummyjson.com/products',{
        cache:'no-cache'
    })
    if(!response.ok){
        throw new Error('field to fetch data')
    }
    return await response.json()
}
