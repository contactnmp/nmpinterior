import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projectsPage',
  title: 'Page: Projects (Settings)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Projects',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'seoDescription',
        title: 'SEO Description',
        type: 'text',
        rows: 3
    })
  ],
})