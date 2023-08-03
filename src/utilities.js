import dayjs from "dayjs"

export const cleanData = (data) => {
  return data.map((story, index) => {
    return   {
      id: index,
      author: story.author,
      content: story.content,
      description: story.description,
      publishedAt: dayjs(story.publishedAt).format("MM-DD-YYYY"),
      source: story.source.name,
      title: story.title,
      url: story.url,
      urlToImage: story.urlToImage
    }
  })




}