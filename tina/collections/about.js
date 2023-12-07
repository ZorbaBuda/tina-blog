/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "About",
  name: "about",
  path: "content/about",
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
      label: 'Category',
      name: 'categories',
      type: 'string',
      list: true,
      required: false
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
