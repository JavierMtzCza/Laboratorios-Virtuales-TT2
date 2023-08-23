import React, { useEffect } from 'react'
import Plot from 'react-plotly.js';

const Grafica = ({ termCuadratico, termLinear, termIndependiente, dominio}) => {

   var xs = []
   var ys = []
   var raizX = []
   var raizY = []
   var Fx = termCuadratico + "x^2 " + termLinear + "x + " + termIndependiente

   const a = eval(termCuadratico)
   const b = eval(termLinear)
   const c = eval(termIndependiente)


   for (var x = -dominio; x <= dominio; x += .4) {
      xs.push(x)
      ys.push((a * x * x) + (b * x) + (c))
   }

   var discriminante = (b * b) - (4 * a * c)

   if (discriminante > 0) { //Dos soluciones
      console.log("Hay 2 soluciones")
      raizX = [((-b + Math.sqrt(discriminante)) / (2 * a)), ((-b - Math.sqrt(discriminante)) / (2 * a))]
      raizY = [0, 0]
   } else if (discriminante == 0) { //Una solucion
      console.log("Hay 1 solucion")
      raizX = [((-b + Math.sqrt(discriminante)) / (2 * a))]
      raizY = [0]
   } else if (discriminante < 0) {
      console.log("No hay soluciones")
      console.log(raizX)
      console.log(raizY)
   }

   return (
      <Plot
         data={[
            {
               name: 'Ecuacion',
               x: xs,
               y: ys,
               type: 'scatter',
               mode: 'lines+markers',
               marker: { color: '#68FF33' },
            },
            {
               name: 'Raices',
               x: raizX,
               y: raizY,
               mode: 'markers',
               marker: {
                  size: [18, 18],
               }
            }
         ]}

         layout={{
            title: Fx,
            showlegend: true,
            autosize: true,
            modebar: { remove: ['lasso2d', 'hoverClosestGl2d', 'select2d', 'resetScale2d'] },
         }}

         config={{
            responsive: true,
            scrollZoom: true,
            toImageButtonOptions: {
               format: 'png',
               filename: "funcion-" + Fx,
            },
            displayModeBar: true,
            displaylogo: false
         }}
         style={{ height: "100%", width: "100%" }}
      />
   )
}

export default Grafica