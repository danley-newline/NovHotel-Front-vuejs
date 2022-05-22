<template>
  <div class="">
    <div class="header-block-image text-white"
    :style="{
      'background-image': 'url(' + require(`../assets/images/${placeContent.imgPrim}`) + ')'
  }">
      <div class="container">
        <img class="heart-icon" width="50" src="../assets/images/menu.png" alt="" />
      </div>
    </div>
    <div class="container pos-relative">
      <div class="row mt-5">
        <div class="col-md-7">
          <h1>{{placeContent.chambre}}</h1>
          <small>{{placeContent.villaName}}</small> <br />
          <small>{{placeContent.lieu}}</small>

          <div class="d-flex my-2 justify-content-between block-novtitle">
            <div v-for="(item, i) in placeContent.comode" :key="i">
              <img width="10" :src="require(`../assets/images/${item.icon}`)" alt="" />
              <span>{{item.text}}</span>
            </div>
          </div>

          <div class="bord-btm-ccc my-4 pb-5">
              <h2 class="font-weight-bold">À propos</h2>
              <p class="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quam corporis voluptatem, facilis dolores dolore sit, molestiae, impedit ex culpa eius quod officia velit accusamus? Doloribus eum animi culpa. Nemo enim reprehenderit quasi soluta fugiat, unde consequatur ratione perspiciatis atque ipsa quibusdam temporibus, eveniet, earum laudantium cumque adipisci porro eius.</p>
              <p class="color-bl-dark">Lire la suite</p>
          </div>

          <div class="bord-btm-ccc my-5 pb-5">
              <h2 class="font-weight-bold">Principales caractéristiques</h2>
                <div class="w-50 mt-4 d-flex justify-content-between principales">
                    <div>
                        <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>Bar extérieur</span>
                        </p>
                        <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>Climatisation centrale</span>
                        </p>
                        <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>Équipement de fitness</span>
                        </p>
                        
                    </div>
                    <div>
                        <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>Four à pizza</span>
                        </p>
                        <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>Chambre à vapeur</span>
                        </p>
                    </div>
                </div>

          </div>

            <div class="bord-btm-ccc  my-y pb-5">
              <h2 class="font-weight-bold">Service inclus</h2>
              <div class="bord-ccc px-4 py-5 mt-4 d-flex justify-content-between services">
                    <div>
                        <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>Majordome</span>
                        </p>
                        <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>Accès à une salle de  sport partagée</span>
                        </p>
                        <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>Nettoyage tous les jours</span>
                        </p>
                        <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>Notre équipe locale disponible pendant tout votre séjour</span>
                        </p>
                        
                    </div>
                    
                    <div class="right-service">
                        <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>Pétit-dejeuner préparé</span>
                        </p>
                        <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>chef</span>
                        </p>
                        <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>Un tailleur dédié pour organiser vos vacances sur-mesure</span>
                        </p>
                    </div>
                </div>
                <p class="mt-4">Lorem ipsum dolor sit amet ? Modi asperiores natus eius, ipsam totam qui voluptatibus facere laboriosam delectus atque earum aliquid necessitatibus error obcaecati nihil iure eaque deleniti quia magnam doloremque suscipit cumque! Nobis veritatis perferendis porro?</p>

            </div>

            <div class="bord-btm-ccc my-5 pb-5 pieces-block">
              <h2 class="font-weight-bold">Les pièces</h2>
              <div class="row mt-5">
                  <div class="col-md-4">
                      <div class="bord-ccc py-4 px-5 mb-4">
                          <p class="font-weight-bold">
                              Le salon
                          </p>
                          <p>Hifi stéréo</p>
                          <p>1 télé</p>
                          <p>Cheminée</p>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="bord-ccc py-4 px-5 mb-4">
                          <p class="font-weight-bold">
                              Le salon
                          </p>
                          <p>Hifi stéréo</p>
                          <p>1 télé</p>
                          <p>Cheminée</p>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="bord-ccc py-4 px-5 mb-4">
                          <p class="font-weight-bold">
                              Le salon
                          </p>
                          <p>Hifi stéréo</p>
                          <p>1 télé</p>
                          <p>Cheminée</p>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="bord-ccc py-4 px-5 mb-4">
                          <p class="font-weight-bold">
                              Le salon
                          </p>
                          <p>Hifi stéréo</p>
                          <p>1 télé</p>
                          <p>Cheminée</p>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="bord-ccc py-4 px-5 mb-4">
                          <p class="font-weight-bold">
                              Le salon
                          </p>
                          <p>Hifi stéréo</p>
                          <p>1 télé</p>
                          <p>Cheminée</p>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="bord-ccc py-4 px-5 mb-4">
                          <p class="font-weight-bold">
                              Le salon
                          </p>
                          <p>Hifi stéréo</p>
                          <p>1 télé</p>
                          <p>Cheminée</p>
                      </div>
                  </div>
                  <p class="color-bl-dark mt-3">Voir toutes les chambres</p>
              </div>
          </div>

          <div class="bord-btm-ccc my-5 pb-5 localisation-block">
              <h2 class="font-weight-bold">Localisation</h2>
              <div class="d-flex my-4 localisation">
                  <p>
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>A la plage d'Assinie</span>
                        </p>
                    <p class="mx-5">
                        <img width="10" src="../assets/images/menu.png" alt="" />
                        <span>Vue sur la mer</span>
                        </p>
              </div>
              <div class="block-img-localise mb-5">
                <img src="../assets/images/img1.png" class="img-fluid" alt="" />

                <img class="map-icon" width="50" src="../assets/images/menu.png" alt="" />

              </div>
          </div>

            <div class="bord-btm-ccc my-5 pb-5 experience">
              <h2 class="font-weight-bold">Expériences</h2>
              <p class="my-4">Lorem ipsum, dolor sit amet confacilis dolores dolore sit, molestiae Doloribus eum animi culpa. Nemo enim reprehenderit quasi soluta fugiat, unde consequatur ratione perspiciatis atque ipsa quibusdam temporibus, eveniet, earum laudantium cumque adipisci porro eius.</p>
          
                <div class="row">
                    <div class="col-md-4" v-for="(item,i) in experienceContent" :key="i">
                        <div class="card-img-block" :style="{'background-image': 'url(' + require(`../assets/images/${item.img}`) + ')'}">
                        </div>
                        <p class="my-4"> {{item.text}} </p>
                    </div>
                </div>
                
                
                  <p class="color-bl-dark mt-3">Tout afficher</p>

            </div>

            <div class="my-5 pb-5">
              <h2 class="font-weight-bold">Ils ont séjourné chez nous</h2>
              <p class="mt-4">Lorem ipsum, dolor sit amet confacilis dolores dolore sit, molestiae Doloribus eum animi culpa. Nemo enim reprehenderit quasi soluta fugiat, utemporibus, eveniet, earum laudantium cumque adipisci porro eius.</p>

            <carousel
                :perPageCustom="[
                    [200, 1],
                    [768, 1],
                    [1024, 1],
                ]"
                :navigationEnabled="true"
                :paginationEnabled="false"
                >
                <slide >


                <div class="block-temoignage px-5 mt-5">
                    <p ><img width="20" src="../assets/images/comma-right.png" alt=""> <span class="mx-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis inventore ad impedit facilis odio! Fugiat, eum aliquam. Deleniti, at nam. Deserunt placeat expedita quibusdam odio tenetur dolorem, quaerat aut ducimus.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis inventore ad impedit facilis odio! Fugiat, eum aliquam. Deleniti, at nam. Deserunt placeat expedita quibusdam odio tenetur dolorem, quaerat aut ducimus. </span>
                    
                    <img width="20" src="../assets/images/comma-left.png" alt="">
                    </p>
                    <div class="text-end">
                     <p>Darius Boti <span class="color-violet"> a séjourné pendant ses vacances. </span></p>

                    </div>
                </div>
                </slide>
                <slide >


                <div class="block-temoignage px-5 mt-5">
                    <p ><img width="20" src="../assets/images/comma-right.png" alt=""> <span class="mx-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis inventore ad impedit facilis odio! Fugiat, eum aliquam. Deleniti, at nam. Deserunt placeat expedita quibusdam odio tenetur dolorem, quaerat aut ducimus. 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis inventore ad impedit facilis odio! Fugiat, eum aliquam. Deleniti, at nam. Deserunt placeat expedita quibusdam odio tenetur dolorem, quaerat aut ducimus. </span>
                    <img width="20" src="../assets/images/comma-left.png" alt="">
                    </p>
                    <div class="text-end">
                     <p>Daniel kacou <span class="color-violet"> a séjourné pendant ses vacances. </span></p>

                    </div>
                </div>
                </slide>
            </carousel>

            </div>

        </div>
        <div class="col-md-1">

        </div>
        <div class="col-md-4 p-0">
            <div class="bord-ccc pt-5 pb-4 px-4 bor-rad-5  reservation-block">
              <h3 class="font-weight-bold">
                  <strong>{{placeContent.chambre}}</strong>
              </h3>
              <small>{{placeContent.villaName}}</small> <br />
              <small>{{placeContent.lieu}}</small>

              <p class="font-weight-bold">À Partir De {{placeContent.price.toLocaleString()}} / Semaine </p>
            <p class="mb-1">
              <small v-if="isReserve" class="text-success font-weight-bold">Disponible</small>
              <small v-else >Reservation</small>
              </p>

              <button class="d-flex w-100 bg-white bord-ccc bor-rad-5 px-4 align-items-center" @click="goToReservePage(placeContent)">
                  <p class="mb-0">
                      <img width="10" src="../assets/images/menu.png" alt="" />
                        <span class="mx-3">Enregistrement <img width="10" src="../assets/images/menu.png" alt="" /></span>
                        
                  </p>
                   <p class="mb-0">
                        <span>vérification</span>
                  </p>

              </button>
              <button class="btn btn-violet w-100 my-4" @click="goToReservePage(placeContent)">Continuer</button>
              <div class="text-center bord-btm-ccc pb-3">
              <p>Ou contactez-nous: <strong class="color-bl-dark"> +225 07 00 00 00 00</strong></p>
              </div>
              <p class="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati nihil officiis perspiciatis cum quasi? Fugit tempore eaque debitis saepe.</p>
            </div>






             <div class="bord-ccc pt-5 pb-4 px-4 bor-rad-5  reservation-fixed" :class="{hide_fixed: scrollData < 100}">
              <h3 class="font-weight-bold">
                  <strong>{{placeContent.chambre}}</strong> 
              </h3>
              <small>{{placeContent.villaName}}</small> <br />
              <small>{{placeContent.lieu}}</small>

              <p class="font-weight-bold">À Partir De {{placeContent.price.toLocaleString()}} F / Semaine </p>

              <p class="mb-1">
              <small v-if="isReserve" class="text-success font-weight-bold">Disponible</small>
              <small v-else >Reservation</small>
              </p>

              <button class="d-flex w-100 bg-white bord-ccc bor-rad-5 px-4 align-items-center" @click="goToReservePage(placeContent)">
                  <p class="mb-0">
                      <img width="10" src="../assets/images/menu.png" alt="" />
                        <span class="mx-3">Enregistrement <img width="10" src="../assets/images/menu.png" alt="" /></span>
                        
                  </p>
                   <p class="mb-0">
                        <span>vérification</span>
                  </p>

              </button>
              <button class="btn btn-violet w-100 my-4" @click="goToReservePage(placeContent)">Continuer</button>
              <div class="text-center bord-btm-ccc pb-3">
              <p>Ou contactez-nous: <strong class="color-bl-dark"> +225 07 00 00 00 00</strong></p>
              </div>
              <p class="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati nihil officiis perspiciatis cum quasi? Fugit tempore eaque debitis saepe.</p>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  data() {
    return {
        scrollData:0,
        placeContent:{},
        isReserve:false,
        experienceContent:[
            {
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed vero labore veritatis et quos perferendis in odio incidunt iste.',
                img:'exp-1.png'
            },
            {
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed vero labore veritatis et quos perferendis in odio incidunt iste.',
                img:'exp-2.png'
            },
            {
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed vero labore veritatis et quos perferendis in odio incidunt iste.',
                img:'exp-3.png'
            },

        ]
        
    };
  },
  mounted(){
       window.addEventListener("scroll", this.onScroll);
  },
  created(){
           this.placeContent = this.$store.state.ChoosenPlace;
           this.isReserve = this.placeContent.isDisponible;
            console.log("coisi detail-page ", this.placeContent)
    },
  methods:{
      onScroll(e){
          this.scrollData = window.top.scrollY;
        //   console.log("Data scroll ", this.scrollData)
      },
      goToReservePage(e){

          this.$store.commit("choosenMutation",e);
          this.$router.push({name:'reserv-page'})
      },
          
  },
  components:{
      Carousel, 
      Slide
  }
};
</script>

<style lang="scss">
.experience{
    .card-img-block{
        background-size: cover;
        background-repeat: no-repeat;
        height: 300px;
        border-radius: 10px;
    }
}


.color-bl-dark{
            
    &:hover{
        cursor: pointer;
    }
}
.header-block-image {
  height: 570px !important;
//   background: url(../assets/images/header-img.png);
  background-size: 100% 150%;
  background-repeat: no-repeat;
  position: relative;

  .heart-icon {
    position: absolute;
    bottom: -26px;
    // transform: translate(0, -50%);
    background: #fff;
    padding: 10px;
    border-radius: 50%;
  }
}


.principales,.services,.localisation, .block-novtitle{
    span{
    margin-left: 0.6rem;
}
} 
.right-service {
    margin-left: 5%;
}

.block-img-localise {
    height: 460px;
    overflow-y: hidden;
    position: relative;
}
.map-icon{
    position: absolute;
    top: 48%;
    background: blue;
    left: 47%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    border-radius: 50%;
    width: 70px;

}
.experience .card-mg{
    margin-right: 1rem;
}
.experience img {
    border-radius: 10px;
}
.experience .col-md-4:last-child .card-mg{
    margin-right: 0;
}
.pos-relative{
    position: relative;
}
.reservation-block{
    position: absolute;
    top: -12%;
    z-index: 10;
    
}

.reservation-block, .reservation-fixed{
    background: #fff;
    button{
    height: 50px;
}
}
.reservation-fixed{
    position: fixed;
    top: 14%;
    z-index: 5;
    width: 440px;
    height: 544px;
}
.hide_fixed{
    display: none;
}


.bor-rad-5{
    border-radius: 5px;
}

button.VueCarousel-navigation-button {
    width: 50px;
    height: 50px;
    box-shadow: 0px 1px 7px #000;
    border-radius: 50%;
}
button.VueCarousel-navigation-button.VueCarousel-navigation-next{
        box-shadow: 0px 1px 7px #0000006e;
}

@media screen and (max-width:1399px) {
    .reservation-fixed{
            width: 380px !important;
            height: 597px !important;
    }
}


@media screen and (max-width:1199px) {
    .reservation-fixed{
            width: 328px !important;
    }
    .reservation-block, .reservation-fixed{
        p img{
           display: none
        }
    }

     .pieces-block {
         .bord-ccc {
                padding: 1rem !important;
            }
            .col-md-4 {
            width: 50% !important;
        }
     }
     

     .localisation-block{
         .block-img-localise {
            height: auto !important;
            }
     }
    
}
@media screen and (max-width:991px) {
    .block-novtitle , .principales,.services {
        display: block !important;
    }
    .right-service{
        margin: 0 !important;
    }

    .experience{
         .col-md-4{
             width: 50% !important;
         }
     }

    .reservation-block {
        top: -9%;
    }
   
}
</style>