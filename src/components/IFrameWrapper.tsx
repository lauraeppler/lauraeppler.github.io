import "@/styles/components/IFrameWrapper.css";
import { useRef } from "react";

interface IFrameWrapperProps {
  id: string;
  title: string;
  src: string;
  allowFullScreen?: boolean;
  video?: boolean;
}

const IFrameWrapper = ({
  id,
  title,
  src,
  allowFullScreen = true,
  video = false,
}: IFrameWrapperProps) => {
  const jumpLink = `after-iframe-${id}`;
  const targetRef = useRef<HTMLDivElement>(null);

  const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (targetRef.current) {
      // Force the keyboard focus to move to the div
      targetRef.current.focus();
      // Smoothly scroll the screen to the target
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <button
        className={`skip-link button-primary ${!video ? "prototype-wrap" : ""}`}
        onClick={handleSkip}
      >
        {" "}
        Skip {video ? "Video-player" : "Prototype"}
      </button>

      <iframe
        id={id}
        width={video ? 700 : 452}
        height={video ? 394 : 881}
        src={src}
        title={title}
        allow={
          video
            ? `accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share}
        referrerPolicy="strict-origin-when-cross-origin`
            : ""
        }
        allowFullScreen={allowFullScreen}
        loading="lazy"
        style={{ WebkitClipPath: "inset(2px 2px)", clipPath: "inset(2px 2px)" }}
      ></iframe>

      <div ref={targetRef} id={jumpLink} tabIndex={-1}></div>
    </>
  );
};

export default IFrameWrapper;
