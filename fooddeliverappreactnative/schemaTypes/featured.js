import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featured',
    title: 'Featured restaurants',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Restaurant Name',
            validation: rule => rule.required()

        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
            validation: rule => rule.max(200)
        },
        {
            name: 'restaurants',
            type: 'array',
            title: 'restaurants',
            of: [{ type: 'reference', to: [{ type: 'restaurant' }] }]
        }
    ],
})
