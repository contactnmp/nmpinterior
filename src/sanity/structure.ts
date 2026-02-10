import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      
      S.listItem()
        .title('Home Page')
        .child(
          S.list()
            .title('Home Page Blocks')
            .items([
              S.listItem()
                .title('1. Slider')
                .child(S.document().schemaType('slider').documentId('mainSlider')),
              S.listItem()
                .title('2. Hero Text')
                .child(S.document().schemaType('heroInfo').documentId('heroInfo')),
              S.listItem()
                .title('3. Featured Info')
                .child(S.document().schemaType('featuredInfo').documentId('featuredInfo')),
              S.listItem()
                .title('4. Projects (List)')
                .child(S.documentTypeList('project').title('All Projects')),
              S.listItem()
                .title('5. Why NMP Block')
                .child(S.document().schemaType('whyNmp').documentId('whyNmp')),
              S.listItem()
                .title('6. Our Approach')
                .child(S.document().schemaType('ourApproach').documentId('ourApproach')),
              S.listItem()
                .title('7. Reviews')
                .child(S.document().schemaType('reviews').documentId('reviews')),
            ])
        ),

      S.divider(), 

      S.listItem()
        .title('Page: Projects')
        .child(
            S.list()
                .title('Project Management')
                .items([
                    S.listItem()
                        .title('Page Settings')
                        .child(
                            S.document()
                                .schemaType('projectsPage')
                                .documentId('projectsPage')
                        ),
                    
                    S.divider(),

                    S.documentTypeListItem('projects')
                        .title('All Projects'),
                ])
        ),

      S.divider(),

      S.listItem()
       .title('Page: About Us')
       .child(
         S.document()
           .schemaType('about')
           .documentId('about')
           .title('Edit "About Us"')
       ),

      S.divider(),

      S.listItem()
        .title('Page: Privacy Policy')
        .child(
          S.document()
            .schemaType('privacy')
            .documentId('privacy')
        ),

      S.divider(),

      S.listItem()
        .title('Header Settings')
        .child(
          S.document()
            .schemaType('header')
            .documentId('header')
        ),

      S.divider(),

      S.listItem()
        .title('Footer Settings')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
        ),

      S.divider(),
    ])