export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingPropsType = {
  rating: RatingType;
  setRating: (stars: RatingType) => void;
};

type StarPropsType = { isActive: boolean; onClickCallback: () => void };

function ControlledRating(props: RatingPropsType) {
  let stars = [];
  for (let i: RatingType = 1; i <= 5; i++) {
    stars.push(
      <Star
        isActive={i <= props.rating}
        onClickCallback={() => props.setRating(i)}
      />
    );
  }

  return <div>{stars}</div>;
}

function Star(props: StarPropsType) {
  return (
    <span
      style={{ fontSize: '2em', cursor: 'pointer' }}
      onClick={props.onClickCallback}
    >
      {props.isActive ? '★' : '☆'}
    </span>
  );
}

export default ControlledRating;
