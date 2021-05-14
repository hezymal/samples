<?php

namespace App\Http\Controllers;

use App\Services\GitHubService;

class GitHubController extends Controller
{
    private GitHubService $gitHubService;

    public function __construct(GitHubService $gitHubService)
    {
        $this->gitHubService = $gitHubService;
    }

    public function health()
    {
        $health = $this->gitHubService->getHealth();

        return response()->json([
            'status' => $health['status'],
            'content' => $health['content'],
        ]);
    }
}
