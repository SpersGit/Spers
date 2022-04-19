<template>
  <div class="centrarFotter">
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Servicios</h3>
              <ul>
                <li><a href="/Paticulares">Particular</a></li>
                <li><a href="/Empresas">Empresa</a></li>
                <li><a href="/Empresas">Institución</a></li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>SPERS</h3>
              <p>Somos una empresa joven.</p>
            </div>
            <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
            </div>
            <p class="copyright">SPERS © 2022</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
.footer-dark {
  padding:10px 0;
  color:black;
  background-color: #C2F9EC;
}

.footer-dark h3 {
  margin-top:0;
  margin-bottom:8px;
  font-weight:bold;
  font-size:16px;
}

.footer-dark ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-dark ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

.footer-dark ul a:hover {
  opacity:0.8;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align:center;
    padding-bottom:10px;
  }
}

.footer-dark .item.text {
  margin-bottom:36px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom:0;
  }
}

.footer-dark .item.text p {
  opacity:0.6;
  margin-bottom:0;
}

.footer-dark .item.social {
  text-align:center;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align:center;
    margin-top:10px;
  }
}

.footer-dark .item.social > a {
  font-size:20px;
  width:36px;
  height:36px;
  line-height:36px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  box-shadow:0 0 0 1px black;
  margin:0 8px;
  color:black;
  opacity:0.75;
}

.footer-dark .item.social > a:hover {
  opacity:0.9;
}

.footer-dark .copyright {
  text-align:center;
  padding-top:8px;
  opacity:0.3;
  font-size:13px;
  margin-bottom:0;
}

</style>