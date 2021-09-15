import { useEffect, useState } from "react";
import LinkCard from "./LinkCard/LinkCard";
import "./ShortenUrl.css";
import cn from "classnames";
import Loader from "react-loader-spinner";

const fetchShortLink = async (link) => {
  const cleanedLink = link.trim();
  const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${cleanedLink}`);
  return await res.json();
};

export default function ShortenUrl() {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiLinks, setApiLinks] = useState([]);

  useEffect(() => {
    const shortLinks = sessionStorage.getItem("short_links");
    // Restore links and form field on refresh
    if (shortLinks) {
      setApiLinks(JSON.parse(shortLinks));
      setLink(JSON.parse(shortLinks)[0].result.original_link);
    }
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setError("");

    if (link.length === 0) {
      setError("Please add a link");
      return;
    }

    setIsLoading(true);

    fetchShortLink(link)
      .then((data) => {
        if (!data.ok) throw new Error(data.error);
        setApiLinks((prevData) => [data, ...prevData]);
        sessionStorage.setItem("short_links", JSON.stringify([data, ...apiLinks], null, 2));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  const handleLinkChange = (ev) => {
    setLink(ev.target.value);
  };

  return (
    <div className="shorten">
      <div className="container">
        <form onSubmit={handleSubmit} className="shorten__form">
          <div className="shorten__inputContainer">
            <input
              value={link}
              onChange={handleLinkChange}
              placeholder="Shorten a link here..."
              className={cn("shorten__input", {
                "shorten__input-error": error,
              })}
              type="text"
            />
            {error && <span className="short__form--error">{error}</span>}
          </div>
          <button disabled={isLoading} className="shorten__btn" type="submit">
            {isLoading ? (
              <Loader type="Oval" radius="10" color="white" height={20} width={20} />
            ) : (
              "Shorten It!"
            )}
          </button>
        </form>
        {apiLinks?.length > 0 &&
          apiLinks?.map((link) => {
            return (
              <div key={link.result.code}>
                <LinkCard
                  originalLink={link.result.original_link}
                  shortLink={link.result.full_short_link}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

// {
//   "ok": true,
//   "result": {
//       "code": "KCveN",
//       "short_link": "shrtco.de/KCveN",
//       "full_short_link": "https://shrtco.de/KCveN",
//       "short_link2": "9qr.de/KCveN",
//       "full_short_link2": "https://9qr.de/KCveN",
//       "share_link": "shrtco.de/share/KCveN",
//       "full_share_link": "https://shrtco.de/share/KCveN",
//       "original_link": "http://example.org/very/long/link.html"
//   }
// }

// {
//   "ok": false,
//   "error_code": 2,
//   "error": "This is not a valid URL, for more infos see shrtco.de/docs"
// }
