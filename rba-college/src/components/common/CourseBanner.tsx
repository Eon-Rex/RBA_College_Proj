import React from "react";

interface CourseBannerProps {
  bannerUrl: string;
}

const CourseBanner: React.FC<CourseBannerProps> = ({ bannerUrl }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "500px",
        overflow: "hidden",
      }}
    >
      <img
        src={bannerUrl}
        alt="Course Banner"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
};

export default CourseBanner;
