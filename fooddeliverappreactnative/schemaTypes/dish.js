import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'Dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Dish name',
            validation: rule => rule.required()

        },
        {
            name: 'description',
            type: 'string',
            title: 'Dish description',
            validation: rule => rule.required()
        },
        {
            name: 'image',
            type: 'image',
            title: 'Dish Image'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price in USD'
        }
    ],
})
