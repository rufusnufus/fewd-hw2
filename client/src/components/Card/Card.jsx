import React from 'react'

import './index.css'

function Card({ id, name, email, avatar, address }) {
  return (
    <div className="card">
      <img className="card__image" src={avatar} alt="avatar" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{address}</p>
      <p>ID: {id}</p>
    </div>
  )
}

export default Card
