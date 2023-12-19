import { JSDOM } from 'jsdom'
import { Readability } from '@mozilla/readability'
import readingTime from 'reading-time'
// import readingTime from 'gatsby-plugin-readingtime'

export const buildTags = keywords => {

  // console.log(keywords)

  const tags = {}

  keywords.forEach(({ content }) => {
    content?.tags?.forEach(tag => {
      if (tags[tag] == null) {
        tags[tag] = 1
        return
      }
      tags[tag] = tags[tag] + 1
    })
  })

  const sortedTags = Object.entries(tags).sort((_1st, _2nd) => _1st[0].localeCompare(_2nd[0]))

  return sortedTags
}


export const estimateReadingTime = content => {
  const { _window } = new JSDOM(content)
  const plainContent = new Readability(_window.document).parse()
  return readingTime(plainContent).minutes
}