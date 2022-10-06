function ProductRating(props) {
    const { product} = props;
    const initialRating = product.reviews.reduce((a, c) => a + c.rating, 0);
  const averageRating = initialRating / product.reviews.length;
  const rating =
    averageRating === 0.5 || 1.5 || 2.5 || 3.5 || 4.5
      ? averageRating
      : Math.ceil(averageRating);
    return (
      <div className="rating flex flex-row gap-x-1 text-sm">
        <span>
          <i
            className={
              rating >= 1
                ? 'fas fa-star'
                : rating >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
            style={{color:"rgb(255,54,93)"}}
          />
        </span>
        <span>
          <i
            className={
              rating >= 2
                ? 'fas fa-star'
                : rating >= 1.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
            style={{color:"rgb(255,54,93)"}}
          />
        </span>
        <span>
          <i
            className={
              rating >= 3
                ? 'fas fa-star'
                : rating >= 2.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
            style={{color:"rgb(255,54,93)"}}
          />
        </span>
        <span>
          <i
            className={
              rating >= 4
                ? 'fas fa-star'
                : rating >= 3.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
            style={{color:"rgb(255,54,93)"}}
          />
        </span>
        <span>
          <i
            className={
              rating >= 5
                ? 'fas fa-star'
                : rating >= 4.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
            style={{color:"rgb(255,54,93)"}}
          />
        </span>
      </div>
    );
  }
  
  export default ProductRating;