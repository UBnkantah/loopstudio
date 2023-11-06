

const CreationCard = ({image, name}) => {
  return (
    <div style={{width: "170px", height: "250px", position: "relative"}} className="rounded border border-dark">
        <img src={image} alt="image" className="w-100 h-100 rounded"/>
        <h4 className="text-white position-absolute bottom-0 left-0">{name}</h4>
    </div>
  )
}

export default CreationCard