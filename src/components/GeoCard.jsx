import Tooltip from "./Tooltip";
import copyImg from '../assets/copy-img.svg'

const geoCard = ({ geolocationData, copyToClipboard, tooltipText }) => {
  return (
    <>
      <div className="ip-wrapper">
        {geolocationData.ip && (
          <>
            <h2>Your IP address is:</h2>
            <div className="ip-box" onClick={copyToClipboard}>
              {geolocationData.ip}
              {tooltipText && (
                <span className="copy-success hasTooltip">
                  <img src={copyImg} width="16px" height="16px"/>
                  <Tooltip tooltipText={tooltipText}/>
                </span>
              )}
            </div>
          </>
        )}
      </div>
      {geolocationData.org && (
        <div className="geo-info">ISP: {geolocationData.org}</div>
      )}
      {geolocationData.city && (
        <div className="geo-info">City: {geolocationData.city}</div>
      )}
      {geolocationData.region && (
        <div className="geo-info">Region: {geolocationData.region}</div>
      )}
      {geolocationData.country && (
        <div className="geo-info">Country: {geolocationData.country}</div>
      )}
      {geolocationData.postal && (
        <div className="geo-info">Postal Code: {geolocationData.postal}</div>
      )}
      {geolocationData.loc && (
        <>
          <div className="geo-info">
            Latitude: {geolocationData.loc.split(",")[0]}
          </div>
          <div className="geo-info">
            Longitude: {geolocationData.loc.split(",")[1]}
          </div>
        </>
      )}
      {geolocationData.postal && (
        <div className="geo-info">Postal Code: {geolocationData.postal}</div>
      )}
      {geolocationData.timezone && (
        <div className="geo-info">Timezone: {geolocationData.timezone}</div>
      )}
    </>
  );
};

export default geoCard;
