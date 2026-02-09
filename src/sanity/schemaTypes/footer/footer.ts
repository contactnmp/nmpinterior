import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'ctaHeading',
      title: 'CTA Heading (Ready to Design...)',
      type: 'string',
      initialValue: 'Ready to Design Together?'
    }),
    defineField({
      name: 'ctaButton',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Book a consultation'
    }),
    defineField({
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
      initialValue: 'Copyright 2026'
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Link',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook Link',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'studiocontact@nmpinteriors.co.uk'
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: '07956 439068'
    }),
  ],
})