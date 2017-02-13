const FlickrFetcher = {
  photoObjToURL: (photoObj) => {
    return `https://farm${photoObj.farm}.staticflickr.com/${photoObj.server}/${photoObj.id}_${photoObj.secret}_b.jpg`
  },
  transformPhotoObj: (photoObj) => {
    return {
      title: photoObj.title, 
      url: FlickrFetcher.photoObjToURL(photoObj),
    }
  }
}

export default FlickrFetcher 