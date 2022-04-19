<template>
    <div class="centrar">
        <h1>Formulario 1</h1>
        <div class="centrar">
            <div >
                <table>
                    <tr>
                        <th>PREGUNTA</th>
                        <th>ENUNCIADO</th>
                        <th>RESPUESTA</th>
                    </tr>           
                    <tr v-for="info in info" :key="info">
                        <th>{{info.ID_PREGUNTA}}</th>
                        <th>{{info.ENUNCIADO}}</th>
                            <th v-for="respuesta in respuestas" :key="respuesta.pregunta" >
                                <v-select
                                :options="options"
                                :value="respuesta.resultado"
                                @input="(resultado) => updateRespuesta(respuesta, resultado)"
                             />
                        </th>
                    </tr>
                    
                </table>
            </div> 
            {{this.respuestas}}
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import resultados from '../opciones'

    export default {
        name: 'Form',
        data(){
            return{
                info: [],
                respuestas: [
                    {pregunta: 1 , resultado: ''},
                    {pregunta: 2 , resultado: ''},
                    {pregunta: 3 , resultado: ''},
                    {pregunta: 4 , resultado: ''},
                    {pregunta: 5 , resultado: ''},
                    {pregunta: 6 , resultado: ''},
                    {pregunta: 7 , resultado: ''},
                    {pregunta: 8 , resultado: ''},
                    {pregunta: 9 , resultado: ''},
                    {pregunta: 10 , resultado: ''},
                    {pregunta: 11 , resultado: ''},
                    {pregunta: 12 , resultado: ''},
                    {pregunta: 13 , resultado: ''},
                    {pregunta: 14 , resultado: ''},
                    {pregunta: 15 , resultado: ''},
                ],
            }
        },
        methods:{
            getInfo(){
                axios.get('http://localhost:9000/preguntasq1').then(response =>
                this.info = response.data)
                console.log(this.info)
            },
            updateRespuesta(respuesta,resultado){
                respuesta.resultado = resultado
            },
        },
        computed:{
            options: () => resultados
        },

        created(){
            this.getInfo()
        }
    }
</script>

<style >
    .centrar{
        justify-content: center;
        text-align: center;
    }
    table tr{
        padding: 15%;
        margin: 15%;
        text-align: center;
        justify-content: center;
        border: 1px black solid;
    }
</style>