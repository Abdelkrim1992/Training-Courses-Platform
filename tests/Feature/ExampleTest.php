<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/');
    
        // Dump the response content for debugging
        $response->dump();
    
        $response->assertStatus(200);
    }
}
