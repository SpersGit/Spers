<template>
    <div class="container">
        <div class=" text-center mt-5 ">
        <h1>Contacto</h1>
        <hr>
    </div>
    <div class="row centrar">
        <div class="col-lg-7 mx-auto">
            <div class="card mt-2 mx-auto p-4 bg-light">
                <div class="card-body bg-light">
                    <div class="container">
                        <form id="contact-form" role="form">
                            <div class="controls">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_name">Nombre</label> <input id="form_name" type="text" name="name" class="form-control" placeholder="Introduzca el nombre" required="required" data-error="Firstname is required."> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_lastname">Apellido</label> <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Introduzca los apellidos" required="required" data-error="Lastname is required."> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_email">Correo</label> <input id="form_email" type="email" name="email" class="form-control" placeholder="Introduzca el correo" required="required" data-error="Valid email is required."> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_need">Que seccion es?</label> 
                                            <select id="form_need" name="need" class="form-control" required="required" data-error="Por favor seleccione una">
                                                    <option value="" selected disabled>Seleccione una respuesta</option>
                                                    <option>Particulares</option>
                                                    <option>Empresa</option>
                                                    <option>Institucion</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group"> <label for="form_message">Descripcion</label> <textarea id="form_message" name="message" class="form-control" placeholder="Escriba a continuacion el mensaje que desee" rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                    </div>
                                    <div class="col-md-12"> <input type="submit" class="btn btn-primary btn-send pt-2 btn-block " value="Enviar"> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> <!-- /.8 -->
        </div> <!-- /.row-->
    </div>
</div>
</template>

<style >
h1 {
    margin-bottom: 40px
}

label {
    color: #333
}

.btn-send {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    width: 80%;
    margin-left: 3px
}

.help-block.with-errors {
    color: #ff5050;
    margin-top: 5px
}

.card {
    margin-left: 10px;
    margin-right: 10px
}
</style>