import "@/styles/components/IFrameWrapper.css";
import { useRef } from "react";

interface IFrameWrapperProps {
  id: string;
  title: string;
  src: string;
  allowFullScreen?: boolean;
  video?: boolean;
  height?: string;
  showSmartphone?: boolean;
  aspectRatio?: string;
}

const IFrameWrapper = ({
  id,
  title,
  src,
  allowFullScreen = true,
  video = false,
  height = "100%",
  showSmartphone = true,
  aspectRatio = "normal",
}: IFrameWrapperProps) => {
  const jumpLink = `after-iframe-${id}`;
  const targetRef = useRef<HTMLDivElement>(null);

  const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (targetRef.current) {
      targetRef.current.style.display = "block";
      // Force the keyboard focus to move to the div
      targetRef.current.focus();
      // Smoothly scroll the screen to the target
      targetRef.current.scrollIntoView({ behavior: "smooth" });
      targetRef.current.style.display = "none";
    }
  };

  const videoProps = {
    style: {
      aspectRatio: `${video ? "16 / 9" : aspectRatio}`,
    },
    className: "iframe-wrapper video",
  };

  const prototypeProps = {
    style: {
      maxHeight: `min(${height}, 70dvh)`,
      aspectRatio: aspectRatio,
    },
    className: `iframe-wrapper prototype ${showSmartphone ? "smartphone" : ""}`,
  };

  const iframeWrapperProps = video ? videoProps : prototypeProps;

  return (
    <>
      <button
        className={`skip-link button-primary ${!video ? "prototype-wrap" : ""}`}
        onClick={handleSkip}
      >
        {" "}
        Skip {video ? "Video-player" : "Prototype"}
      </button>

      <div {...iframeWrapperProps}>
        <iframe
          id={id}
          width="100%"
          height="100%"
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
        ></iframe>
      </div>

      <div
        ref={targetRef}
        className="skip-link-target"
        id={jumpLink}
        tabIndex={-1}
      ></div>
    </>
  );
};

export default IFrameWrapper;
