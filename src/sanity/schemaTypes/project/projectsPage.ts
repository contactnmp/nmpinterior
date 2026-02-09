import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projectsPage',
  title: 'Страница: Проекты (Настройки)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок страницы',
      type: 'string',
      initialValue: 'Projects',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'seoDescription',
        title: 'SEO Описание',
        type: 'text',
        rows: 3
    })
  ],
})