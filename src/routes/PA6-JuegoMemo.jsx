import { useState } from 'react'
import Cards from '../components/Cards'
import { Button, Divider, Form, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react'
import imagen from "../images/undraw_login_re_4vu2 1.svg"
import { Link } from 'react-router-dom'

const PA6JuegoMemo = () => {
  return (
    
    <div style={{
        textAlign: "center" }}
      className='PA6JuegoMemo'>

        <h2>Memory Game</h2>
        <Cards/>
    </div>
    
  );
}

export default PA6JuegoMemo