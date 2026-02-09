import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Проекты (Portfolio)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название проекта',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Главное фото',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Описание',
      description: 'Текст, который выводится рядом с фото',
      type: 'text',
      rows: 4,
    }),
  ],
})