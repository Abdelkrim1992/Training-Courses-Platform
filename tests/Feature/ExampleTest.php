<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExampleTest extends TestCase
{
    use RefreshDatabase; // Make sure this is included

    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/');  // Ensure this URL is valid in the test environment
    
        $response->assertStatus(200);
    }

}
