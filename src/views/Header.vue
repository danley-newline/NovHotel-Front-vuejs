<template>
  <div>
      <nav class="py-2 px-5 top-fixed-nav">
          <div class="d-flex justify-content-between">
              <div class="left-content">
                <a href="/">
                  <img src="../assets/images/logo-nov.png" height="50" alt="">
                </a>
              </div>
            <div class="right-content">
                <ul>
                    <li>
                        <a href="">Besoin d'aide ?</a>
                    </li>
                    <li>
                        <a href="">FR | EN</a>
                    </li>
                    <li>
                        <a href="">Se connecter</a>
                    </li>
                    <li>
                        <img width="25" src="../assets/images/menu.png" alt="">
                    </li>
                </ul>
            </div>
          </div>
      </nav>
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.top-fixed-nav {
    position: fixed;
    z-index: 25;
    background: #fff;
    width: 100%;
}

.right-content{

 ul {
    display: flex;
    align-items: center;
    font-style: 18px;
    height: 100%;


    li{
         display: flex;
    margin-right: 2rem;

    a{
        color: #000;
        text-decoration: none;
    }
    }
   
}
}


</style>