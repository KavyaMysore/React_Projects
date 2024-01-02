import React, { useState } from 'react'
import "../styles/videos.css"
import VideosLogic from './VideosLogic'


const Videos = () => {


  let videos = [

    { thumbnail: "https://i.ytimg.com/vi/xAaNbu-1k4o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoABx6F-G42kJhgBtfuHAsbPu_bg", channelIcon: "https://yt3.ggpht.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s68-c-k-c0x00ffffff-no-rj", title: "The Mummy Returns | Ashish Chanchlani by  ashish chanchlani vines", channelname: "Ashish chanchlani vines", views: "69", id: "1" },

    { thumbnail: "https://i.ytimg.com/vi/TZuQjv5Z6h8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7eTD1nm2vZYKbY6FdY1mC7JAuGA", channelIcon: "https://yt3.ggpht.com/KoFByTIL52sOe__t1RKy-6OFbRW-xMcRAIF1PJHKUVik9EJxbQ28sWwX8D5NAEbogesjahg=s88-c-k-c0x00ffffff-no-rj", title: "Heeriye | Jasleen Royal | Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir by Dark Melodious", channelname: "Dark Melodies", views: "338K views", id: "2" },

    { thumbnail: "https://i.ytimg.com/vi/vVLahtek1NA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjoClRhdownnLTOKB6EvG86VLKxw", channelIcon: "https://yt3.ggpht.com/vu_5BEHUSYMebDOGvVlYvaHz3rRd2Cq6GvdcDKXNdZT-vQ8DKhvQpvuve2QG-guwT4PJZ-tpWTU=s68-c-k-c0x00ffffff-no-rj", title: "What I Shopped In Sarojini Nagar Market Delhi || @chaitra_vasudevan || Tamada Media by Chaitra  ", channelname: "Chaitra Vasudevan", views: "45K views", id: "3" },

    { thumbnail: "https://i.ytimg.com/vi/QOAi3RNZooQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRYRjJF_IougTt42K2vOaBuYCGWw", channelIcon: "https://yt3.ggpht.com/lw4niDKBw7tGo7ZfLQqHYL26quX9T7xVMgIjhlSzVXIvU0DPoTC1dH4tes9VAwEm3qI7L22zRg=s88-c-k-c0x00ffffff-no-rj", title: "JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar", channelname: "Dip Dey", views: "6.8", id: "4" },

    { thumbnail: "https://i.ytimg.com/vi/JlEfvSlBcIQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABKvXvjZlYFKqkjNtykVtK_7qZZQ", channelIcon: "https://yt3.ggpht.com/PJLSmL5z4sVZMWtAS7t_sOcWihnEk9fYqGZBnKeQoXj0RndaYS2GLPdzwx1CI9cQWVXeFcy6dQ=s68-c-k-c0x00ffffff-no-rj", title: "Taylor Swift - Lover lyrics video #lyricalvideo #lyricalworld #taylorswift #lover by Lyrical world", channelname: "Lyrical world", views: "62 views", id: "5" },

    { thumbnail: "https://i.ytimg.com/vi/3rVF1pT-jRY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsisFvRSzO-G-0EerTFVuamVPRCw", channelIcon: "https://yt3.ggpht.com/xInaWPMgR0bINZPFBZZOChzb4XnuUYsddljauF3yms3_OUUZmOKr1V2wA2eWj0_gOs1RnbRK=s68-c-k-c0x00ffffff-no-rj", title: "Dinner is served | Funny Episodes | Mr Bean Cartoon World by Mr Bean World", channelname: "Mr. Bean World", views: "26", id: "6" },

    { thumbnail: "https://i.ytimg.com/vi/dNe7gaUXi1k/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLASb1wggBCpnwtZjIobpBJ5DwZWWg", channelIcon: "https://yt3.ggpht.com/v_kruq_hprIN3RvCdlXm5vBaDG9n7IAfrkHl74wlkW3IEdr83keXVZuKrhZbIcJPQ1zotRqu=s68-c-k-c0x00ffffff-no-rj", title: "PINK (4k) Movie | 7 Years of Pink | Amitabh Bachchan, Taapsee Pannu, Kirti Kulhari", channelname: "NH Movies", views: "545K views", id: "7" },

    { thumbnail: "https://i.ytimg.com/vi/f6jiiSyCcPg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAyQBPO43XGCjftVFoEdAb3Ejx0sQ", channelIcon: "https://yt3.ggpht.com/wlTK-U3lA5z8K1cxtiLcWaW_MHqxnDtsrd-8Q8AAdXepxbKiGvL17VoGZhahha7AsTyneyRGFw=s68-c-k-c0x00ffffff-no-rj", title: "Pinki Ki Shaadi | Filmfare Best Short Film Nomination 22 | Mugdha Agarwal, Vikram | Natak Pictures by Natak Pictures", channelname: "Natak Pictures", views: "7.6", id: "8" },

    { thumbnail: "https://i.ytimg.com/vi/1Z0j74ohiZg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDQjxFI3JYQ1jde8SrZxztfuTy_lg", channelIcon: "https://yt3.ggpht.com/ytc/APkrFKZjNJQTO8JRI6it5-57YJvMGat9oh7DvqG89D71=s68-c-k-c0x00ffffff-no-rj", title: "Pyaar Ki Jeet Full Movie Dubbed In Hindi With English Subtitles | Sudheer Babu, Nabha Natesh by Shree ", channelname: "Shree International", views: "137", id: "9" }

  ]

  let [video, setVideos] = useState(videos)

  let handleDelete = (id) => {
    setVideos(video.filter((data) => id !== data.id))
  }

  let deleteAll=()=>{
    setVideos([])
  }


  return (
    <div className='videos_list'>

      <VideosLogic videos_data={video} fn={handleDelete} title={"All Videos"} />
      <VideosLogic videos_data={video.filter(x=>x.views>=5)} fn={handleDelete} title={">5M views"} />
      <VideosLogic videos_data={video.filter(x=>x.views<5)} fn={handleDelete} title={"<5M views"} />
      
      <br />

      <button onClick={deleteAll}>Delete All</button>

    </div>

  )
}

export default Videos
