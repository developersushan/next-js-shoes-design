import getUserId from "@/app/libs/getUserId"
import Link from "next/link";

export default async function getUserInfo({ params: { id } }) {
    const productsId = await getUserId(id)
    console.log(productsId)
    const { title, category, description, price, images, brand, thumbnail } = productsId;
    return (
        <div>
            <div className="product w-[1000px] mx-auto  items-center mt-10 rounded-md bg-white text-black p-10">
                <img className="rounded" width={400} height={400} src={thumbnail} alt="" />
                <h2 className="text-2xl">Title:{title}</h2>
                <p>Description: {description}</p>
                <p>Category:{category}</p>
                <p className="text-orange-500">Price:${price}</p>
                <p><strong>Brand:{brand}</strong></p>
                <div className="flex gap-8 p-10">
                    {
                        images.map((item, index) => {
                            return (
                                <div key={index} className="shadow-lg" >
                                    <img src={item} width={150} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <Link href="/users"><button className="bg-indigo-500 p-2 text-white rounded-md">Back Home</button></Link>
            </div>
        </div>
    )
}
