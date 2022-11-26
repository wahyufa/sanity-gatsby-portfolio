export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '63821f4d5737091a1b17665d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fjhkaswj',
                  apiId: 'b3eb8553-abec-4f7d-8d8b-7c76bdace514'
                },
                {
                  buildHookId: '63821f4e603c3c11992c01b1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vfntb9bw',
                  apiId: 'a6ba70be-15f7-4e3c-9cb0-ac7a649c43a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wahyufa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vfntb9bw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
