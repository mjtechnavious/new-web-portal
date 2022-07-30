export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62e5099a767c75741a545d8d',
                  title: 'Sanity Studio',
                  name: 'new-web-portal-studio',
                  apiId: '19a0b938-6b8a-4fe2-9e79-46784e3e1a19'
                },
                {
                  buildHookId: '62e5099a8720ed7575e8169c',
                  title: 'Landing pages Website',
                  name: 'new-web-portal',
                  apiId: '71a527e8-9a6a-4eb2-91f2-9b952af048a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mjtechnavious/new-web-portal',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://new-web-portal.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
