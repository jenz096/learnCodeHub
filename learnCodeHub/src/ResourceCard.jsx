import './ResourceCard.css'
function ResourceCard(props) {
    return (
      <div className="card">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <a href={props.link} className="card-link" target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    );
  }
  
  export default ResourceCard;
  