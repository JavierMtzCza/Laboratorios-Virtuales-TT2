import { Grid, GridColumn, GridRow, Header, Icon, Image } from 'semantic-ui-react'
import NavBarMobile from '../components/NavBarMobile.jsx'
import NavBar from '../components/NavBar.jsx'

import imagen1 from "../images/matematicas.png"
import imagen2 from "../images/Group 1 (2).svg"
import Footer from '../components/Footer.jsx'

const PA1Inicio = () => {
   return (
      <>
         <Grid >
            <Grid.Row only='computer'>
               <Grid.Column>
                  <NavBar image={imagen1} />
               </Grid.Column>
            </Grid.Row>
            <Grid.Row only='tablet mobile'>
               <Grid.Column>
                  <NavBarMobile image={imagen1} />
               </Grid.Column>
            </Grid.Row>
            <GridRow textAlign='center' stretched>
               <GridColumn verticalAlign='middle' width={6}>
                  <Header as='h2' icon>
                     <Icon name='settings' />
                     Account Settings
                     <Header.Subheader>
                        Manage your account settings and set e-mail preferences.
                     </Header.Subheader>
                  </Header>
               </GridColumn>
               <Grid.Column width={10} verticalAlign='middle'>
                  <Image src={imagen2} fluid />
               </Grid.Column>
            </GridRow>
            <Grid.Row>
               <Grid.Column>
                  <Footer />
               </Grid.Column>
            </Grid.Row>
         </Grid>
      </>
   )
}

export default PA1Inicio