import React, { useRef, useState } from 'react'
import Grafica from '../components/Grafica'
import { Button, Form, Grid, Input, Label } from 'semantic-ui-react'

const PA7Graficar = () => {

   const [dominio, setDominio] = useState(25)
   const [terminos, setTerminos] = useState({ terminoCuadratico: 1, terminoLineal: 0, terminoIndependiente: 0 })
   const termCuad = useRef(1)
   const termLin = useRef(0)
   const termInd = useRef(0)

   const handleSubmit = () => {
      event.preventDefault()
      setTerminos({
         terminoCuadratico: termCuad.current,
         terminoLineal: termLin.current,
         terminoIndependiente: termInd.current
      })
   }

   return (
      <Grid style={{ height: "80vh" }}>
         <Grid.Column>
            <Grid.Row>
               <Form>
                  <Form.Group inline>
                     <Form.Field width={'6'}>
                        <Input placeholder='T. Cuadratico' type='number' fluid label="x^2" labelPosition='right' onChange={(e) => { termCuad.current = e.target.value }} />
                        <Label circular size='large'>+</Label>
                     </Form.Field>
                     <Form.Field width={'6'}>
                        <Input placeholder='T. Lineal' type='number' fluid label="x" labelPosition='right' onChange={(e) => { termLin.current = e.target.value }} />
                        <Label circular size='large'>+</Label>
                     </Form.Field>
                     <Form.Field width={'6'}>
                        <Input placeholder='T. Independiente' type='number' fluid onChange={(e) => { termInd.current = e.target.value }} />
                        <Label circular size='large'> =y</Label>
                     </Form.Field>
                     <Button onClick={handleSubmit}>Graficar</Button>
                  </Form.Group>
               </Form>
            </Grid.Row>
            <Grafica termCuadratico={terminos.terminoCuadratico}
               termLinear={terminos.terminoLineal}
               termIndependiente={terminos.terminoIndependiente}
               dominio={dominio}
            />
            <Grid.Row>
               <Input type='range'
                  min="5"
                  max="50"
                  step="5"
                  onChange={(w) => { setDominio(w.target.value) }}
                  label={<Label basic content={`-${dominio} a +${dominio}`}></Label>}
                  labelPosition='right'
               />
            </Grid.Row>
         </Grid.Column>
      </Grid >

   )
}

export default PA7Graficar