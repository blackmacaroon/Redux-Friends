import React from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../store/actions';
import FriendsList from '../components/FriendsList';


class FriendsListView extends React.Component {
      state = {
            friends: []
      }
      
      componentDidMount() {
            this.props.getFriends();
      }

      render() {
            return (
                  <div>
                        <FriendsList 
                              isFetching={this.props.isFetching}
                        />
                  </div>
            )
      }
} 

const mapStateToProps = state => {
      return ({
            isFetching: state.friendReducer.isFetching,
            friends: state.friendReducer.friends
      })
}

export default connect(
      mapStateToProps,
      { getFriends }
)(FriendsListView)