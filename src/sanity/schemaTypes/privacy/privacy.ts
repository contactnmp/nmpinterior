import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'privacy',
  title: 'Page: Privacy Policy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Privacy Policy'
    }),
    defineField({
      name: 'policyBlocks',
      title: 'Text Blocks',
      description: 'Add sections here (Introduction, Data we collect, etc.)',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Section',
          fields: [
            defineField({
              name: 'heading',
              title: 'Section Heading (e.g., 1. Introduction)',
              type: 'string',
            }),
            defineField({
              name: 'text',
              title: 'Section Text',
              type: 'text',
              rows: 6,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactNote',
      title: 'Bottom Text (Contact)',
      type: 'text',
      rows: 2,
      initialValue: 'If you have any questions about this privacy policy, please contact us at contact@nmpinterior.co.uk'
    }),
  ],
})