//get /api/video/id
import video from "~/database/video"


export default defineEventHandler((event) => {
    //获取视频id
    const { id } = event.context.params || {}
    //通过视频id获视频
    return video.find(v => v.bvid == id)

})