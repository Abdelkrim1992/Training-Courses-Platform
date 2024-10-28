<?php

return [

    'crawl' => true,

    'paths' => [],

    'include_files' => [
        'public' => '',
    ],

    'exclude_file_patterns' => [
        '/\.php$/',
        '/mix-manifest\.json$/',
        '/^public/',  // Add this line to exclude the public/storage directory
    ],

    'clean_before_export' => true,

    'disk' => null,

    'before' => [
        // 'assets' => '/usr/local/bin/yarn production',
    ],

    'after' => [
        // 'deploy' => '/usr/local/bin/netlify deploy --prod',
    ],

];
