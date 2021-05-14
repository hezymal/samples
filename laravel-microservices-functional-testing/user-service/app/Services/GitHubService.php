<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class GitHubService
{
    public function getHealth(): array
    {
        $response = Http::get('https://github.com');

        return [
            'status' => $response->status(),
            'content' => $response->getBody()->getContents(),
        ];
    }
}
