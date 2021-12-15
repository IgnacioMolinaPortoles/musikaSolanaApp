export const getVideoInfo= async (url) => {
    let res = await fetch(`https://noembed.com/embed?url=${url}`)
    let data = await res.json()
    return {
        title:data.title,
        thumbnail:data.thumbnail_url
    }
}