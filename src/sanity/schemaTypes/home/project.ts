import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects (Portfolio)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      description: 'Text displayed next to the photo',
      type: 'text',
      rows: 4,
    }),
  ],
})