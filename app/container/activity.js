import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ActivityActionCreators from '../actions/ActivityActionCreators';

class Activity extends Component {
  componentWillMount() {
    this.props.fetchAcitvity();
  }

  render() {
    return (
      <div>
        <p>Title: {this.props.activity.title}</p>
        <p>Img: {this.props.activity.img}</p>
      </div>
    )
  }
};

Activity.propTypes = {
  activity: PropTypes.object 
};

const mapStateToProps = (state) => ({
  activity: state.activity
});

const mapDispatchToProps = (dispatch) => ({
  fetchAcitvity: () => dispatch(ActivityActionCreators.fetchActivity())
})

const ActivityContainer = connect(mapStateToProps, mapDispatchToProps)(Activity);

export default ActivityContainer;