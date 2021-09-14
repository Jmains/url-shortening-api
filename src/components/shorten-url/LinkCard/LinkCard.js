import "./LinkCard.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import cn from "classnames";

export default function LinkCard({ originalLink, shortLink }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="link__card">
      <p className="link__card--originalLink">{originalLink}</p>
      <div className="divider"></div>

      <div className="link__card-lowerSection">
        <a href={shortLink} className="link__card--shortLink">
          {shortLink}
        </a>
        <CopyToClipboard text={shortLink} onCopy={() => setCopied(true)}>
          <button
            className={cn("link__card--copyLinkBtn ", {
              "link__card--copyLinkBtn-copied": copied,
            })}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
