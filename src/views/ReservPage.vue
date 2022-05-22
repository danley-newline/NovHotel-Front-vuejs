<template>
  <div>
    <div class="header-block-image">
      <div class="container">
        <div class="bienvenue-block">
          <div class="card-news-info bord-rad-10 p-4 w-100">
            <div class="row">
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-9 pb-4 goback-block">
                    <img
                      :src="require(`../assets/images/${placeContent.imgPrim}`)"
                      class="w-100 h-100 bor-rad-10"
                      alt=""
                    />
                    <div class="goback-icon" @click="goback()">
                      <img
                          width="30"
                          src="../assets/images/menu.png"
                          alt=""
                        />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="pb-4" v-for="i in 3" :key="i">
                      <img
                        src="../assets/images/chambre.png"
                        class="img-fluid bor-rad-10"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                    <div
                      class="
                        d-flex
                        my-3
                        justify-content-between
                        align-items-center
                      "
                    >
                      <p class="font-weight-bold h3">{{placeContent.chambre}}</p>

                      <p class="gray-light mb-0">
                        <img
                          class="mb-2 mx-2"
                          width="20"
                          src="../assets/images/menu.png"
                          alt=""
                        />
                        <span class="fs-4">4.9</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-3"></div>
                </div>

                <div class="descriptioin-chambre">
                  <div class="d-flex mb-4 pb-2">
                    <div class="interieur p-3" v-for="i in 3" :key="i">
                      <img width="50" src="../assets/images/menu.png" alt="" />
                    </div>
                  </div>

                  <p class="color-bl-dark fs-5">Description</p>
                  <p>
                    Licing elit. Dolor, earum fuga! Accusamus voluptatibus
                    perspiciatis recusandae repellendus cupiditate ducimus
                    consequuntur tempora molestias odit quia! Aliquam saepe
                    facere, illo fugiat veniam laborum ullam officia, mollitia
                    neque modi, nulla sequi sunt nobis quidem nostrum rem quas
                    repudiandae aut! Est ndeleniti officiis. Ex molestias soluta
                    assumenda, dolorem impedit similique. Eligendi assumenda
                    doloribus at excepturi.
                  </p>
                </div>
              </div>
              <div class="col-md-3">
                
                <ReservCardRight :chambreChoose="placeContent"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="special-blank-height"></div>
  </div>
</template>

<script>
import ReservCardRight from '../Components/ReservCardRight.vue'
export default {
  data(){
    return{
        placeContent:{},

    }
  },
  created(){
           this.placeContent = this.$store.state.ChoosenPlace;
            console.log("coisi reserve-page ", this.placeContent)
    },
  components:{
    ReservCardRight,
  },
  methods:{
    goback(){
      this.$router.go(-1);
      console.log("is clicked")
    }
  }
};
</script>

<style lang="scss">
.header-block-image{
  .b-form-btn-label-control.form-control {
    border: none;
    padding: 0;
}
.b-form-btn-label-control.form-control {
 
    .btn .b-icon.bi {
      font-size: 94% !important;
  }
}
}

.modif-p {
    margin-bottom: 7px;
}



.header-block-image {
  height: 600px !important;
  background: url(../assets/images/header-img.png);
  background-size: 100% 142%;
  background-repeat: no-repeat;
  position: relative;
}

.gray-light {
  color: #cacaca;
}
.font-weight-normal {
  font-weight: normal;
}

.card-news-info {
  background: #fff;
  box-shadow: 0px 2px 8px #7c7a7a6b;
}

.bienvenue-block {
  position: absolute;
  bottom: -78%;
  left: 17%;
  transform: translate(-10%, 0%);
}
@media screen and (max-width: 1600px) {
  .bienvenue-block {
    width: 90%;
    left: 15%;
  }
}
@media screen and (max-width: 1445px) {
  .bienvenue-block {
    width: 94%;
    left: 13%;
  }
  .custom-size-title{
    font-size: 22px !important;
  }
}
@media screen and (max-width: 1764px){
  .custom-size-title{
    font-size: 24px !important;
  }
}
@media screen and (min-width: 1765px){
  .custom-size-title{
    font-size: 28px !important;
  }
}
.bord-rad-10 {
  border-radius: 10px;
}

.interieur {
  border: 1px solid #0e4d8a;
  border-radius: 10px;
  margin-right: 2rem;
}
.special-blank-height {
  height: 500px;
}
.card-blue-bord {
  border: 1px solid #5bcafd;
}
.bg-gray-light {
  background: #f2f7f9;
}
.card-payement label{
  font-weight: bold;
  margin-top: 4px;
    font-size: 20px;
}

input.form-check-input {
  width: 2.2rem;
  height: 1.7rem;
  border-radius: 20px !important;
}

.form-check-input:checked[type="radio"] {
  background-image: none !important;
  background-size: 75% 75%;
  background-color: #0e4d8a;
}

.card-blue-bord .color-bl-dark{
  font-size: 18px;
}
.goback-block{
  position: relative;
}
.goback-icon{

    position: absolute;
    top: 7%;
    left: 7%;
    background: #ccc;
    padding: 0.7rem;
    border-radius: 50%;

    &:hover{
      cursor: pointer;
    }
}
</style>