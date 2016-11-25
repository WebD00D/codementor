import React from 'react';

class CitySelector extends React.Component{
  render(){
    return(
      <div className="module-section module-section--city">
        <h1 className="lh-title lh-solid black-70">Cities</h1>
        <div className="city-wrapper">

          <div className="city-child city-child--sanfrancisco">
            <div className="city-child__overlay"></div>
            <div className="city-child__name">San Francisco</div>
          </div>

          <div className="city-child city-child--saltlakecity">
            <div className="city-child__overlay"></div>
            <div className="city-child__name">Salt Lake City</div>
          </div>

          <div className="city-child city-child--richmond">
            <div className="city-child__overlay"></div>
            <div className="city-child__name">Richmond</div>
          </div>

          <div className="city-child city-child--newyork">
            <div className="city-child__overlay"></div>
            <div className="city-child__name">New York</div>
          </div>

          <div className="city-child city-child--portland">
            <div className="city-child__overlay"></div>
            <div className="city-child__name">Portland</div>
          </div>

          <div className="city-child city-child--austin">
            <div className="city-child__overlay"></div>
            <div className="city-child__name">Austin</div>
          </div>

          <div className="city-child city-child--losangeles">
            <div className="city-child__overlay"></div>
            <div className="city-child__name">Los Angeles</div>
          </div>

          <div className="city-child city-child--seattle">
            <div className="city-child__overlay"></div>
            <div className="city-child__name">Seattle</div>
          </div>


        </div>

      </div>
    )
  }
}

export default CitySelector;
