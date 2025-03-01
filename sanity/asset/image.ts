import { client } from '@sanity/lib/client'

export const uploadImage = (file: File) =>
  client.assets
    .upload('image', file, {
      filename: file.name,
    })
    .then((imageAsset) => {
      // Here you can decide what to do with the returned asset document.
      // If you want to set a specific asset field you can to the following:
      return client
        .patch('some-document-id')
        .set({
          theImageField: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAsset._id,
            },
          },
        })
        .commit()
    })
    .then(() => {
      console.log('Done!')
    })

export const deleteImage = (ref: string) =>
  client.delete(ref).then((result) => {
    console.log('deleted image asset', result)
  })
