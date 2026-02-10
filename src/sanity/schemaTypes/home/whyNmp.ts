import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'whyNmp',
  title: 'Why NMP Block',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Small Heading',
      type: 'string',
      initialValue: 'Why NMP?'
    }),
    defineField({
      name: 'subheading',
      title: 'Main Heading (H2)',
      type: 'text',
      rows: 2,
      initialValue: 'Because every project is guided from concept to completion'
    }),
    defineField({
      name: 'cards',
      title: 'Service Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Service',
          fields: [
            defineField({
              name: 'title',
              title: 'Title (Interior Design)',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle (From first idea...)',
              type: 'string', 
            }),
            defineField({
              name: 'description',
              title: 'Main Text',
              type: 'text',
              rows: 3,
            }),
          ],
        },
      ],
    }),
  ],
})