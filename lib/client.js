import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: 'cjni7e8y',
  dataset: 'production',
  apiVersion: '2022-08-15',
  useCdn: true,
  token:
    'ski6y9M0xE0egmDxraZWEaImoBoQH1lJxvbt8dd3s610C2iHHVJF6TerA51SiOP6VQ488VeaLUXqcc0FvuXXzL3Cccc5QvAiUum5R1nKj1fkpBPJzsnVWF8xPEkaYigUPtIirSw7D5PhPxGlK1ENMsJyZ8tOg6akOx4QnoJx76otyt7xHwBI',

});

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)