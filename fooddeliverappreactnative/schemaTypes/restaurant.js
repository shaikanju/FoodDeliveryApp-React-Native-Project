import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'restaurant',
    title: 'Restaurants',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Restaurant name',
            validation: rule => rule.required()

        },
        {
            name: 'description',
            type: 'string',
            title: 'Restaurant description',
            validation: rule => rule.max(200)
        },
        {
            name: 'image',
            type: 'image',
            title: 'restaurant image ',
        },
        {
            name: 'lat',
            type: 'number',
            title: 'latitude of the restaurant'
        },
        {
            name: 'lng',
            type: 'number',
            title: 'longitude of the restaurant'
        },
        {
            name: 'address',
            type: 'string',
            title: 'Restaurant address',
            validation: rule => rule.required(),
        },
        {
            name: 'rating',
            type: 'number',
            title: 'choose a number between 1 to 5 ',
            validation: rule => rule.required().min(1).max(5).error('please enter a value between 1 to 5'),
        },
        {
            name: 'reviews',
            type: 'string',
            title: 'Reviews ',
        },
        {
            name: 'type',
            title: 'category',
            validation: rule => rule.required(),
            type: 'reference',
            to: [{ type: 'category' }]

        },
        {
            name: 'dishes',
            type: 'array',
            title: 'Dishes',
            of: [{ type: 'reference', to: [{ type: 'Dish' }] }]
        }
    ],
})
