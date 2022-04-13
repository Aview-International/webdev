import "../Styles/Card.css";

export default function Card({ src, alt, header, desc }) {
  return (
    <div className="card-container">
      <div className="card">
        <img className="image" src={src} alt={alt} />
        <h3 className="header">{header}</h3>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}