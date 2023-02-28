import React from 'react'

const grid = ({loading , users}) => {
  return loading ? (
    <div id="main">

    </div>
  ):(
    <div className='row'>
        {users.map((user)=>(
            <div className='col-span-3'>
                <div className='info'>
                    <img src={user.avatar} alt={user.avatar} className='image'/>
                    <h2><b>ID: {user.id}</b></h2>
                    <h3 className='name'>
                        {user.first_name} {user.last_name}
                    </h3>
                </div>
            </div>
        ))}
    </div>    
  );
};

export default grid