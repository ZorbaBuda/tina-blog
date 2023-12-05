/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Posts",
  name: "post",
  path: "content/posts",
  format: "mdx",
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      required: true
    },
    {
      type: 'datetime',
      label: 'Date',
      name: 'date',
      required: true
    },
    {
      label: 'Tags',
      name: 'tags',
      type: 'string',
      list: true,
      required: false
    },
    {
      type: 'string',
      label: 'Category',
      name: 'category',
      required: true
    },
    {
      type: 'string',
      label: 'Summary',
      name: 'summary',
      required: false
    },
    {
      type: 'string',
      label: 'Book Author',
      name: 'bookAuthor',
      required: false
    },
    {
      type: 'string',
      label: 'Book Year',
      name: 'bookYear',
      required: false
    },
    {
      type: 'string',
      label: 'Cover Image',
      name: 'coverImage',
      required: true
    },
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      // return `/posts/${document._sys.filename}`;
      return undefined
    },
  },
};
