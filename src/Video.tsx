import { Button } from "@mui/material";
import { useState } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const [url, setUrl] = useState("");

  const onClick = () => {
    // input file tag 생성
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", ".mp4");
    input.click();

    // input change
    input.onchange = async (e: any) => {
      const files = e.target.files[0];
      const formData = new FormData();
      formData.append("img", files);

      const fileUrl = URL.createObjectURL(files);
      console.log(files);
      setUrl(fileUrl);

      // try {
      //   const result = await axios.post("/api/v1/flyer/rf", {
      //     "productPid":1,
      //     "rfContents":"njpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjpnjp",
      //     "videoPid":41,
      //     "musicTrackPid":1,
      //     "starRating":3
      // })

      // file 등록
      // const tempFile = api.file.postTempFileUpload(formData);
      // tempFile.then((response: any) => {
      //   // 커서위치 및 fileSrno 얻기
      //   const fileSrno = response.fileSrno;
      //   const range = this.quill.getSelection();

      //   this.quill.insertEmbed(
      //     range.index,
      //     "image",
      //     "http://localhost:8002/master/api/v1/upload/img/" + fileSrno
      //   );
      // });
    };
  };
  return (
    <>
      <Button variant="contained" component="span" onClick={() => onClick()}>
        Upload
      </Button>
      {url.length > 0 && <ReactPlayer url={url} controls={true} />}
    </>
  );
};

export default Video;
