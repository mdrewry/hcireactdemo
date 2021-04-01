import "./App.css";
import Notification from "./Notification";
function Header({ message }) {
  return (
    <>
      <Notification message={message} />
      <div className="greenRect" />
      <div className="blueRect1" />
      <div className="blueRect2" />
      <div className="task_logo">
        <svg
          width="447"
          height="123"
          viewBox="0 0 447 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
        >
          <rect y="-6" width="447" height="129" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                href="#image0"
                transform="translate(0 -1.23256) scale(0.005 0.0173256)"
              />
            </pattern>
            <image
              id="image0"
              width="200"
              height="200"
              href="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>
    </>
  );
}

export default Header;
