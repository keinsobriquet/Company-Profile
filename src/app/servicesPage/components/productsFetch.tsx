import TemplateFetch from "./templateFetch";


export default async function ProductsFetch() {
    const productsFetch = await fetch("https://cdn.contentful.com/spaces/x9i4oat15p37/environments/master/entries?access_token=d-9gg1hZdhW5P8j7IXscyvGbzdxPmAWTUDkKcUlknCs")
    const productsData = await productsFetch.json()
    // console.log(productsData.items[0].fields.name);
    // console.log(productsData.items[0].fields.content.content[0].content[0].value);
    // console.log(productsData.includes.Asset[1].fields.file.url);
    

    return(
        <div className="flex flex-wrap gap-7 py-10 pl-12 lg:pl-10 pt-20">
            <TemplateFetch 
            image={productsData.includes.Asset[0].fields.file.url} 
            title={productsData.items[4].fields.name} 
            caption={productsData.items[4].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[1].fields.file.url} 
            title={productsData.items[14].fields.name} 
            caption={productsData.items[14].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[2].fields.file.url} 
            title={productsData.items[24].fields.name} 
            caption={productsData.items[24].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[3].fields.file.url} 
            title={productsData.items[5].fields.name} 
            caption={productsData.items[5].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[11].fields.file.url} 
            title={productsData.items[7].fields.name} 
            caption={productsData.items[7].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[5].fields.file.url} 
            title={productsData.items[18].fields.name} 
            caption={productsData.items[18].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[6].fields.file.url} 
            title={productsData.items[28].fields.name} 
            caption={productsData.items[28].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[7].fields.file.url} 
            title={productsData.items[30].fields.name} 
            caption={productsData.items[30].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[8].fields.file.url} 
            title={productsData.items[22].fields.name} 
            caption={productsData.items[22].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[9].fields.file.url} 
            title={productsData.items[20].fields.name} 
            caption={productsData.items[20].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[12].fields.file.url} 
            title={productsData.items[17].fields.name} 
            caption={productsData.items[17].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[4].fields.file.url} 
            title={productsData.items[21].fields.name} 
            caption={productsData.items[21].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[10].fields.file.url} 
            title={productsData.items[0].fields.name} 
            caption={productsData.items[0].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[13].fields.file.url} 
            title={productsData.items[16].fields.name} 
            caption={productsData.items[16].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[14].fields.file.url} 
            title={productsData.items[8].fields.name} 
            caption={productsData.items[8].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[15].fields.file.url} 
            title={productsData.items[22].fields.name} 
            caption={productsData.items[22].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[16].fields.file.url} 
            title={productsData.items[10].fields.name} 
            caption={productsData.items[10].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[17].fields.file.url} 
            title={productsData.items[13].fields.name} 
            caption={productsData.items[13].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[18].fields.file.url} 
            title={productsData.items[12].fields.name} 
            caption={productsData.items[12].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[19].fields.file.url} 
            title={productsData.items[23].fields.name} 
            caption={productsData.items[23].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[20].fields.file.url} 
            title={productsData.items[3].fields.name} 
            caption={productsData.items[3].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[21].fields.file.url} 
            title={productsData.items[31].fields.name} 
            caption={productsData.items[31].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[22].fields.file.url} 
            title={productsData.items[11].fields.name} 
            caption={productsData.items[11].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[23].fields.file.url} 
            title={productsData.items[6].fields.name} 
            caption={productsData.items[6].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[24].fields.file.url} 
            title={productsData.items[19].fields.name} 
            caption={productsData.items[19].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[25].fields.file.url} 
            title={productsData.items[25].fields.name} 
            caption={productsData.items[25].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[26].fields.file.url} 
            title={productsData.items[15].fields.name} 
            caption={productsData.items[15].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[27].fields.file.url} 
            title={productsData.items[9].fields.name} 
            caption={productsData.items[9].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[28].fields.file.url} 
            title={productsData.items[1].fields.name} 
            caption={productsData.items[1].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[29].fields.file.url} 
            title={productsData.items[26].fields.name} 
            caption={productsData.items[26].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[30].fields.file.url} 
            title={productsData.items[27].fields.name} 
            caption={productsData.items[27].fields.content.content[0].content[0].value}/>

            <TemplateFetch 
            image={productsData.includes.Asset[31].fields.file.url} 
            title={productsData.items[29].fields.name} 
            caption={productsData.items[29].fields.content.content[0].content[0].value}/>
        </div>
    )
}