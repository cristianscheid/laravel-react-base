<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function show(): JsonResponse
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();

        return response()->json($user);
    }

    public function update(UpdateUserRequest $request): JsonResponse
    {
        $data = $request->validated();

        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        $user->update($data);

        return response()->json($user);
    }

    public function destroy(): JsonResponse
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $user->tokens()->delete(); // Revoga todos os tokens do usuário
        $user->delete();

        return response()->json(null, 204);
    }
}
