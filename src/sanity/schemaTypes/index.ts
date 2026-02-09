import { type SchemaTypeDefinition } from 'sanity'
import slider from './home/slider'
import heroInfo from './home/heroInfo'
import featuredInfo from './home/featuredInfo'
import project from './home/project'
import whyNmp from './home/whyNmp'
import ourApproach from './home/ourApproach'
import reviews from './home/reviews'
import footer from './footer/footer'
import header from './header/header'
import privacy from './privacy/privacy'
import projects from './project/projects'
import projectsPage from './project/projectsPage'
import about from './about/about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [slider, heroInfo, featuredInfo, project, whyNmp, ourApproach, reviews, footer, header, privacy, projects, projectsPage, about],
}
