import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ourApproach',
  title: 'Our Approach Block',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Our unique approach'
    }),
    defineField({
      name: 'heading1',
      title: 'Heading Part 1',
      description: 'Bold text at the beginning (We begin with people...)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heading2',
      title: 'Heading Part 2',
      description: 'Continuation of the heading (From there, we create...)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description',
      title: 'Main Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Get in touch'
    }),
    defineField({
      name: 'image',
      title: 'Image Right',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})