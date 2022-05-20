<template>
  <div>
      <div class="header-block-image text-white">
      <div class="container">
          <div class="bienvenue-block w-75">
              <h1 class="font-weight-bold">Bienvenue chez vous</h1>
              <p class="font-weight-bold">DÉMARRER UNE RÉSERVATION</p>
                <div class="card-news-info bord-rad-10 p-5 w-100">
                    <div class="row px-5">
                        <div class="col-md-3">
                            <div class="content-bienvenue">
                                <p class="font-weight-bold color-bl-dark">
                                    ARRIVÉE
                                </p>
                                <div class="date-block p-3">
                                    <small class="mb-0">SAMEDI</small>
                                    <p class="mb-0"> <span class="number font-weight-bold color-violet"> 17  </span><small>AVR.2021</small></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="content-bienvenue">
                                <p class="font-weight-bold color-bl-dark">
                                    DEPART
                                </p>
                                <div class="date-block p-3">
                                    <small>DIMANCHE</small>
                                    <p class="mb-0"> <span class="number font-weight-bold color-violet"> 18  </span><small>AVR.2021</small></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="content-bienvenue">
                                <p class="font-weight-bold color-bl-dark">
                                    INVITÉS
                                </p>
                                <div class="date-block text-center d-flex justify-content-between pb-4 p-3">
                                    <div>
                                    <small class="font-weight-bold">ADULTES</small>

                                    <p class="fs-4 p-1 mb-0 mx-2 my-4 bg-violet bord-rad-5 font-weight-bold"> 2 </p>

                                    </div>
                                    <div>
                                    <small class="font-weight-bold">ENFANTS</small>

                                    <p class="fs-4 p-1 mb-0 mx-2 my-4 bg-violet bord-rad-5 font-weight-bold"> 1</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="content-bienvenue">
                                <div class="pos-relative">
                                <button class="btn btn-violet font-weight-bold w-100">VOIR DISPONIBILITE</button>

                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-3"></div>
                        <div class="col-md-3"></div>
                        <div class="col-md-3"></div>
                    </div>
                </div>
          </div>
      </div>
    </div>
    <div class="container my-5 py-5">
        <h1 class="text-gr">À propos de </h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header-block-image {
  height: 570px !important;
  background: url(../assets/header-img.png);
  background-size: 100% 150%;
  background-repeat: no-repeat;
  position: relative;
}
.card-news-info {
    background: #fff;
    box-shadow: 0px 2px 8px #7c7a7a6b;
}
.bienvenue-block {
    position: absolute;
    bottom: -105px;
    left: 20%;
    transform: translate(-10%, 10px);
}
.bord-rad-10{
    border-radius: 10px;
}
.bord-rad-5{
    border-radius: 5px;
}
.date-block {
    background: #f7f7f7;
    color: #000;
    span.number{
        font-size: 50px !important;
    }
}
.content-bienvenue button{
    height: 50px;
}
.pos-relative{
    position: relative;
    button{
        position: absolute;
    top: 118px;
    }
}
</style>