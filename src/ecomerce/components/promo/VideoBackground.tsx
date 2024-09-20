export const VideoBackground = () => {
  return (
    <div className="absolute left-0 top-0 h-screen w-screen  flex  items-center justify-center -z-10">
      <video
        className="h-full w-full object-cover"
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source
          src="../video/video_donde_estan_las_rubias.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
