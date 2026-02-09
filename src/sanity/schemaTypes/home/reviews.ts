import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'reviews',
  title: 'Блок: Отзывы (Reviews)',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Надзаголовок',
      type: 'string',
      initialValue: 'SATISFIED CUSTOMERS'
    }),
    defineField({
      name: 'heading',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'Our Clients about Us'
    }),
    defineField({
      name: 'list',
      title: 'Список отзывов',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Отзыв',
          fields: [
            defineField({
              name: 'name',
              title: 'Имя клиента',
              type: 'string',
              description: 'Например: Amelia K.',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Текст отзыва',
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