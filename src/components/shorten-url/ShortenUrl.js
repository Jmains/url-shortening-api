import "./ShortenUrl.css";

export default function ShortenUrl() {
  const handleSubmit = () => {};
  return (
    <div className="shorten">
      <div className="container">
        <form onSubmit={handleSubmit} className="shorten__form" action="">
          <input placeholder="Shorten a link here..." className="shorten__input" type="text" />
          <button className="shorten__cta" type="submit">
            Shorten It!
          </button>
        </form>
      </div>
    </div>
  );
}
