import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ourApproach',
  title: 'Блок: Наш Подход (Our Approach)',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Надзаголовок',
      type: 'string',
      initialValue: 'Our unique approach'
    }),
    defineField({
      name: 'heading1',
      title: 'Первая часть заголовка',
      description: 'Жирный текст в начале (We begin with people...)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heading2',
      title: 'Вторая часть заголовка',
      description: 'Продолжение заголовка (From there, we create...)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description',
      title: 'Основной текст',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'buttonText',
      title: 'Текст кнопки',
      type: 'string',
      initialValue: 'Get in touch'
    }),
    defineField({
      name: 'image',
      title: 'Изображение справа',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})