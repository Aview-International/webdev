import "../../Styles/AboutPage/aboutAview.css";

export default function AboutAview() {
    return (
        <div>
            <header className="aboutRect"></header>

            {/* "dolor sit amet" not showing the gradient, only shows white text */}
            <header className="aboutTextTop">Lorem ipsum dolor sit amet.</header> 
            <header className="aboutTextBot">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</header>
        </div>
    )
}