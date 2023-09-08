
import getUsers from '../libs/getUsers'
import Link from 'next/link'

export default async function page() {
    const users = await getUsers()
    const userData = users.products
    // console.log(users.products)
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10'>
            {
                userData.map(product => {
                    return (
                        <div key={product.id}>
                            <Link href={`/users/${product.id}`}>
                            <img src={product.thumbnail} width={400} height={400} alt="" />
                                <h3 className='text-xl'>{product.title}</h3>
                            </Link>

                        </div>
                    )
                })
            }
        </div>
    )
}
