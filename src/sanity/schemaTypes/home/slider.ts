import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'slider',
  title: 'Slider Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSlider',
      title: 'Hero Screen Slider',
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