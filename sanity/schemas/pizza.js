
export default {
  name: 'pizza',
  title: 'pizza',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image Pizza',
      type: 'image',
      options:{
        hotspot:true
      }
    },
    {
        name: 'name',
        title: 'Nom Pizza',
        type:'string'
    },
    {
        name:'slug',
        title:'slug',
        type:'slug',
        options:{
            source: 'name',
            maxLength: 90
        }
    },
    {
        name:'price',
        title:'prix',
        type: 'array',
        of:[{type:'number'}]
    },
    {
        name:'description',
        title:'description',
        type:'string'
    },
    {
        name:'details',
        title:'details',
        type:'string'
    }
  ],
};