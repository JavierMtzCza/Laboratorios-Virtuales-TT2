import React from 'react'
import {
   Button,
   Divider,
   Grid,
   Header,
   Icon,
   Search,
   Segment,
} from 'semantic-ui-react'

const Footer = () => {
   return (
      <>
         <Segment placeholder size='large'>
            <Grid columns={2} stackable textAlign='center'>
               <Grid.Row verticalAlign='middle'>
                  <Grid.Column>
                     <Header icon>
                        <Icon name='search' />
                        Find Country
                     </Header>
                     <Search placeholder='Search countries...' />
                  </Grid.Column>

                  <Grid.Column>
                     <Header icon>
                        <Icon name='world' />
                        Add New Country
                     </Header>
                     <Button primary>Create</Button>
                  </Grid.Column>
               </Grid.Row>
            </Grid>
         </Segment>
      </>
   )
}

export default Footer