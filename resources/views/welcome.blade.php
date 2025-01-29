<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Skill Studies</title>
        <meta name="description" content="">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="robots" content="index, follow">

        <!-- Preload critical assets -->
        <link rel="preload" href="{{ secure_asset('frontend/css/bootstrap.css') }}" as="style">
        <link rel="preload" href="{{ secure_asset('frontend/js/vendor/jquery.js') }}" as="script">

        <!-- Favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="{{ secure_asset('frontend/img/logo/favicon.png') }}">

        <!-- CSS here -->
        <link rel="stylesheet" href="{{ secure_asset('frontend/css/bootstrap.css') }}">
        <link rel="stylesheet" href="{{ secure_asset('frontend/css/animate.css') }}">
        <link rel="stylesheet" href="{{ secure_asset('frontend/css/swiper-bundle.css') }}">
        <link rel="stylesheet" href="{{ secure_asset('frontend/css/slick.css') }}">
        <link rel="stylesheet" href="{{ secure_asset('frontend/css/magnific-popup.css') }}">
        <link rel="stylesheet" href="{{ secure_asset('frontend/css/font-awesome-pro.css') }}">
        <link rel="stylesheet" href="{{ secure_asset('frontend/css/spacing.css') }}">
        <link rel="stylesheet" href="{{ secure_asset('frontend/css/main.css') }}">

        <!-- Vite Assets -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])

        <!-- Prevent FOUC -->
        <script>
            document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, 'js');
        </script>
    </head>
    <body>
        <div id="app"></div>

        <!-- JS here -->
        <script src="{{ secure_asset('frontend/js/vendor/jquery.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/vendor/waypoints.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/bootstrap-bundle.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/swiper-bundle.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/slick.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/range-slider.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/magnific-popup.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/nice-select.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/select2.min.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/purecounter.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/countdown.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/wow.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/jquery-one-page-nav.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/isotope-pkgd.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/imagesloaded-pkgd.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/flatpickr.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/ajax-form.js') }}"></script>
        <script src="{{ secure_asset('frontend/js/main.js') }}"></script>
        <script src="https://unpkg.com/vue-chat-scroll@alpha/dist/vue-chat-scroll.js"></script>

        <!-- Initialize app after all resources are loaded -->
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                // Your initialization code here if needed
            });
        </script>
    </body>
</html>