<template>
  <div>
    <div class="centrar">
      <h1>Sobre Nosotros</h1>
      <hr/>   
    </div>
    
    <div class="web">
      <div class="qa">
        <input type="checkbox" id="qa0" />
        <label for="qa0">LOS PRINCIPIOS DE SPERS</label>
        <div>
          Desde los ideales de trabajo, formación y compromiso SPERS desarrolla sus actividades como empresa. Tiene como foco principal el estudio del delito y su prevención. La seguridad de las personas es el centro de todos nuestros objetivos. Queremos hacer de los clientes de SPERS la comunidad más segura del mundo.
        </div>
      </div>

      <div class="qa">
        <input type="checkbox" id="qa1" />
        <label for="qa1">INOVACIÓN</label>
        <div>
          El espíritu crítico, la energía y la pasión por la seguridad conducen al equipo de SPERS hacía una constante renovación y búsqueda de nuevas posibilidades en la lucha contra el delito. En este sentido, los delitos son variables y con ello el riesgo de ser víctimas de éste, por lo que el compromiso con la búsqueda de nuevas herramientas para combatirlo o minimizarlo es una de las premisas más destacable de los responsables de SPERS.
        </div>
      </div>

      <div class="qa">
        <input type="checkbox" id="qa2" />
        <label for="qa2">QUE HACEMOS?</label>
        <div>
          Estudiamos los riesgos y ofrecemos contramedidas para combatirlo. Lo hacemos para cada persona o vivienda, puesto que no todos tenemos los mismos riesgos ni los mismos miedos necesitamos estudios personalizados para poder prevenir y así evitar aquello que nos preocupa. ¿Pero qué es esto exactamente? Bien, imagínese que su hijo pasa muchas horas delante del ordenador, ¿Es segura la actividad que está realizando? ¿Podemos formarle a él y a sus padres para conocer y prevenir de mejor forma delitos como la sustracción de datos, envío de fotografías, etc.? Pero, ¿Y si lo que me preocupa es que me ocupen el domicilio? Necesitaré un informe para conocer las probabilidades, los riesgos y las vulnerabilidades. Si soy consciente de todo ello podré tomar mejores decisiones. Estos son unos ejemplos de la infinidad de casos que ocurren hoy en día y de los que la mayoría de nosotros no tenemos la información correcta para combatirlo.
        </div>
      </div>

      <div class="qa">
        <input type="checkbox" id="qa3" />
        <label for="qa3">NUESTRO PLANETA</label>
        <div>
          Uno de los objetivos centrales es cuidar el bienestar de las personas, pero también estamos comprometidos con el bienestar del planeta. Por ello, desarrollamos un negocio sostenible para nuestros clientes, empleados e instituciones públicas. Avanzamos hacia un modelo de negocio con cero papel, apoyamos y buscamos empresas cuya actividad facilite este avance hacia la lucha contra la crisis climática.
        </div>
      </div>

      <div class="qa">
        <input type="checkbox" id="qa4" />
        <label for="qa4">TRABAJAR EN SPERS</label>
        <div>
          SPERS se caracteriza por tener en su equipo personas creativas, innovadoras y con capacidad de trabajo en equipo. Somos conscientes de las numerosas dificultades que hay hoy en día para muchas personas a la hora de estudiar o de conseguir experiencia en puestos laborales. Por ello, aún valorando positivamente la formación externa que haya podido realizarse creemos que no es algo excluyente no haberla podido realizar. Así como no haber tenido recorrido dentro del mundo laboral. En este sentido, ofrecemos formaciones específicas en los puestos de trabajo y solo debes traer compromiso e ilusión. Si no tienes la formación o la experiencia, no te preocupes y atrévete ¡trabaja con nosotros!
        </div>
      </div>

      <div class="qa">
        <input type="checkbox" id="qa5" />
        <label for="qa5">SIGUENOS!</label>
        <div>
          RRSS
        </div>
      </div>
    </div>
    

  </div>
</template>

<style>
  .qa {
    margin-bottom:10px;  
    margin: 2%;
  }
  .qa input {
    display:none;
  }
  .qa label {
    display:block;
    height:30px;
    line-height:30px;
    font-weight:bold;
    text-transform:uppercase;
  }
  .qa label:before {
    content:"+";
    display:inline-block;
    height:30px;
    width:30px;
    background:#ccc;
    color:White;
    text-align:center;
    margin-right:10px;
  }
  .qa div {
    display:none;
    padding-top:5px;
    margin-left: 3%;
  }
  .qa input:checked ~ label:before {
    content:"-";
    background:#5D7278;
  }
  .qa input:checked ~ div {
    display:block;
  }
</style>