import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featuredInfo',
  title: 'Featured Info Block',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Featured Projects'
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Showcasing Our Finest Expertise'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
})