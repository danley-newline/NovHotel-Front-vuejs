<template>
  <div>
    <div class="card-blue-bord h-100 bor-rad-10 p-4">
      <div class="bord-btm-ccc pb-4 mb-4">
        <p class="mb-0 custom-size-title">
          <strong>12 000 000 </strong> F/
          <span class="gray-light">Semaine</span>
        </p>
      </div>
      <div class="card-detail-reserv">
        <p class="color-bl-dark mb-3">Detail de reservation</p>
        <div class="ticket-reservation">
          <p class="gray-light mb-0">Date d'arrivée</p>
          <div class="d-flex justify-content-between align-items-center">

            <div v-if="is_arrive_date && reserveChambre.date_arrive == ''">
            <p class="modif-p">
              <img class="mx-2" width="10" src="../assets/images/menu.png" alt="" />
              <span>12 Octobre 2021</span>
            </p>
            </div>
            <div v-if="!is_arrive_date || is_arrive_date && reserveChambre.date_arrive != ''">
                
                <b-form-datepicker id="datepicker-arrive" locale="fr" v-model="reserveChambre.date_arrive" @input="callGetDays" class="mb-2"></b-form-datepicker>

            </div>

            <div>
            <p class="modif-p" @click="modifArriveDate">
              <a href="#!" class="color-violet"> Modifier </a>
            </p>
            </div>


          </div>
        </div>


        <div class="ticket-reservation">
          <p class="gray-light mb-0">Date de depart</p>
          <div class="d-flex justify-content-between align-items-center">
            
            <div v-if="is_depart_date && reserveChambre.date_depart == ''">
            <p class="modif-p">
              <img class="mx-2" width="10" src="../assets/images/menu.png" alt="" />
              <span>12 Octobre 2021</span>
            </p>
            </div>
            <div v-if="!is_depart_date || is_depart_date && reserveChambre.date_depart != ''">
                
                <b-form-datepicker id="datepicker-depart" locale="fr" v-model="reserveChambre.date_depart" @input="callGetDays"  class="mb-2"></b-form-datepicker>

            </div>

            <div>
            <p class="modif-p" @click="modifDepartDate">
              <a href="#!" class="color-violet"> Modifier </a>
            </p>
            </div>

          </div>
        </div>

        <div class="ticket-reservation">
          <p class="gray-light mb-0">Invités</p>
          <div class="d-flex justify-content-between">
            <div v-if="isInvitePeople">
              <p class="modif-p">
              <img class="mx-2" width="10" src="../assets/images/menu.png" alt="" />
              <span>{{ reserveChambre.adultes }} Adultes</span>
              </p>
              <p class="mb-0" v-if="reserveChambre.enfants > 0">
                <img class="mx-2" width="10" src="../assets/images/menu.png" alt="" />
                <span >{{ reserveChambre.enfants }} Enfants</span>
              </p>
            </div>

            <div v-if="!isInvitePeople">
              <div class="invite-input">
              <input type="tel"
              maxlength = "1"
              class="form-control mb-2" placeholder="nombre adultes" v-model="reserveChambre.adultes">
              <input type="tel" 
              maxlength = "1"
              class="form-control mb-2" placeholder="nombre enfants" v-model="reserveChambre.enfants">
              <button class="btn btn-success" @click="modifInvitesPeople(true)">sauvegarder</button>
              </div>
            </div>

            <div>
              <p class="mb-0 modif-p" @click="modifInvitesPeople(false)">
              <a href="#!" class="color-violet"> Modifier </a>
            </p>
            </div>
            
          </div>
          
        </div>
      </div>

      <div class="card-recap">
        <p class="color-bl-dark my-4 mb-3">Récaptulatif</p>
        <div class="bg-gray-light p-2 bor-rad-10">
          <div class="d-flex justify-content-between">
            <p>{{ reserveChambre.nombre_of_night }} Nuit(s)</p>
            <p class="font-weight-bold">{{pricePerNight.toLocaleString()}} F</p>
          </div>
           <div class="d-flex justify-content-between">
            <p>{{ reserveChambre.adultes }} Adultes</p>
            <p class="font-weight-bold">- {{reductionAdultes.toLocaleString()}} F</p>
          </div>
          <div class="d-flex justify-content-between" v-if="reserveChambre.enfants > 0">
            <p>{{ reserveChambre.enfants }} Enfants</p>
            <p class="font-weight-bold">- {{reductionEnfants.toLocaleString()}} F</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="mb-0">Reduction</p>
            <p class="mb-0 font-weight-bold">- {{reserveChambre.reduction.toLocaleString()}} F</p>
          </div>
        </div>
        <div class="d-flex p-2 mt-2 justify-content-between">
          <p class="mb-0">Total Paiement</p>
          <p class="mb-0 font-weight-bold">{{reserveChambre.total_price.toLocaleString()}} F</p>
        </div>
      </div>

      <div class="card-payement">
        <p class="color-bl-dark my-4 mb-3">Mode de Paiement</p>

        <div class="d-flex p-2 mt-2 justify-content-between">
          <div>
            <label for="visa"
              ><img width="10" src="../assets/images/menu.png" alt=""
            /></label>
            <input
              type="radio"
              id="visa"
              class="form-check-input mx-2"
              name="pay"
              value="visa"
              v-model="reserveChambre.moyen_paiement"
              checked
            />
          </div>
          <div>
            <label for="cash">Cash</label>

            <input
              type="radio"
              id="cash"
              name="pay"
              v-model="reserveChambre.moyen_paiement"
              class="form-check-input mx-2"
              value="cash"
            />
          </div>
        </div>
      </div>
      <button class="btn btn-violet w-100 mt-4 py-3" @click="sendReservation">RESERVER</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:{
    chambreChoose:{
      type: Object,
    }
  },
  data(){
    return{
      reserveChambre:{
            name:'',
            price:0,
            date_arrive:'',
            date_depart:'',
            adultes:2,
            enfants:null,
            reduction:0.0,
            total_price:0,
            moyen_paiement:'cash',
            nombre_of_night:1,
            lieu:''
        },
        lior:{
          title:'frida daniel',
          content:'verification si jai le bon truc'
        },
        pricePerNight:0,
        reductionAdultes:0,
        reductionEnfants:0,
        is_arrive_date:true,
        is_depart_date:true,
        modif_invite:false,
        isInvitePeople:true,

    }
  },

  mounted(){
    console.log("mounted chambre", this.chambreChoose);
    this.reserveChambre.total_price = this.chambreChoose.price;
    this.pricePerNight = this.chambreChoose.price;
  },
  methods:{
    modifArriveDate(){
      this.is_arrive_date = !this.is_arrive_date, 
      this.reserveChambre.date_arrive = " "; // ici la valeur n'a pas d'importance , elle permet de vider la propriete sans autant la laissé vide
    },

    modifDepartDate(){
      this.is_depart_date = !this.is_depart_date, 
      this.reserveChambre.date_depart = " "; // ici la valeur n'a pas d'importance , elle permet de vider la propriete sans autant la laissé vide
    },

    modifInvitesPeople(e){
      this.isInvitePeople = e;
      if (this.reserveChambre.adultes > 2) {
          this.reductionAdultes = 1000 * this.reserveChambre.adultes;
      }
      if (this.reserveChambre.enfants > 1) {
        this.reductionEnfants = 550 * this.reserveChambre.enfants;
      }
      this.reserveChambre.reduction = this.reductionAdultes + this.reductionEnfants;

      this.getTotalPrice();

      
    },
    callGetDays(){
      console.log("voir la date depart", this.reserveChambre.date_depart);
      console.log("voir la date arrive", this.reserveChambre.date_arrive);
      
      if (this.reserveChambre.date_depart != '' && this.reserveChambre.date_arrive != '') {
         this.getNumberOfNight(this.reserveChambre.date_depart, this.reserveChambre.date_arrive)
      }

    },

    getNumberOfNight(date2, date1) {
        var date1 = new Date(date1);
        var date2 = new Date(date2);
        var Difference_In_Time = date2.getTime() - date1.getTime();

        this.pricePerNight=120000; //Initialiser le prix a chaque appel

        this.reserveChambre.nombre_of_night = Difference_In_Time / (1000 * 3600 * 24);
        this.pricePerNight = this.pricePerNight * this.reserveChambre.nombre_of_night;

        this.getTotalPrice();
    },

    getTotalPrice(){
        this.reserveChambre.total_price = this.pricePerNight - this.reserveChambre.reduction;
    },

    

    sendReservation(){
      // this.reserveChambre.name = this.chambreChoose.chambre;
      // this.reserveChambre.lieu = this.chambreChoose.lieu;

      // if (this.reserveChambre.enfants == null) {
      //   console.log("il est null")
      //   this.reserveChambre.enfants = 0
      // }

    //  let axiosConfig = {
    //   headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       "Access-Control-Allow-Origin": "*",
    //   }
    // };

    

      

      // if(this.reserveChambre.date_arrive != '' && this.reserveChambre.date_depart != '' && this.reserveChambre.adultes > 0 )
      // {
      //   console.log("make the post it's cool");
      //   // const body = this.reserveChambre;
      //   // axios.post("http://127.0.0.1:8000/api/post",body,)
      //   //       .then(response => {
      //   //         console.log(response)
      //   //       }).catch(err => {
      //   //       console.log("modibo")
      //   //       console.log(err);
      //   //   });
      // }else{
      //   console.log("voyez reverifier")
      // }
      
      console.log("total info ", this.reserveChambre);
    }
  },

   watch: {
  }

};
</script>

<style lang="scss">
.invite-input{
  width: 75%;
  input{
    border: none;
    border-bottom: 2px solid #ccc;
  }
} 
.card-payement{
  input:hover{
    cursor: pointer;

  }
}
</style>