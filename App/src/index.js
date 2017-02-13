import FlickrFetcher from './utils/flickr-fetcher'

const main = () => {
  // photoObj: () => {
  //   const input = {
  //           id:       '25373736106',
  //           owner:    '99117316@N03',
  //           secret:   '146731fcb7',
  //           server:   '1669',
  //           farm:     2,
  //           title:    'Dog goes to desperate measure to avoid walking on a leash',
  //           ispublic: 1,
  //           isfriend: 0,
  //           isfamily: 0
  //         }

  //   const item = FlickrFetcher.transformPhotoObj(input)
  //   return item
  // }
  document.getElementById('image').setAttribute('src', 'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg')
  // document.getElementById('image').setAttribute('alt', main.photoObj().title)
  // document.getElementById('para1').innerHtml = main.photoObj().title
}
export default main
