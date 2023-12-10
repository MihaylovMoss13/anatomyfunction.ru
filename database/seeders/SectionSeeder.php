<?php

namespace Database\Seeders;

use App\Models\Section;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Section::create([
            'name'                => 'Шея',
            'slug'                => 'sheya',
            'text'                => '',
            'is_published'        => 1,
            'link_images_schemes' => 'https://disk.yandex.ru/d/AZS8IFeToHXHIQ/2D%20рисунки%20и%20схемы%20',
            'link_tables'         => 'https://disk.yandex.ru/d/AZS8IFeToHXHIQ/Таблицы',
            'link_mental_cards'   => 'https://disk.yandex.ru/d/AZS8IFeToHXHIQ/Ментальные%20карты%2B%20скрабл',
            'link_test'           => 'https://onlinetestpad.com/y56gfcp5m4sqw',
            'link_video'          => 'https://youtu.be/SvwJgE-8sgU',
        ]);

        Section::create([
            'name'                 => 'Нога',
            'slug'                 => 'noga',
            'text'                 => '',
            'text_leg_bedr_treug'  => 'Бедренный треугольник, скарповский, или, правильнее, треугольник Скарпы [Scarpa], ограничен с латеральной стороны портняжной мышцей, m. sartorius, с медиальной — длинной приводящей мышцей, m. adductor longus; его вершина образована пересечением этих мышц, а основание — паховой связкой. Высота бедренного треугольника — 15—20 см.',
            'text_leg_podkol_yamk' => 'Расположена в задней области колена (regio genus posterior), имеет форму ромба. Сверху эта ямка ограничена полуперепончатой мышцей (m. semimembranosus) (медиально) и двуглавой мышцей бедра (m. biceps femoris) (латерально). Снизу границы подколенной ямки представлены медиальной и латеральной головками икроножной мышцы (m. gastrocnemius).
                                        Дно подколенной ямки образовано подколенной поверхностью (facies poplitea) бедренной кости и капсу­лой коленного сустава. В подколенной ямке располагаются подколенные сосуды и большеберцовый нерв в следующем порядке: нерв, вена, артерия (НЕВА).',
            'text_leg_goleni'      => 'Голеноподколенный канал (canalis cruropopliteus, Груберов) начинается из нижнего угла подколенной ямки. Канал имеет переднюю и заднюю стенки. Передняя стенка образована задней большеберцовой мышцей (m. tibialis posterior), задняя стенка голеноподколенного канала представлена камбаловидной мышцей (m. soleus). В голеноподколенном канале располагаются задние большеберцовые артерия, вены и большеберцовый нерв. Верхний мышечно-малоберцовый канал (canalis musculoperoneus superior) начи­нается позади головки малоберцовой кости. Канал располагается между латеральной по­верхностью малоберцовой кости и длинной малоберцовой мышцей (m. peroneus longus). В верхнем мышечно-малоберцовом канале проходит общий малоберцовый нерв.
                Нижний мышечно-малоберцовый канал (canalis musculoperoneus inferior) начинается в средней трети голени и является как бы ответвлением голеноподколенного канала. Канал имеет 2 стенки: 1 - переднюю, образованную малоберцовой костью (fibula seu perone), и 2 - заднюю, представленную длинным сгибателем большого пальца стопы (m. flexor hallucis longus) и задней большеберцовой мышцей (m. tibialis posterior). В нижнем мы­шечно-малоберцовом канале проходят малоберцовые артерия и вены.
            ',
            'is_published'         => 1,
            'link_images_schemes'  => 'https://disk.yandex.ru/d/j5ecr6CxnquQow/2D-рисунки%20и%20схемы',
            'link_tables'          => 'https://disk.yandex.ru/d/j5ecr6CxnquQow/Таблицы',
            'link_mental_cards'    => 'https://disk.yandex.ru/d/j5ecr6CxnquQow/Метальные%20карты%20и%20скрабл',
            'link_test'            => 'https://onlinetestpad.com/k2azh3dtd3yiy',
            'link_video'           => 'https://youtube.com/shorts/sZzAXXoTih4',
        ]);

        Section::create([
            'name'                => 'Рука',
            'slug'                => 'ruka',
            'text'                => '',
            'is_published'        => 1,
            'link_images_schemes' => 'https://disk.yandex.ru/d/AH39GSnIZAa3NQ/2D-схемы%20и%20рисунки',
            'link_tables'         => 'https://disk.yandex.ru/d/AH39GSnIZAa3NQ/Таблицы%20',
            'link_mental_cards'   => 'https://disk.yandex.ru/d/AH39GSnIZAa3NQ/Ментальные%20карты%20и%20скрабл',
            'link_test'           => 'https://onlinetestpad.com/tq3cropai2aro',
            'link_video'          => 'https://youtube.com/shorts/w5guiMUUnSc',
        ]);

        Section::create([
            'name'                => 'Туловище',
            'slug'                => 'tulovishe',
            'text'                => '',
            'is_published'        => 1,
            'link_images_schemes' => 'https://disk.yandex.ru/d/tBaCUu7PfJx1SQ/2D-схемы%20и%20рисунки',
            'link_tables'         => 'https://disk.yandex.ru/d/tBaCUu7PfJx1SQ/Таблицы',
            'link_mental_cards'   => 'https://disk.yandex.ru/d/tBaCUu7PfJx1SQ/Ментальные%20карты%20и%20скрабл',
            'link_test'           => 'https://onlinetestpad.com/zajnsfp7ur6hy',
            'link_video'          => 'https://youtu.be/bHAAcgQcVlM',
        ]);
    }
}