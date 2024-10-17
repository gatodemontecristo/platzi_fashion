interface VideoBackgroundProps {
  onScrollToItems: () => void;
}
export const VideoBackground = ({ onScrollToItems }: VideoBackgroundProps) => {
  return (
    <div className="absolute left-0 top-0 h-screen w-full  flex  items-center justify-center z-10 overflow-x-hidden">
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
      <button
        onClick={onScrollToItems}
        className=" absolute bottom-[15%] w-2/4 min-w-24 max-w-44 h-11 rounded-full hover:text-white font-bold shadow-lg hover:bg-primary ease-in-out
    bg-white text-black transform hover:-translate-y-1 hover:scale-110 transition-all duration-300"
      >
        See more
      </button>
    </div>
  );
};
