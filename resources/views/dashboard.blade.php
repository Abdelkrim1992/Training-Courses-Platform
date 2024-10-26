<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
	<title>Admin Dashboard</title>
  <!-- [Meta] -->
  <meta charset="utf-8" />
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="description"
    content="Light Able admin and dashboard template offer a variety of UI elements and pages, ensuring your admin panel is both fast and effective."
  />
  <meta name="author" content="phoenixcoded" />

  <!-- [Favicon] icon -->
  <link rel="icon" href="{{asset('backend/images/favicon.svg')}}" type="image/x-icon" />

  <!-- [Page specific CSS] start -->
  <link rel="stylesheet" href="{{asset('backend/css/plugins/datepicker-bs5.min.css')}}">
  <!-- [Page specific CSS] end -->
  <!-- [Google Font : Public Sans] icon -->
  <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- [Tabler Icons] https://tablericons.com -->
  <link rel="stylesheet" href="{{asset('backend/fonts/tabler-icons.min.css')}}" >
  <!-- [Feather Icons] https://feathericons.com -->
  <link rel="stylesheet" href="{{asset('backend/fonts/feather.css')}}" >
  <!-- [Font Awesome Icons] https://fontawesome.com/icons -->
  <link rel="stylesheet" href="{{asset('backend/fonts/fontawesome.css')}}" >
  <!-- [Material Icons] https://fonts.google.com/icons -->
  <link rel="stylesheet" href="{{asset('backend/fonts/material.css')}}" >
  <!-- [Template CSS Files] -->
  <link rel="stylesheet" href="{{asset('backend/css/style.css')}}" id="main-style-link" >
  
  <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet">


      @vite('resources/css/app.css')
      @vite('resources/js/app.js')

    </head>
    <body data-pc-preset="preset-1" data-pc-sidebar-theme="light" data-pc-sidebar-caption="true" data-pc-direction="ltr" data-pc-theme="light">  

	@if(Request::is('admin/*'))
        <script>
  // Initialization for the datepicker in admin pages
  document.addEventListener('DOMContentLoaded', function () {
    const datepickerElement = document.querySelector('#pc-datepicker-3');
    if (datepickerElement) {
      new Datepicker(datepickerElement, {
        buttonClass: 'btn',
        todayBtn: true,
        clearBtn: true
      });
    }
  });
</script>
  @else
        <link rel="stylesheet" href="{{ asset('frontend/css/style.css') }}">
  @endif

  


    <div id="app" ></div>

	



    <!-- Required Js -->
<script src="{{asset('backend/js/plugins/popper.min.js')}}"></script>
<script src="{{asset('backend/js/plugins/simplebar.min.js')}}"></script>
<script src="{{asset('backend/js/plugins/bootstrap.min.js')}}"></script>
<script src="{{asset('backend/js/fonts/custom-font.js')}}"></script>
<script src="{{asset('backend/js/pcoded.js')}}"></script>
<script src="{{asset('backend/js/plugins/feather.min.js')}}"></script>
<script src="{{asset('backend/js/plugins/datepicker-full.min.js')}}"></script>



<script>layout_change('light');</script>




<script>layout_sidebar_change('light');</script>



<script>change_box_container('false');</script>


<script>layout_caption_change('true');</script>




<script>layout_rtl_change('false');</script>


<script>preset_change("preset-1");</script>

    </body>
</html>
