import React from 'react'
import NavBar from '../components/NavBar.jsx'
import { Grid } from 'semantic-ui-react'
import NavBarMobile from '../components/NavBarMobile.jsx'

const PA1Inicio = () => {
   return (
      <>
         <Grid>
            <Grid.Row>
               <Grid.Column className='Head'>
                  <NavBarMobile />
               </Grid.Column>
            </Grid.Row>
            <Grid.Row>
               <Grid.Column className='Body'>

               </Grid.Column>
            </Grid.Row>
         </Grid>
      </>
   )
}

export default PA1Inicio