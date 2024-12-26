<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreateApplication;

    protected function setUp()
    {
        parent :: setUp();
        $this->withoutVite();
    }
}
