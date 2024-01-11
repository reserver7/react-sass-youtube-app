import axios from "../api/axios";

export const getVideoInfo = async (videosArr) => {
  try {
    for (let video of videosArr) {
      // get extra video info
      const videoResponse = await axios.get(
        `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${video.id.videoId}`
      );

      Object.assign(video.snippet, { ...videoResponse.data.items[0].snippet }); // 데이터 병합

      video.extraInfo = Object.assign(
        {},
        videoResponse.data.items[0].tegs,
        videoResponse.data.items[0].contentDetails,
        videoResponse.data.items[0].statistics,
        videoResponse.data.items[0].player
      );

      // get channel info
      const channelResponse = await axios.get(
        `/channels?part=snippet&part=statistics&part=contentDetails&id=${video.snippet.channelId}`
      );

      // storing fetched data
      const channelResultA = channelResponse.data.items[0].snippet;
      const channelResultB = channelResponse.data.items[0].statistics;

      // 위에서 가져온 데이터를 병합해서 channelInfo라는 필드를 생성해서 담기
      const channelInfo = Object.assign(
        {},
        {
          ...channelResultA,
          ...channelResultB,
        }
      );
      video.channelInfo = channelInfo;
    }

    return videosArr;
  } catch (error) {
    console.log(error);
  }
};

export const getRelatedVideos = async (videoId) => {
  console.log("videoId", videoId);
  try {
    const response = await axios.get(
      `/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video`
    );

    console.log("response", response);
    return response.data.items;
  } catch (error) {
    // 에러나면 콘솔로 에러 출력
    console.log(error);
  }
};
