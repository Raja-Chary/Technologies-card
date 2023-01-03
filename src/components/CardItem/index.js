// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-container`}>
      <div className="head-para-container">
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default CardItem
