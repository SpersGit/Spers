<template>
    <div class="centrar">
        <h1>Formulario 2</h1>
        <div class="centrar">
            <table>
                <tr>
                    <th>PREGUNTA</th>
                    <th>ENUNCIADO</th>
                    <th>RESPUESTA</th>
                </tr> 
                <tr v-for="info2 in info2">
                    <th>{{info2.Id}}</th>
                    <th>{{info2.Enunciado}}</th>
                    <th>
                        <v-radio-group
                            v-model="row"
                            row
                        >
                            <v-radio
                                label="SI"
                                value="SI"
                            ></v-radio>
                            <v-radio
                                label="NO"
                                value="NO"
                            ></v-radio>
                        </v-radio-group>
                    </th>
                </tr>
            </table>
        </div>
        <br>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'Form2',
        data(){
            return{
            info2: [],
            row: null,
            }
        },
        methods:{
        getInfo2(){
            axios.get('http://localhost:9000/preguntasq2').then(response =>
            this.info2 = response.data)
            console.log(this.info2)
            },
        },
        
        computed:{
            created(){
            this.getInfo2()
            }
        }
    }
</script>

<style >
    .centrar{
        justify-content: center;
        text-align: center;
    }
    /* table tr{
        padding: 15%;
        margin: 15%;
        text-align: center;
        justify-content: center;
        border: 1px black solid;
    } */
</style>