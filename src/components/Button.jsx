const Button = ({btnTitle, handleSearch}) => {
  return (
    <button onClick={handleSearch ? handleSearch : undefined} className="theme-btn">{btnTitle}</button>
  )
}

export default Button