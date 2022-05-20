<template>
  <div>
      <div class="container-fluid p-0 py-5 footer-bg">
          <div class="container py-5">
              <div class="d-flex justify-content-between align-items-center">
                  <div>
                      <img src="../assets/img1.png" width="150" height="100" alt="">
                  </div>
                  <div>
                      <h2 class="text-white">Souscrivez à notre Newsletter</h2>
                      <form action="" class="mt-5">
                          <div class="input-group input-group-lg">
                            
                            <input type="text" class="form-control" required>
                            <div class="input-group-append">
                               <button type="submit" class="btn btn-blue h-100 px-4">Souscrire</button>
                            </div>
                            </div>
                      </form>

                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer-bg{
    background: #3d3074;
    z-index: 15;
    position: relative;
}
.btn-blue{
    background: #0e4d8a;
    color: #fff;
}
</style>