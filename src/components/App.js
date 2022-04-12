import React from 'react'
import '../styles/App.css';
import { Faq } from './Faq';
const App = () => {

  return (
    <div id="main">
      <div className='faq-container'>
        <Faq text={'Text 1, this is a faq'} title='Title 1' />
      </div>
    </div>
  )
}


export default App;
