<?php
use Symfony\Component\Dotenv\Dotenv;

try {
    $dotenv = new Dotenv();
    $dotenv->loadEnv(__DIR__ . '/.env');
} catch (Exception $e) {
    $errorMessage = 'Env file not found';
    @include MODX_CORE_PATH . 'error/unavailable.include.php';
    header($_SERVER['SERVER_PROTOCOL'] . ' 503 Service Unavailable');
    echo "<html><title>Error 503: Site temporarily unavailable</title><body><h1>Error 503</h1><p>{$errorMessage}</p></body></html>";
    exit();
}
