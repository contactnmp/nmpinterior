import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'reviews',
  title: 'Reviews Block',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'SATISFIED CUSTOMERS'
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Our Clients about Us'
    }),
    defineField({
      name: 'list',
      title: 'Reviews List',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Review',
          fields: [
            defineField({
              name: 'name',
              title: 'Client Name',
              type: 'string',
              description: 'Example: Amelia K.',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Review Text',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})