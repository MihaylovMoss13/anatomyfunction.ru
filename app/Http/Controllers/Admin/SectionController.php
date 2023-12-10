<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SectionTableResource;
use App\Models\Section;
use App\Models\SectionImage;
use App\Models\SectionModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $sections = Section::query()
            ->with(['section_images'])
            ->with(['section_models'])
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->OrWhere('text', 'like', '%' . $search . '%');
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Section/Index', [
            'sections' => $sections,
            'search' => $request->search,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $section = new Section;
        $section->name                  = $name = $request->name;
        $section->slug                  = str($name)->slug();
        $section->text                  = $request->text;
        $section->text_leg_bedr_treug   = $request->text_leg_bedr_treug;
        $section->text_leg_podkol_yamk  = $request->text_leg_podkol_yamk;
        $section->text_leg_goleni       = $request->text_leg_goleni;
        $section->is_published          = $request->is_published;
        $section->link_images_schemes   = $request->link_images_schemes;
        $section->link_tables           = $request->link_tables;
        $section->link_mental_cards     = $request->link_mental_cards;
        $section->link_test             = $request->link_test;
        $section->link_video            = $request->link_video;

        if ($section->save()) {
            // check if section has images upload
            if ($request->hasFile('section_images')) {
                $sectionImages = $request->file('section_images');
                foreach ($sectionImages as $image) {
                    // Generate a unique name for the image using name and timestamp
                    $uniqueName = str($request->name)->slug() . '-' . time() . '.' . $image->getClientOriginalExtension();

                    // Store the image in the public folder with the unique name
                    $image->move('sections', $uniqueName);

                    // Create a new section image record with the section_id and unique name
                    SectionImage::create([
                        'section_id' => $section->id,
                        'image' => '/sections/' . $uniqueName,
                    ]);
                }
            }

            // check if section has model_3D_leg_bedr_treug upload
            if ($request->hasFile('model_3D_leg_bedr_treug')) {
                $model3DLegBedrTreug = $request->file('model_3D_leg_bedr_treug');
                foreach ($model3DLegBedrTreug as $model) {
                    // Generate a unique name for the model using name and timestamp
                    $uniqueName = str(pathinfo($model->getClientOriginalName(), PATHINFO_FILENAME))->slug() . '-' . time() . '.' . $model->getClientOriginalExtension();

                    // Store the model in the public folder with the unique name
                    $model->move('models', $uniqueName);

                    $section->model_3D_leg_bedr_treug = '/models/' . $uniqueName;
                }
            }

            // check if section has models upload
            // if ($request->hasFile('section_models')) {
            //     $sectionModels = $request->file('section_models');
            //     foreach ($sectionModels as $model) {
            //         // Generate a unique name for the model using name and timestamp
            //         $uniqueName = str(pathinfo($model->getClientOriginalName(), PATHINFO_FILENAME))->slug() . '-' . time() . '.' . $model->getClientOriginalExtension();

            //         // Store the model in the public folder with the unique name
            //         $model->move('models', $uniqueName);

            //         // Create a new section model record with the section_id and unique name
            //         SectionModel::create([
            //             'section_id' => $section->id,
            //             'model' => '/models/' . $uniqueName,
            //             'name' => pathinfo($model->getClientOriginalName(), PATHINFO_FILENAME),
            //             'file_name' => $uniqueName
            //         ]);
            //     }
            // }

            // check if section has models upload
            // if ($request->hasFile('section_models')) {
            //     $sectionModels = $request->file('section_models');
            //     foreach ($sectionModels as $model) {
            //         // Generate a unique name for the model using name and timestamp
            //         $uniqueName = str(pathinfo($model->getClientOriginalName(), PATHINFO_FILENAME))->slug() . '-' . time() . '.' . $model->getClientOriginalExtension();

            //         // Store the model in the public folder with the unique name
            //         $model->move('models', $uniqueName);

            //         // Create a new section model record with the section_id and unique name
            //         SectionModel::create([
            //             'section_id' => $section->id,
            //             'model' => '/models/' . $uniqueName,
            //             'name' => pathinfo($model->getClientOriginalName(), PATHINFO_FILENAME),
            //             'file_name' => $uniqueName
            //         ]);
            //     }
            // }

            // check if section has models upload
            if ($request->hasFile('section_models')) {
                $sectionModels = $request->file('section_models');
                foreach ($sectionModels as $model) {
                    // Generate a unique name for the model using name and timestamp
                    $uniqueName = str(pathinfo($model->getClientOriginalName(), PATHINFO_FILENAME))->slug() . '-' . time() . '.' . $model->getClientOriginalExtension();

                    // Store the model in the public folder with the unique name
                    $model->move('models', $uniqueName);

                    // Create a new section model record with the section_id and unique name
                    SectionModel::create([
                        'section_id' => $section->id,
                        'model' => '/models/' . $uniqueName,
                        'name' => pathinfo($model->getClientOriginalName(), PATHINFO_FILENAME),
                        'file_name' => $uniqueName
                    ]);
                }
            }

            return redirect()->route('admin.section.index')->with('success', 'Страница создана успешно.');
        } else {
            return redirect()->back()->with('errors', 'Произошла ошибка');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $section = Section::findOrFail($id);

        // dd($request->all());
        $section->name                  = $request->name;
        $section->text                  = $request->text;
        $section->text_leg_bedr_treug   = $request->text_leg_bedr_treug;
        $section->text_leg_podkol_yamk  = $request->text_leg_podkol_yamk;
        $section->text_leg_goleni       = $request->text_leg_goleni;
        $section->is_published          = $request->is_published;
        $section->link_images_schemes   = $request->link_images_schemes;
        $section->link_tables           = $request->link_tables;
        $section->link_mental_cards     = $request->link_mental_cards;
        $section->link_test             = $request->link_test;
        $section->link_video            = $request->link_video;

        //check if section has model_3D_leg_bedr_treug upload
        if ($request->hasFile('model_3D_leg_bedr_treug')) {
            $model3DLegBedrTreug = $request->file('model_3D_leg_bedr_treug');

            // Generate a unique name for the model using name and timestamp
            $uniqueName = str(pathinfo($model3DLegBedrTreug->getClientOriginalName(), PATHINFO_FILENAME))->slug() . '-' . time() . '.' . $model3DLegBedrTreug->getClientOriginalExtension();

            // Store the model in the public folder with the unique name
            $model3DLegBedrTreug->move('models', $uniqueName);

            $section->model_3D_leg_bedr_treug = '/models/' . $uniqueName;
        }

        //check if section has model_3D_leg_podkol_yamk upload
        if ($request->hasFile('model_3D_leg_podkol_yamk')) {
            $model3DLegPodkolYamk = $request->file('model_3D_leg_podkol_yamk');

            // Generate a unique name for the model using name and timestamp
            $uniqueName = str(pathinfo($model3DLegPodkolYamk->getClientOriginalName(), PATHINFO_FILENAME))->slug() . '-' . time() . '.' . $model3DLegPodkolYamk->getClientOriginalExtension();

            // Store the model in the public folder with the unique name
            $model3DLegPodkolYamk->move('models', $uniqueName);

            $section->model_3D_leg_podkol_yamk = '/models/' . $uniqueName;
        }

        //check if section has model_3D_leg_goleni upload
        if ($request->hasFile('model_3D_leg_goleni')) {
            $model3DLegGoleni = $request->file('model_3D_leg_goleni');

            // Generate a unique name for the model using name and timestamp
            $uniqueName = str(pathinfo($model3DLegGoleni->getClientOriginalName(), PATHINFO_FILENAME))->slug() . '-' . time() . '.' . $model3DLegGoleni->getClientOriginalExtension();

            // Store the model in the public folder with the unique name
            $model3DLegGoleni->move('models', $uniqueName);

            $section->model_3D_leg_goleni = '/models/' . $uniqueName;
        }

        // Check if section images were uploaded
        if ($request->hasFile('section_images')) {
            $sectionImages = $request->file('section_images');
            // Loop through each uploaded image
            foreach ($sectionImages as $image) {
                // Generate a unique name for the image using name and timestamp
                $uniqueName = str($request->name)->slug() . '-' . time() . '.' . $image->getClientOriginalExtension();

                // Store the image in the public folder with the unique name
                $image->move('sections', $uniqueName);

                // Create a new section image record with the section_id and unique name
                SectionImage::create([
                    'section_id' => $section->id,
                    'image' => '/sections/' . $uniqueName,
                ]);
            }
        }

        // Check if section models were uploaded
        if ($request->hasFile('section_models')) {
            $sectionModels = $request->file('section_models');
            // Loop through each uploaded model
            foreach ($sectionModels as $model) {
                // Generate a unique name for the model using name and timestamp
                $uniqueName = str(pathinfo($model->getClientOriginalName(), PATHINFO_FILENAME))->slug() . '-' . time() . '.' . $model->getClientOriginalExtension();

                // Store the model in the public folder with the unique name
                $model->move('models', $uniqueName);

                // Create a new section model record with the section_id and unique name
                SectionModel::create([
                    'section_id' => $section->id,
                    'model' => '/models/' . $uniqueName,
                    'name' => pathinfo($model->getClientOriginalName(), PATHINFO_FILENAME),
                    'file_name' => $uniqueName
                ]);
            }
        }

        $section->update();
        return redirect()->route('admin.section.index')->with('success', 'Страница успешно обновлена.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $section = Section::findOrFail($id);
        if ($section) {
            $image = SectionImage::where('section_id', $id)->get();
            foreach ($image as $img) {
                $filePath = public_path('sections/' . str_replace('sections/', '', $img->image));
                if (is_file($filePath)) {
                    unlink($filePath);
                }

                $image->delete();
            }

            $model = SectionModel::where('section_id', $id)->get();
            foreach ($model as $mdl) {
                $filePath = public_path('models/' . str_replace('models/', '', $mdl->model));
                if (is_file($filePath)) {
                    unlink($filePath);
                }

                $model->delete();
            }

            $section->delete();
        }
        return redirect()->route('admin.section.index')->with('success', 'Страница успешно удалена.');
    }

    public function deleteImage($id)
    {
        $image = SectionImage::find($id);
        if ($image) {
            $filePath = public_path('sections/' . str_replace('section_images/', '', $image->image));
            if (is_file($filePath)) {
                unlink($filePath);
            }

            $image->delete();
            return redirect()->route('admin.section.index')->with('success', 'Картинка успешно удалена');
        } else {
            return redirect()->back()->with('errors', 'Картинка не найдена');
        }
    }

    public function deleteModel($id)
    {
        $model = SectionModel::find($id);
        if ($model) {
            $filePath = public_path('models/' . str_replace('section_models/', '', $model->model));
            if (is_file($filePath)) {
                unlink($filePath);
            }

            $model->delete();
            return redirect()->route('admin.section.index')->with('success', 'Модель успешно удалена');
        } else {
            return redirect()->back()->with('errors', 'Модель не найдена');
        }
    }
}