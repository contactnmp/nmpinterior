import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroInfo',
  title: 'Блок: Инфо (Тексты Hero)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Главный заголовок',
      description: 'Например: Thoughtful design, calm confidence...',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      description: 'Например: NMP is a boutique interior design studio...',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'buttonText',
      title: 'Текст кнопки',
      type: 'string',
      initialValue: 'Book a consultation',
    }),
  ],
})