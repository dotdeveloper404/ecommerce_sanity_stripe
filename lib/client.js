import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const  client = sanityClient({
    projectId:'o7v86170',
    dataset: 'ecommerce',
    apiVersion:'2023-04-16',
    useCdn:'true',
    token :process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder  = imageUrlBuilder(client);
console.log(builder);
 export const urlFor = (source) => builder.image(source);