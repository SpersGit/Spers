<template>
  <div>
    <div class="centrar">
      <h1 class="margen">Particulares</h1>
      <hr>
    </div>

    <div class="web">
      <div>
        <h3>Nuestros servicios para particulares</h3>
      </div>
      <div class="separar">
        <p> 
          Som una empresa especialitzada en l'estudi del delicte i la seva prevencio, 
          calculem el risc i oferim mesures adients per cada cas en particular.
          <br>
          Cada persona és un món, i cada casa també. 
          Per aixó les mesures de seguretat han d'ajustar-se a la persona, la situació i l'ambient on viuen.
          <br>
          No a tothom en serveixen les mateixes mesures de seguretat per a prevenir el delicte.
        </p>
      </div>
      <div>
        <h4>Coneix els riscos i com prevenir-los</h4>
      </div>
      <div>
        <ul>
          <li>
            Vols protegir-te a casa i no saps si es millor una alarma? Un gos? Reforçar entrades?
          </li>
          <li>
            Vols coneixer quin son el riscos que hi ha a la meva zona i com reduir-me l'impacte?
          </li>
          <li>
            O be, coneixes quins trajectes, rutines o comportaments estas fent tu o el seu fill/a que son mes propenses propenses al delicte?
          </li>
          <li>
            Estem exposats a la deliquencia?
          </li>
        </ul>

      </div>
    </div>
    <div class="grid-container border">    
      <b-card-group class="card" deck>
        <b-card bg-variant="primary" text-variant="white" header="Domicili" class="text-center">
          <b-card-text>Referent als delictes de robatoris, ocupacio, etc..</b-card-text>
        </b-card>
        <b-card bg-variant="primary" text-variant="white" header="2ª Residencia" class="text-center">
          <b-card-text>Referent a l'ocupacio , destresses, robatoris, etc.</b-card-text>
        </b-card>
      </b-card-group>

      <b-card-group class="card" deck>
        <b-card bg-variant="primary" text-variant="white" header="Persones" class="text-center">
          <b-card-text>Referent a les amenaces, intimidacions, agresions, etc.</b-card-text>
        </b-card>
        <b-card bg-variant="primary" text-variant="white" header="Vehicle" class="text-center">
          <b-card-text>Referent a la destrosa, intent de robatori del Vehicle o objectes.</b-card-text>
        </b-card>
      </b-card-group>

      <b-card-group class="card" deck>
        <b-card bg-variant="primary" text-variant="white" header="Contra Patrimoni" class="text-center">
          <b-card-text>Referent al robatori de carteres, atracament, etc.</b-card-text>
        </b-card>
        <b-card bg-variant="primary" text-variant="white" header="Estafes, Fraus i Enganys" class="text-center">
          <b-card-text>Referent a delictes online, presencial o telefonicament.</b-card-text>
        </b-card>
      </b-card-group> 
    </div>
  </div>
</template>

<style>

  .separar{
    margin-left: 2%;
  }

  .margen{
    margin: 2%;
  }
  .particular{
    width: 100%;
    padding: 10px;
    border: 1px black solid;
  }
  .grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    padding: 10px;
    text-align: center;
    justify-content: center;
  }
  .card{
    margin: 2%;
  }
</style>