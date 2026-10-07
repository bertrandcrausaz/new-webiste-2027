export default function Discipline({
  id,
  reverse = false,
  image,
  alt,
  kicker,
  title,
  paragraphs,
  tags,
}) {
  const tagItems = tags.map((tag) =>
    typeof tag === "string"
      ? { label: tag, href: "/blank" }
      : { label: tag.label, href: tag.href || "/blank" }
  );

  return (
    <div id={id} className={`discipline${reverse ? " reverse" : ""}`}>
      <div className="media">
        <img src={image} alt={alt} />
      </div>
      <div className="content">
        <div className="kicker">{kicker}</div>
        <h3>{title}</h3>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="taglist">
          {tagItems.map((tag) => (
            <a className="tag" key={tag.label} href={tag.href}>
              {tag.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
