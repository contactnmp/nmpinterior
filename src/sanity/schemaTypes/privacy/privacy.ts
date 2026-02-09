import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'privacy',
  title: 'Страница: Политика',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок страницы',
      type: 'string',
      initialValue: 'Privacy Policy'
    }),
    defineField({
      name: 'policyBlocks',
      title: 'Блоки текста',
      description: 'Добавляй сюда разделы (Introduction, Data we collect и т.д.)',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Раздел',
          fields: [
            defineField({
              name: 'heading',
              title: 'Заголовок раздела (например, 1. Introduction)',
              type: 'string',
            }),
            defineField({
              name: 'text',
              title: 'Текст раздела',
              type: 'text',
              rows: 6,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactNote',
      title: 'Текст внизу (контакты)',
      type: 'text',
      rows: 2,
      initialValue: 'If you have any questions about this privacy policy, please contact us at studiocontact@nmpinteriors.co.uk'
    }),
  ],
})