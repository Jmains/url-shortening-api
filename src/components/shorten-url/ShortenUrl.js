import { useEffect, useState } from "react";
import LinkCard from "./LinkCard/LinkCard";
import "./ShortenUrl.css";
import cn from "classnames";

const fetchShortLink = async (link) => {
  const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {
    method: "POST",
  });
  return await res.json();
};

export default function ShortenUrl() {
  const [link, setLink] = useState("");
  const [apiLinks, setApiLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const shortLinks = sessionStorage.getItem("short_links");
    if (shortLinks) {
      setApiLinks(JSON.parse(shortLinks));
    }
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setError("");

    if (link.length === 0) {
      setError("Please add a link");
      return;
    }

    setLoading(true);
    fetchShortLink(link)
      .then((responseData) => {
        if (responseData.ok) {
          setApiLinks((prevApiLinks) => [responseData, ...prevApiLinks]);
          sessionStorage.setItem(
            "short_links",
            JSON.stringify([responseData, ...apiLinks], null, 2)
          );
        } else {
          setError(responseData.error);
        }
      })
      .catch((err) => {
        console.log("something went wrong...", err);
      });
    setLoading(false);
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
          <button className="shorten__btn" type="submit">
            {loading ? "loading..." : "Shorten It!"}
          </button>
        </form>
        {apiLinks.length > 0 &&
          apiLinks.map((link) => {
            return (
              <>
                {link.ok && (
                  <div key={link.result.full_short_link}>
                    <LinkCard
                      originalLink={link.result.original_link}
                      shortLink={link.result.full_short_link}
                    />
                  </div>
                )}
              </>
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
