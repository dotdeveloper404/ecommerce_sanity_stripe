import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'gray-chough',

  projectId: 'o7v86170',
  dataset: 'ecommerce',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
