import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Проект (Portfolio Item)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название проекта',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Ссылка (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Краткое описание',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'images',
      title: 'Галерея проекта',
      description: 'Загрузи сюда все фото. Первая будет главной.',
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