import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    // Title (Bilingual)
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'es', type: 'string', title: 'Spanish'},
        {name: 'en', type: 'string', title: 'English'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    
    // Description (Bilingual)
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'es', type: 'text', title: 'Spanish'},
        {name: 'en', type: 'text', title: 'English'},
      ],
    }),
    
    // Price
    defineField({
      name: 'price',
      title: 'Price (ARS)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    
    // Images
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule) => Rule.required().min(1),
    }),
    
    // Product Type
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          {title: 'Remeras', value: 'remeras'},
          {title: 'Buzos', value: 'buzos'},
          {title: 'Tazas', value: 'tazas'},
          {title: 'Gorras', value: 'gorras'},
          {title: 'Calcomanías', value: 'calcomanias'},
          {title: 'Pins', value: 'pins'},
          {title: 'Parches', value: 'parches'},
          {title: 'Puas', value: 'puas'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    
    // Gender
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          {title: 'Hombres', value: 'hombres'},
          {title: 'Mujeres', value: 'mujeres'},
          {title: 'Niños', value: 'ninos'},
          {title: 'Unisex', value: 'unisex'},
        ],
      },
    }),
    
    // Band Name
    defineField({
      name: 'band',
      title: 'Band/Artist',
      type: 'string',
    }),
    
    // Stock Status
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  
  preview: {
    select: {
      titleEs: 'title.es',
      titleEn: 'title.en',
      media: 'images.0',
      price: 'price',
    },
    prepare({titleEs, titleEn, media, price}) {
      return {
        title: titleEs || titleEn || 'Untitled',
        subtitle: price ? `$${price}` : 'No price',
        media,
      }
    },
  },
})