

export async function generateStaticParams(){
    const resp = await fetch(
        "https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/properties",
        { next: { revalidate: 5 } }
      );
    
      const propertiesData = await resp.json();
    
      return propertiesData.map((singleproperty) => ({
        slug: singleproperty.slug,
      }));
}

const SingleBlog = async({params}) => {
    const apiResponse = await fetch(
        `https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/properties?slug=${params.slug}`,
        { next: { revalidate: 5 } }
    );
    const data = await apiResponse.json();

    const singleProperty = Array.isArray(data) ? data[0] : data;

    if (!singleProperty) {
    return <div>Property not found</div>;
    }

    return <div className="border py-4 ourContainer">
        <h1>{singleProperty?.acf?.location}</h1>
        <div dangerouslySetInnerHTML={{__html:singleProperty?.content?.rendered}} ></div>
    </div>; 
  
}

export default SingleBlog