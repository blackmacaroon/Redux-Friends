import React from 'react';

function FriendsList(props) {
      return (
            <div className='friend-list-wrap'>
                  <div>
                        {props.friends.map(friend => (
                              <div className='friend' key={friend.id}>
                                    <h3>{friend.name}</h3>
                                    <p>{friend.age}</p>
                                    <p>{friend.email}</p>
                              </div>
                        ))}
                  </div>

            </div>
      )
}

export default FriendsList;