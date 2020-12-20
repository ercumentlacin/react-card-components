import React from "react";

function Card(props) {
  const [like, setLike] = React.useState(
    Number(localStorage.getItem(props.id)) || 0
  );

  const clickHandler = (event) => {
    event.target.name == "increase" ? setLike(like + 1) : setLike(like - 1);
  };

  localStorage.setItem(props.id, like);

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={props.imgUrl} className="bd-placeholder-img card-img-top" />
        <div className="card-body">
          {console.log(props.id)}
          <p className="card-text">{props.body}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                name="increase"
                onClick={clickHandler}
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Like
              </button>
              <button
                name="decrease"
                onClick={clickHandler}
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Unlike
              </button>
            </div>
            <small class="text-muted">{like} Like</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
