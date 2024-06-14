import Button from './Button'

const Header = ({searchIP, setSearchIP, handleSearch}) => {
  return (
    <header className="geo-bg">
        <h1>IP Scan</h1>
        <div className="search-container">
        <input type="text"
          className="form-control"
          value={searchIP}
          onChange={(e) => setSearchIP(e.target.value)}
          placeholder="Enter IP Address..."/>
        <Button btnTitle='Search' handleSearch={handleSearch}/>
      </div>
    </header>
  )
}

export default Header