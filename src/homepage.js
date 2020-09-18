import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'

const Home = () => {
    const history = useHistory()
    return (
        <>
          <h1>Lambda Eats</h1>
          <p>You can remove this code and create your own header</p>
          <div>
            <h2>Our Specials</h2>
            <div>
                <button onClick = {()=>history.push('/pizza')}>Make a pizza</button>
            </div>
          </div>
        </>
      );
}

export default Home