export default {
    type: 'document',
    name: 'news-story',
    title: 'News Story',
    fields: [
      {
        name: 'headline',
        title: 'Headline',
        type: 'string',
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "headline",
          maxLength: 96,
        },
      },
      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      }
    ]
  }