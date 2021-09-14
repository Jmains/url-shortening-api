import "./Statistics.css";
import fullyCustomIcon from "../../images/icon-fully-customizable.svg";
import brandRecognition from "../../images/icon-brand-recognition.svg";
import detailedRecords from "../../images/icon-detailed-records.svg";
import ShortenUrl from "../../components/shorten-url/ShortenUrl";

export default function Statistics() {
  return (
    <section className="stats">
      <div className="stats__shortenUrlWrapper">
        <ShortenUrl />
      </div>
      <div className="container">
        <div className="stats__header">
          <h2 className="stats__title">Advanced Statistics</h2>
          <p className="stats__description">
            Track how your links are performing across the web with out advanced statistics
            dashboard.
          </p>
        </div>
        <div className="stats__card--container">
          <div className="stats__card card1">
            <div className="stats__card--iconContainer">
              <img className="stats__card--icon" src={brandRecognition} alt="" srcset="" />
            </div>
            <h3 className="stats__card--title">Brand Recognition</h3>
            <p className="stats__card--description">
              Boost your brand recognition with each click. Generic links don't mean a thing.
              Branded links help instil confidence in your content.
            </p>
          </div>
          <div className="line"></div>
          <div className="stats__card card2">
            <div className="stats__card--iconContainer">
              <img className="stats__card--icon" src={detailedRecords} alt="" srcset="" />
            </div>
            <h3 className="stats__card--title">Detailed Records</h3>
            <p className="stats__card--description">
              Gain insights into who is clicking your links. Knowing when and where people
              engage with your content helps inform better decisions.
            </p>
          </div>
          <div className="line"></div>
          <div className="stats__card card3">
            <div className="stats__card--iconContainer">
              <img className="stats__card--icon" src={fullyCustomIcon} alt="" srcset="" />
            </div>
            <h3 className="stats__card--title">Fully Customizable</h3>
            <p className="stats__card--description">
              Improve brand awareness and content descoverability through customizable links,
              supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
