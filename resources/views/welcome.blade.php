<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Skill Studies</title>
      <meta name="description" content="">
      <meta name="csrf-token" content="{{ csrf_token() }}">

      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!-- Place favicon.ico in the root directory -->
      <link rel="shortcut icon" type="image/x-icon" href="{{asset('frontend/img/logo/favicon.png')}}">

      <!-- CSS here -->
      <link rel="stylesheet" href="{{asset('frontend/css/bootstrap.css')}}">
      <link rel="stylesheet" href="{{asset('frontend/css/animate.css')}}">
      <link rel="stylesheet" href="{{asset('frontend/css/swiper-bundle.css')}}">
      <link rel="stylesheet" href="{{asset('frontend/css/slick.css')}}">
      <link rel="stylesheet" href="{{asset('frontend/css/magnific-popup.css')}}">
      <link rel="stylesheet" href="{{asset('frontend/css/font-awesome-pro.css')}}">
      <link rel="stylesheet" href="{{asset('frontend/css/spacing.css')}}">
      <link rel="stylesheet" href="{{asset('frontend/css/main.css')}}">
      
      @vite('resources/css/app.css')
      @vite('resources/js/app.js')
    </head>
    <body >


        
      <div id="app"></div>



      <!-- JS here -->
      <script src="{{asset('frontend/js/vendor/jquery.js')}}"></script>
      <script src="{{asset('frontend/js/vendor/waypoints.js')}}"></script>
      <script src="{{asset('frontend/js/bootstrap-bundle.js')}}"></script>
      <script src="{{asset('frontend/js/swiper-bundle.js')}}"></script>
      <script src="{{asset('frontend/js/slick.js')}}"></script>
      <script src="{{asset('frontend/js/range-slider.js')}}"></script>
      <script src="{{asset('frontend/js/magnific-popup.js')}}"></script>
      <script src="{{asset('frontend/js/nice-select.js')}}"></script>
      <script src="{{asset('frontend/js/select2.min.js')}}"></script>
      <script src="{{asset('frontend/js/purecounter.js')}}"></script>
      <script src="{{asset('frontend/js/countdown.js')}}"></script>
      <script src="{{asset('frontend/js/wow.js')}}"></script>
      <script src="{{asset('frontend/js/jquery-one-page-nav.js')}}"></script>
      <script src="{{asset('frontend/js/isotope-pkgd.js')}}"></script>
      <script src="{{asset('frontend/js/imagesloaded-pkgd.js')}}"></script>
      <script src="{{asset('frontend/js/flatpickr.js')}}"></script>      
      <script src="{{asset('frontend/js/ajax-form.js')}}"></script>
      <script src="{{asset('frontend/js/main.js')}}"></script>
      <script src="https://unpkg.com/vue-chat-scroll@alpha/dist/vue-chat-scroll.js"></script>
    </body>
</html>
