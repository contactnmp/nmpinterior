import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'Page: About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (About NMP)',
      type: 'string',
      initialValue: 'About NMP'
    }),
    defineField({
      name: 'description1',
      title: 'First Paragraph',
      description: 'Text about 25 years of experience...',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'description2',
      title: 'Second Paragraph',
      description: 'Text about approach and vision...',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      description: 'Boxed text (Design is not only...)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'mainImage',
      title: 'Image Right',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})