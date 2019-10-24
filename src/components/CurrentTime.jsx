import React, { useState, useEffect } from 'react';

const CurrentTime = props => {

  const [date, setDate] = useState({
    date: new Date().toLocaleTimeString()
  });
  useEffect(
    () => {
      setInterval(
        () => {
          setDate({
            date: new Date().toLocaleTimeString()
          })
        }, 1000)
    }, [])


  return (
    <div className="currentTime" >
      <h4>
        Now is {date.date}
      </h4>
      <p><small>{props.sign}</small></p>
    </div>
  )
};

export default CurrentTime