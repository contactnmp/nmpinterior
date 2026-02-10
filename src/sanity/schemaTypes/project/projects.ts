import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Project (Portfolio Item)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'images',
      title: 'Project Gallery',
      description: 'Upload all photos here. The first one will be the main image.',
      type: 'array',
      of: [
        { 
          type: 'image', 
          options: { hotspot: true } 
        }
      ],
      options: {
        layout: 'grid',
      },
      validation: (rule) => rule.required().min(1), 
    }),
  ],
})