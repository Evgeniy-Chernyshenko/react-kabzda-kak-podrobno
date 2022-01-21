import { useState } from "react";

type StarPropsType = {
  isActive: boolean;
  onClickCallback: () => void;
};

function UncontrolledRating() {
  const [starsCount, setStarsCount] = useState(0);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <>
        <Star
          isActive={i < starsCount}
          onClickCallback={() => setStarsCount(i + 1)}
        />
      </>
    );
  }

  return <div>{stars}</div>;
}

function Star(props: StarPropsType) {
  return (
    <span
      style={{ fontSize: "2em", cursor: "pointer" }}
      onClick={props.onClickCallback}
    >
      {props.isActive ? "★" : "☆"}
    </span>
  );
}

export default UncontrolledRating;
