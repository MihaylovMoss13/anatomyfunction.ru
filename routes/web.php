<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\SectionController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\WebController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



// user route
Route::post('api/notification/handling', [DashboardController::class, 'response'])->name('response');

Route::middleware('auth')->group(function () {
    Route::controller(WebController::class)->group(function () {
        Route::get('/',  'index')->name('home');
        Route::get('/about',  'about')->name('about');
        Route::get('/contact',  'contact')->name('contact');
    });

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::controller(\App\Http\Controllers\User\SectionController::class)->group(function () {
        Route::get('/section',  'index')->name('section.index');
        Route::get('/section/view/{section:slug}',  'show')->name('section.view');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
// end user route

// admin route
Route::get('scp', [AdminAuthController::class, 'showLoginForm'])->name('admin.login');
Route::group(['prefix' => 'admin', 'middleware' => 'redirectAdmin'], function (){
    Route::post('login', [AdminAuthController::class, 'login'])->name('admin.login.post');
    Route::post('logout', [AdminAuthController::class, 'logout'])->name('admin.logout');
});

Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');

    // banner
    Route::controller(BannerController::class)->group(function () {
        Route::get('banner/index', 'index')->name('admin.banner.index');
        Route::post('banner/store', 'store')->name('admin.banner.store');
        Route::put('banner/update/{id}', 'update')->name('admin.banner.update');
        Route::delete('banner/image/{slug}', 'deleteImage')->name('admin.banner.image.delete');
        Route::delete('banner/destroy/{id}','destroy')->name('admin.banner.destroy');
    });

    // section
    Route::controller(SectionController::class)->group(function () {
        Route::get('section/index', 'index')->name('admin.section.index');
        Route::post('section/store', 'store')->name('admin.section.store');
        Route::put('section/update/{id}', 'update')->name('admin.section.update');
        Route::delete('section/image/{id}', 'deleteImage')->name('admin.section.image.delete');
        Route::delete('section/model/{id}', 'deleteModel')->name('admin.section.model.delete');
        Route::delete('section/destroy/{id}','destroy')->name('admin.section.destroy');
    });

    //profile
    // Route::get('/profile/index', [ProfileController::class, 'index'])->name('profile.index');
    //Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
    //Route::post('register', [RegisteredUserController::class, 'store']);
    // Route::post('/profile/store', [ProfileController::class, 'store'])->name('profile.store');
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::controller(UserController::class)->group(function () {
        Route::get('user/index', 'index')->name('admin.user.index');
        Route::get('user/create', 'create')->name('admin.user.create');
        Route::post('user/store', 'store')->name('admin.user.store');
        Route::put('user/update/{id}', 'update')->name('admin.user.update');
        Route::delete('user/destroy/{id}','destroy')->name('admin.user.destroy');
    });
});
// end admin route

require __DIR__.'/auth.php';