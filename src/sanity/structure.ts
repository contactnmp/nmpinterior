import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      
      S.listItem()
        .title('Главная страница')
        .child(
          S.list()
            .title('Блоки Главной')
            .items([
              S.listItem()
                .title('1. Слайдер')
                .child(S.document().schemaType('slider').documentId('mainSlider')),
              S.listItem()
                .title('2. Текст Hero')
                .child(S.document().schemaType('heroInfo').documentId('heroInfo')),
              S.listItem()
                .title('3. Инфо Featured')
                .child(S.document().schemaType('featuredInfo').documentId('featuredInfo')),
              S.listItem()
                .title('4. Проекты (Список)')
                .child(S.documentTypeList('project').title('Все проекты')),
              S.listItem()
                .title('5. Блок Why NMP')
                .child(S.document().schemaType('whyNmp').documentId('whyNmp')),
              S.listItem()
                .title('6. Наш Подход (Approach)')
                .child(S.document().schemaType('ourApproach').documentId('ourApproach')),
              S.listItem()
                .title('7. Отзывы')
                .child(S.document().schemaType('reviews').documentId('reviews')),
            ])
        ),

      S.divider(), 

      S.listItem()
        .title('Страница: Проекты')
        .child(
            S.list()
                .title('Управление Проектами')
                .items([
                    S.listItem()
                        .title('Настройки страницы')
                        .child(
                            S.document()
                                .schemaType('projectsPage')
                                .documentId('projectsPage')
                        ),
                    
                    S.divider(),

                    S.documentTypeListItem('projects')
                        .title('Все проекты'),
                ])
        ),

      S.divider(),

      S.listItem()
       .title('Страница: О Нас')
       .child(
         S.document()
           .schemaType('about')
           .documentId('about')
           .title('Редактировать "О Нас"')
       ),

      S.divider(),

      S.listItem()
        .title('Страница Политики Конфиденциальности')
        .child(
          S.document()
            .schemaType('privacy')
            .documentId('privacy')
        ),

      S.divider(),

      S.listItem()
        .title('Настройки Хедера')
        .child(
          S.document()
            .schemaType('header')
            .documentId('header')
        ),

      S.divider(),

      S.listItem()
        .title('Настройки Футера')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
        ),

      S.divider(),
    ])