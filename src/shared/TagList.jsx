import './TagList.css'

const TagList = ({ items }) => (
  <div className="tag-list">
    {items.map((item) => (
      <span key={item} className="tag">
        {item}
      </span>
    ))}
  </div>
)

export default TagList
