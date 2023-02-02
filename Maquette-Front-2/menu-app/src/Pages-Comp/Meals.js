import star from '../img/star.svg';

export default function Meals({ meal }) {


    return (
        <div className="card">

          <div className="top">
                <img className="meal-img" src={meal.imageSrc} alt="meal" />
            <div className="rate">
              <img src={star} alt="star"/>
              <p>{meal.rating} <span>({meal.reviews})</span></p>
            </div>
          </div>

          <div className="bottom">
            <h3>{meal.title}</h3>
            <p>{meal.content}</p>
            <h3>{meal.price}</h3>
          </div>
        </div>
    )
};