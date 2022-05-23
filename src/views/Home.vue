<template>
  <div>
      <div class="header-block-image home-page text-white">
        <div class="container">
            <div class="bienvenue-block w-75">
                <h1 class="font-weight-bold text-shad-2 fs-75">Bienvenue chez vous !</h1>
                <p class="font-weight-bold text-shad-2">DÉMARRER UNE RÉSERVATION</p>
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
                                    <div class="date-block special-sm-invite text-center d-flex justify-content-between pb-4 p-3">
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
                            
                            
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <div class="mt-5 pt-5"> </div>
    <div class="container my-5 pt-5">
        
            <h1 class="gray-light mt-4 mb-0 fs-50">À propos de </h1>
            <div class="row ">
                <div class="col-md-7 col-sm-12">
                    <h1 class="fs-50 mt-4 mb-5">NovHôtel Royal Suites</h1>
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aspernatur quaerat commodi nulla sint excepturi dolorem aut reiciendis, quisquam, quia, repudiandae deleniti eligendi modi amet illo temporibus delectus quasi distinctio impedit aperiam eum. Explicabo optio eveniet odit, id maiores, laudantium, facilis qui iste dolorem inventore fugiat odio delectus. Reprehenderit quo numquam commodi animi beatae quidem, similique, quaerat minus tempora dignissimos reiciendis aut doloribus ut quod. Tenetur dignissimos nemo aspernatur est nam ex itaque harum voluptatem ullam eligendi alias vitae quibusdam accusamus eius temporibus rem, maxime molestiae architecto, eum ipsam? Maiores eveniet iure quis culpa itaque doloremque quod officiis delectus autem.</p>
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aspernatur quaerat commodi nulla sint excepturi dolorem aut reiciendis, quisquam, quia, repudiandae deleniti eligendi modi amet illo temporibus delectus quasi distinctio impedit aperiam eum. Explicabo optiimi beatae quidem, similique, quaerat minus tempora dignissimos reiciendis aut doloribus ut quod. Tenetur dignissimos nemo aspernatur est nam ex itaque harum voluptatem ullam eligendi alias vitae quibusdam accusamus eius tempo.</p>

                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4 right-propos-bg">
                    <!-- I PUT A BACKGROUND IMG HERE IN CSS -->
                </div>
            </div>


            <div class="block-suites my-5 py-5">
                <div class="d-flex justify-content-between align-items-center my-4" >
                    <div>
                    <h1 class="fs-50 mb-0">Nos Suites</h1>

                    </div>
                    <div>
                        <p class="mb-0"> <strong class="mx-2">TOUT AFFICHER </strong> <img width="10" src="../assets/images/menu.png" alt="" /> </p>
                    </div>
                </div>
                <div class="py-5">
                     <carousel
                :perPageCustom="[
                    [200, 1],
                    [768, 2],
                    [1100, 3],
                ]"
                :navigationEnabled="true"
                :paginationEnabled="false"
                >
                <slide v-for="(items, i) in suiteDatas" :key="i" >
                    <a href="/details-chambre" class="my-special-a">
                    <div class="my-4">
                        <div class="hotel-block" @click="seeDetail(items)">
                            <img  :src="require(`../assets/images/${items.imgPrim}`)" class="img-fluid head-img" alt="" /> 
                            <img width="70" src="../assets/images/heart.png"  class="icon-absolute" alt="" />
                            <div class="hotel-content p-4">
                                <div class="d-flex justify-content-between">
                                    <p>
                                    <img width="10" src="../assets/images/menu.png" alt="" />
                                    <span class="mx-3 gray-light">{{items.lieu}}</span>
                                    </p>
                                    <p>
                                        <small class="color-bl-dark ">{{items.villaName}}</small>
                                    </p>
                                </div>
                                <p> <span class="h1">  {{items.price.toLocaleString()}} </span> <sup class="font-weight-bold">Fcfa</sup> <sub class="gray-light">/nuité en semaine</sub></p>

                                <h2 class="font-weight-normal">{{items.chambre}}</h2>
                                <div class="sous-content mt-4">
                                    <p v-for="(item, index) in items.comode" :key="index"> 
                                    <img width="22" :src="require(`../assets/images/${item.icon}`)" alt="" />
                                    <span class="mx-3">{{item.text}}</span>
                                    </p>
                                    
                                    
                                </div>


                            </div>
                        </div>
                    </div>
                    </a>
                </slide>
                
            
                     </carousel>
                    
                </div>
            </div>
        
    </div>


  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    data(){
        return{
            suiteDatas:[
                {
                    imgPrim:'chambre.png',
                    lieu:'ASSINIE, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'NovHôtel Royal Suite',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                },
                {
                    imgPrim:'header-img.png',
                    lieu:'ABIDJAN, Ivory Coast',
                    villaName:'Cocody Villa',
                    isDisponible:false,
                    price:300000,
                    chambre:'NovHôtel Man Suite',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                },
                {
                    imgPrim:'chambre.png',
                    lieu:'Paris, France',
                    villaName:'Luxury Villa',
                    price:250000,
                    isDisponible:true,
                    chambre:'NovHôtel Lord Suite',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                },
                {
                    imgPrim:'chambre.png',
                    lieu:'ABOISSO, Ivory Coast',
                    villaName:'Luxury Villa',
                    price:280000,
                    isDisponible:true,
                    chambre:'NovHôtel Sky ',
                    comode:[
                        {
                            icon:'person.png',
                            text:'12 personnes',
                        },
                        {
                            icon:'bed.png',
                            text:'6 chambres',
                        },
                        {
                            icon:'bed.png',
                            text:'6 salles de bain',
                        },
                        {
                            icon:'trace.png',
                            text:'800 m2',
                        },
                    ],
                },

            ],
        }
    },
    components:{
        Carousel, 
        Slide
    },
    methods:{
        seeDetail(e){
            // console.log("voici le click ", e)
            this.$store.commit("choosenMutation",e);
            
            // this.$router.push({name:'detail-page'})
            
        }
    }
}
</script>

<style lang="scss">
.my-special-a,.my-special-a:hover  {
    color: #000;
    text-decoration: none;
}
.block-suites{
button.VueCarousel-navigation-button {
    width: 50px;
    height: 50px;
    margin: 0 -1rem;
    box-shadow: 0px 1px 7px #0000003b;

}
}


.hotel-block {
    border-radius: 10px;
    box-shadow: 0px 1px 11px #ccccccba;
    margin: 0 2rem;
    position: relative;

    .head-img{
        border-radius: 10px 10px 0 0;
    }
    &:hover{
        cursor: pointer;
    }

    .icon-absolute {
    position: absolute;
    top: 4%;
    left: 4%;
    
}
   
}
.header-block-image {
  height: 600px !important;
  background: url(../assets/images/header-img.png);
  background-size: 100% 142%;
  background-repeat: no-repeat;
  position: relative;
}
.right-propos-bg{
    background: url(../assets/images/exp-3.png);
    background-size: cover;
    background-repeat: no-repeat;
}
.text-shad-2{
        text-shadow: 2px 3px 5px #000;
}
.fs-75 {
    font-size: 75px;
}
.gray-light {
    color: #cacaca;
}
.font-weight-normal{
    font-weight: normal;
}

.fs-50{
    font-weight: normal;
    font-size: 50px;
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

.pos-relative{
    position: relative;
    button{
        position: absolute;
    top: 118px;
    }
}

@media screen and (min-width:1339px) {
   .content-bienvenue button{
        height: 50px;
            font-size: 14px;
    } 
}
@media screen and (max-width:1338px) {
  .content-bienvenue button{
        font-size: 14px;
    }  
    .home-page {
        .card-news-info{
                padding: 1rem !important;

        }
    } 
}

@media screen and (max-width:1132px) {
    .special-sm-invite{
        display: block !important;
        padding: 10px 25px !important;
        p{
            margin: 0 !important;
        }
    }

    
}

@media screen and (min-width:1132px) {
    .block-suites{
        .VueCarousel-navigation {
            position: absolute !important;
            top: -16% !important;
            right: 28% !important;
        }
    }
}
</style>