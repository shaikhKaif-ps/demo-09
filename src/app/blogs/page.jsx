import Link from "next/link"

const page = async () => {
    const x = await fetchAllbolg()
    // console.log(x)
  return (
    <main className="ourContainer">
        {
            x && x.map((blog)=>{
                return(
                    <Link href={`blogs/${blog?.slug}`} className="block border m-4 p-4" key={blog?.id} >
                        <h1>{blog?.title?.rendered}</h1>
                    </Link>
                )
            })
        }
    </main>
  )
}


const fetchAllbolg = async() =>{
    const resp = await fetch(`https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/properties`)
    const allBlogs = await resp.json()

    return allBlogs
}
export default page