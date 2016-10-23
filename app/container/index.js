import React, { Component, PropTypes } from 'react';
import Menu from '../Menu';
import { connect } from 'react-redux';
import AirportActionCreators from '../actions/AirportActionCreators';

class Index extends Component {
  componentDidMount() {
    this.props.fetchAirports();
  }

  render() {
    return(
      <div className="index">
        <Menu />
        <h3>Index Page</h3>
        {this.props.airports.map((airport, index) => (
          <div key={airport.code}>
            {airport.code} - {airport.city} - {airport.country}
          </div>
        ))}
      </div>
    );
  }
};

Index.propTypes = {
  airports: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  airports: state.airports
});

const mapDispatchToProps = (dispatch) => ({
  fetchAirports: () => dispatch(AirportActionCreators.fetchAirports())
});

const IndexContainer = connect(mapStateToProps, mapDispatchToProps)(Index);

export default IndexContainer;