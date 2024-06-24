import intro from "../../../assets/images/vdio.mp4";
const IntroVideo = () => {
  return (
    <div>
      <video src={intro} autoPlay></video>
    </div>
  );
};

export default IntroVideo;
