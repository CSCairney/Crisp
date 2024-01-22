export enum tags {
    Map = 'Map',
    Tourism = 'Tourism',
    Health = 'Health',
    Sports = 'Sports',
    Food = 'Food',
    Travel = 'Travel',
    Normal = 'Normal',
    Discussion = 'Discussion',
}

export const data = [
    {
        blog_id: 1,
        title: 'Blog 1',
        content: 'Content for blog 1',
        user_id: 1,
        rating: 4,
        tags: [tags.Map, tags.Tourism, tags.Health]
    },
    {
        blog_id: 2,
        title: 'Blog 2',
        content: 'Content for blog 2',
        user_id: 78,
        rating: 4,
        tags: [tags.Map, tags.Food, tags.Sports]
    },
    {
        blog_id: 3,
        title: 'Blog 3',
        content: 'Content for blog 3',
        user_id: 2,
        rating: 4,
        tags: [tags.Map, tags.Tourism, tags.Health]
    },
    {
        blog_id: 4,
        title: 'Blog 4',
        content: 'Content for blog 4',
        user_id: 2,
        rating: 3,
        tags: [tags.Map, tags.Food, tags.Sports]
    },
    {
        blog_id: 5,
        title: 'Blog 5',
        content: 'Content for blog 5',
        user_id: 90,
        rating: 4,
        tags: [tags.Map, tags.Tourism, tags.Health]
    },
    {
        blog_id: 6,
        title: 'Blog 6',
        content: 'Content for blog 6',
        user_id: 10,
        rating: 4,
        tags: [tags.Map, tags.Tourism, tags.Health]
    },
    {
        blog_id: 7,
        title: 'Blog 7',
        content: 'Content for blog 7',
        user_id: 1,
        rating: 4,
        tags: [tags.Map, tags.Tourism, tags.Health]
    },
    {
        blog_id: 8,
        title: 'Blog 8',
        content: 'Content for blog 8',
        user_id: 1,
        rating: 4,
        tags: [tags.Map, tags.Tourism, tags.Health]
    },
    {
        blog_id: 9,
        title: 'Blog 9',
        content: 'Content for blog 9',
        user_id: 1,
        rating: 4,
        tags: [tags.Map, tags.Tourism, tags.Health]
    }
]