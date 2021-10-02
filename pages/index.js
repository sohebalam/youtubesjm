import { Grid } from "@material-ui/core"
import youtube from "./api/youtube"
import SearchBar from "../components/SearchBar"
import VideoDetail from "../components/VideoDetail"
import { useEffect, useState } from "react"
import VideoList from "../components/VideoList"

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems"

const playlistId = "PL25nRqESo6qH6t-8NcPRE20XSThI2JgTa"

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${playlistId}&key=${process.env.YOUTUBE_API_KEY}`
  )

  // console.log(res)
  const data = await res?.json()

  console.log(data)

  return {
    props: {
      data,
    },
  }
}

const Index = ({ data }) => {
  const [videos, setVideos] = useState([])
  // const [onSelectedVideo, setOnSelectedVideo] = useState({})
  const [selectedVideo, setSelectedVideo] = useState({})

  // console.log(selectedVideo)

  const { items } = data

  useEffect(() => {
    setVideos(items)
  }, [])

  // console.log(videos)

  const handleSubmit = async () => {}
  return (
    <Grid container justifyContent="center">
      <Grid item xs={11}>
        <Grid container>
          <Grid item xs={12}>
            {/* <SearchBar onSubmit={handleSubmit} /> */}
            {/* input field */}
          </Grid>
          <Grid item xs={8}>
            {/* <VideoDetail video={selectedVideo} /> */}
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Index
