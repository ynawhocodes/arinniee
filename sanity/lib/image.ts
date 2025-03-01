import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (
  source: SanityImageSource,
  size: 100 | 400 | 800 | 1200 = 400,
) =>
  projectId && dataset
    ? builder.image(source).width(size).height(size).url()
    : null

export const urlForRatio = (
  source: SanityImageSource,
  w: 100 | 400 | 800 | 1200 = 400,
) => (projectId && dataset ? builder.image(source).width(w).url() : null)
