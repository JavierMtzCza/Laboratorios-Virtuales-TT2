import { Button, Divider, Form, Grid, Header, Icon, Image, Input, Segment } from 'semantic-ui-react'
import imagen from "../images/undraw_login_re_4vu2 1.svg"
import { Link } from 'react-router-dom'

const PA3Registro = () => {

  return (
    <>
      <Grid columns={2} style={{ height: "104vh" }}>
        <Grid.Row>
          <Grid.Column style={{ background: "#E0DCDC" }} stretched>
            <Image src={imagen}></Image>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
              <Header as='h1' style={{ margin: "5% 0 0 5%" }}> Bienvenido a Math Learn Lab</Header>
              <Header as='h1' style={{ margin: "0 0 10% 10%" }}> Registro</Header>
            </Grid.Row>
            <Grid.Row>
              <Form style={{ margin: "0 5% 5% 5%" }}>
                <Form.Group widths='equal'>
                  <Form.Field control={Input} label='Nombre' />
                  <Form.Field control={Input} label='Apellido Materno' />
                  <Form.Field control={Input} label='Apellido Paterno' />
                </Form.Group>
                <Form.Field control={Input} type='email' placeholder='Ingrese su correo'
                  label="Correo"
                  iconPosition='left' icon={<Icon name='mail' inverted circular />}
                  fluid
                />
                <Form.Field control={Input} type='password' placeholder='Ingrese su contrasena'
                  label="Contrasena"
                  iconPosition='left' icon={<Icon name='key' inverted circular />}
                  fluid
                />
                <Form.Field control={Input} type='paspassword' placeholder='Verifique su contrasena'
                  iconPosition='left' icon={<Icon name='key' inverted circular />}
                  fluid
                  //error={error1}
                />
                <Button fluid animated>
                  <Button.Content visible>Registrarme</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>
              </Form>
            </Grid.Row>
            <Grid.Row>
              <Segment style={{ margin: "0 10% 0 10%" }} basic textAlign='center'>
                <Link to="/SingIn">
                  <Header as='h4' content="Ya tienes una cuenta?" />
                </Link>
                <Divider horizontal> o </Divider>
                <Link to="/">
                  <Header as='h4' content="Regresar a Inicio" />
                </Link>
              </Segment>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default PA3Registro