import { type SchemaTypeDefinition } from 'sanity'
import author from './author'
import post from './post'
import promotionalBanner from './promotionalBanner'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, post, promotionalBanner],
}
