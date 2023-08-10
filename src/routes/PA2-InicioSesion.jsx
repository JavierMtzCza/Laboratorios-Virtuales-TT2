import { Button, Divider, Form, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react'
import imagen from "../images/undraw_login_re_4vu2 1.svg"
import { Link } from 'react-router-dom'

const PA2InicioSesion = () => {
  return (
    <>
      <Grid columns={2} style={{ height: "103vh" }}>
        <Grid.Row>
          <Grid.Column style={{ background: "#E0DCDC" }} stretched>
            <Image src={imagen}></Image>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
              <Header as='h1' style={{ margin: "5% 0 0 5%" }}> Bienvenido a</Header>
              <Header as='h1' style={{ margin: "0 0 15% 10%" }}> Math Learn Lab</Header>
            </Grid.Row>
            <Grid.Row>
              <Form style={{ margin: "0 15% 5% 15%" }}>
                <Form.Input iconPosition='left' fluid label="Correo" placeholder="Ingrese su correo" type='email'>
                  <Icon name='at' />
                  <input/>
                </Form.Input>
                <Form.Input iconPosition='left' fluid label="Password" placeholder="Ingrese su contrasena" type='password'>
                  <Icon name='key' />
                  <input />
                </Form.Input>
                <Button fluid animated>
                  <Button.Content visible>Iniciar Sesion</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>
              </Form>
            </Grid.Row>
            <Grid.Row>
              <Segment style={{ margin: "0 20% 0 20%" }} basic textAlign='center'>
                <Link to="/SingUp">
                  <Header as='h4'>No tienes una cuenta?</Header>
                </Link>
                <Divider horizontal>O</Divider>
                <Link to="/SingUp">
                  <Header as='h4'>Se te olvido tu contrasena?</Header>
                </Link>
              </Segment>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default PA2InicioSesion