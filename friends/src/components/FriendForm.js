import React from 'react';

function FriendForm(props) {
      const handleClick = event => {
            if (props.isAdding) {
                  props.addFriend(props.friend)
            } else {
                  props.editFriend();
            }
      }

      return (
            <div className='form-wrap'>
                  <h1 className='form-title'>{props.isAdding ? 'Add A Friend!' : 'Edit Friend'}</h1>
                  <form className='form'>
                        <input 
                              type='text'
                              name='name'
                              placeholder='name..'
                              value={props.friend.value}
                        />
                        <input 
                              type='number'
                              name='age'
                              placeholder='age..'
                              value={props.friend.age}
                        />
                        <input 
                              type='text'
                              name='email'
                              placeholder='email..'
                              value={props.friend.email}
                        />
                        <button onClick={handleClick}>{props.isAdding ? 'Add' : 'Edit'}</button>

                  </form>

            </div>
      )
}

export default FriendForm;