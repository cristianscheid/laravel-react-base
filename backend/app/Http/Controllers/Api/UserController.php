<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserPasswordRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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

    public function changePassword(
        UpdateUserPasswordRequest $request
    ): JsonResponse {
        $data = $request->validated();

        $currentPassword = $data['current_password'];
        $newPassword = $data['new_password'];

        /** @var \App\Models\User $user */
        $user = Auth::user();

        if (! Hash::check($currentPassword, $user->password)) {
            return response()->json([
                'message' => 'The current password is incorrect.',
                'errors' => [
                    'current_password' => [
                        'The current password is incorrect.',
                    ],
                ],
            ], 422);
        }

        $user->password = bcrypt($newPassword);
        $user->save();

        return response()->json($user);
    }
}
