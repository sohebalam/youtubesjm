import { Grid } from "@material-ui/core"
import youtube from "./api/youtube"
import SearchBar from "../components/SearchBar"
import VideoDetail from "../components/VideoDetail"
import { useState } from "react"

const Index = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} })
  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        // TODO - add a new API key.
        key: "AIzaSyD2NxDCHxkCGyJU7OhTJ3EPVQdL9wNkdKs",
        q: searchTerm,
      },
    })

    setVideos(videos)
    setSelectedVideo(videos[0])
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={11}>
        <Grid container>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            {/* <VideoDetail /> */}
          </Grid>
          <Grid item xs={4}>
            list
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Index
const fetchData = async () => {
  const response = await fetch("/api/example", config)
  const data = response.json()
}
