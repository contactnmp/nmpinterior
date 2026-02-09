import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'slider',
  title: 'Настройки: CЛАЙДЕРА',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSlider',
      title: 'Слайдер на первом экране',
      type: 'array', 
      of: [
        { 
          type: 'image', 
          options: { hotspot: true }
        }
      ],
      options: {
        layout: 'grid',
      }
    })
  ],
})