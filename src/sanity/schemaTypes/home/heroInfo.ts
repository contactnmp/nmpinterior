import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroInfo',
  title: 'Hero Info Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Heading',
      description: 'Example: Thoughtful design, calm confidence...',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Example: NMP is a boutique interior design studio...',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Book a consultation',
    }),
  ],
})