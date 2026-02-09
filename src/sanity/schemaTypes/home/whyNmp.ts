import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'whyNmp',
  title: 'Блок: Why NMP',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Маленький заголовок',
      type: 'string',
      initialValue: 'Why NMP?'
    }),
    defineField({
      name: 'subheading',
      title: 'Главный заголовок (H2)',
      type: 'text',
      rows: 2,
      initialValue: 'Because every project is guided from concept to completion'
    }),
    defineField({
      name: 'cards',
      title: 'Карточки услуг',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Услуга',
          fields: [
            defineField({
              name: 'title',
              title: 'Название (Interior Design)',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Подзаголовок (From first idea...)',
              type: 'string', 
            }),
            defineField({
              name: 'description',
              title: 'Основной текст',
              type: 'text',
              rows: 3,
            }),
          ],
        },
      ],
    }),
  ],
})