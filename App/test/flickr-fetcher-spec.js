'use strict'

const expect = require('chai').expect

describe('flickr-fetcher.js', () => {
  it('should exist', () => {
    const FlickrFetcher = require('../src/utils/flickr-fetcher.js')
    expect(FlickrFetcher).to.not.be.undefined
  })
})

const FlickrFetcher = require('../../bundle.js')

describe('#photoObjToURL()', () => {
  it('should take a photo object from Flickr and return a string', () => {
    const input = {
      id:       '24770505034',
      owner:    '97248275@N03',
      secret:   '31a9986429',
      server:   '1577',
      farm:     2,
      title:    '20160229090898',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    }
    const expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg'
    const actual = FlickrFetcher.photoObjToURL(input)
    expect(actual).to.eql(expected)
  })
})