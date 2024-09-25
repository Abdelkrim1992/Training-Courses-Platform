<template>
  <!-- Talk area start here -->
  <section class="talk-area pt-50 pb-25 mt-5" style="background-image:url('frontend/img/shop/shop-thumb-bg.png')">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-7">
          <div class="tp-funfact-content pt-30">
            <h1 class="text-white wow fadeInUp pb-30 text-center" data-wow-delay="200ms" data-wow-duration="1000ms">
              Start the conversation to develop your business skills
            </h1>
            <h5 class="text-white wow fadeInUp text-center" data-wow-delay="400ms" data-wow-duration="1000ms">
              Schedule a free consultation with our experts. Discover opportunities and take the first step towards digital success
            </h5>
            <div class="d-flex align-items-center gap-4 mt-40 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1000ms">
              <a href="https://wa.me/message/FBO52GTDTUCCE1" class="tp-btn-inner">Let's talk<i class="fa-regular fa-circle-arrow-right ml-10"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
          <div class="contact__form">
            <h3 class="text-capitalize mb-30 text-center text-white">Get a free consultation</h3>
            <div id="formMessage" style="display:none;" class="alert alert-success"></div>
            <form id="form" action="" method="POST">
              <input type="text" id="client_name" name="client_name" placeholder="Your name*" required class="text-right" />
              <div class="row g-3">
                <div class="col-6">
                  <input type="text" id="client_email" name="client_email" placeholder="Your email*" required class="text-right" />
                </div>
                <div class="col-6">
                  <input type="text" id="client_phone" name="client_phone" placeholder="Your phone*" required class="text-right" />
                </div>
              </div>
              <textarea name="message" id="message" placeholder="Message" class="form-control mb-3 text-right" required></textarea>
              <button type="submit" class="tp-btn-inner">Send <i class="fa-regular fa-circle-arrow-right ml-10"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Talk area end here -->

</template>

<script>

export default{
    name:'Talk',
}

</script>