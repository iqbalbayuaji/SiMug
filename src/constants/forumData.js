export const articles = [
    {
        id: 1,
        category: 'Fitness',
        title: 'Bagaimana cara menjaga konsistensi workout dirumah?',
        author: 'Imam Hambali',
        authorAvatar: 'https://ui-avatars.com/api/?name=Imam+Hambali&background=4177FF&color=fff',
        time: '2 minggu lalu',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        content: `
            <p>Banyak orang bergabung dengan gym atau mulai lari pagi dengan motivasi yang berapi-api di minggu pertama. Namun, statistik menunjukkan bahwa <strong class="font-semibold">lebih dari 60% pemula berhenti di bulan pertama</strong>. Kenapa? Karena mereka mengejar hasil instan, bukan membangun kebiasaan.</p>

            <p>Membentuk otot atau menurunkan berat badan bukanlah proses semalam. Tubuh membutuhkan waktu untuk beradaptasi dengan beban latihan baru. Rasa pegal (DOMS) itu wajar, dan justru pertanda bahwa otot sedang "dibangun ulang" menjadi lebih kuat.</p>

            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-[#4177FF] p-6 rounded-r-xl my-6">
                <p class="text-lg font-medium text-gray-800 italic">
                    "Motivation gets you started. Habit is what keeps you going. Jangan menunggu 'lagi mood' untuk berolahraga, karena mood itu fluktuatif, sedangkan disiplin itu absolut."
                </p>
            </div>

            <h2 class="text-xl lg:text-2xl font-semibold text-gray-900 mt-8 mb-4">Tips Menjaga Konsistensi</h2>

            <p>Mulailah dengan target kecil yang realistis. Daripada memaksakan diri lari 10km di hari pertama, cobalah 2-3km namun rutin setiap dua hari sekali. Catat progres latihanmu, entah itu beban angkatan yang bertambah atau durasi lari yang semakin cepat.</p>

            <p>Ingat, latihan yang "jelek" pun tetap lebih baik daripada tidak latihan sama sekali. Nikmati prosesnya, dengarkan tubuhmu, dan jadikan olahraga sebagai perayaan atas apa yang tubuhmu bisa lakukan, bukan hukuman atas apa yang kamu makan.</p>
        `
    },
    {
        id: 2,
        category: 'Atletik',
        title: 'Teknik Dasar Lari Cepat yang Wajib Diketahui Pemula',
        author: 'Siti Aminah',
        authorAvatar: 'https://ui-avatars.com/api/?name=Siti+Aminah&background=10B981&color=fff',
        time: '3 hari lalu',
        image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        content: `
            <p>Lari cepat atau sprint bukan hanya soal menggerakkan kaki secepat mungkin. Ada teknik khusus yang bisa membuat larimu lebih efisien dan mengurangi risiko cedera.</p>

            <h2 class="text-xl lg:text-2xl font-semibold text-gray-900 mt-8 mb-4">Posisi Tubuh</h2>
            <p>Condongkan tubuh sedikit ke depan, tapi jaga punggung tetap lurus. Jangan membungkuk, karena akan menghambat pernapasan dan keseimbangan.</p>

            <h2 class="text-xl lg:text-2xl font-semibold text-gray-900 mt-8 mb-4">Ayunan Tangan</h2>
            <p>Ayunan tangan sangat membantu momentum. Tekuk siku 90 derajat dan ayunkan sejajar dengan tubuh, bukan menyilang di depan dada.</p>    
        `
    },
    {
        id: 3,
        category: 'Workout',
        title: 'Manfaat Yoga di Pagi Hari untuk Kesehatan Mental',
        author: 'Rina Yoga',
        authorAvatar: 'https://ui-avatars.com/api/?name=Rina+Yoga&background=F59E0B&color=fff',
        time: '1 bulan lalu',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        content: `
            <p>Yoga bukan hanya sekadar olahraga fisik, tapi juga latihan mental. Melakukan yoga di pagi hari bisa membantu menenangkan pikiran sebelum memulai aktivitas yang padat.</p>

            <p>Gerakan seperti Surya Namaskar sangat baik untuk melancarkan peredaran darah dan membangunkan otot-otot yang kaku setelah tidur semalaman.</p>
        `
    }

];

export const forums = [
    {
        id: 1,
        name: 'Calisthenics Indonesia',
        members: '1.528',
        color: 'bg-blue-600',
        description: 'Komunitas Pecinta Calisthenics Indonesia.',
        avatar: "https://ui-avatars.com/api/?name=Calisthenics+Indonesia&background=2563EB&color=fff",
        foundedDate: "12 Januari 2023",
        location: "Jakarta, Indonesia",
        founder: "Budi Santoso",
        stats: {
            members: "1.528",
        },
        aboutMessage: "Selamat datang di Komunitas Calisthenics Indonesia! Tempat berkumpulnya para penggiat street workout.",
        topics: [
            { title: "Program Latihan Pemula", description: "Panduan memulai calisthenics dari nol." },
            { title: "Event Gathering", description: "Jadwal kumpul rutin setiap minggu." }
        ]
    },
    {
        id: 2,
        name: 'Pelari Kalcer Bandung',
        members: '2.128',
        color: 'bg-yellow-400',
        description: 'Komunitas lari santai tapi serius di Bandung.',
        avatar: "https://ui-avatars.com/api/?name=Pelari+Kalcer&background=FBBF24&color=fff",
        foundedDate: "15 Maret 2022",
        location: "Bandung, Indonesia",
        founder: "Teh Rini",
        stats: {
            members: "2.128",
        },
        aboutMessage: "Lari pagi, sore, malam, yang penting happy! Join us for weekly runs.",
        topics: [
            { title: "Rute Lari Favorit", description: "Sharing rute lari instagramable di Bandung." },
            { title: "Review Sepatu", description: "Diskusi sepatu lari terbaik tahun ini." }
        ]
    },
    {
        id: 3,
        name: 'Nutrisi Sehat SiMug',
        members: '1.028',
        color: 'bg-orange-500',
        description: 'Sharing resep dan pola makan sehat.',
        avatar: "https://ui-avatars.com/api/?name=Nutrisi+Sehat&background=F97316&color=fff",
        foundedDate: "20 Agustus 2023",
        location: "Surabaya, Indonesia",
        founder: "Dr. Gizi",
        stats: {
            members: "1.028",
        },
        aboutMessage: "Makan enak tetap sehat. Yuk berbagi resep diet yang gak menyiksa!",
        topics: [
            { title: "Resep Diet Murah", description: "Makanan sehat ramah kantong anak kos." },
            { title: "Mitos Fakta Nutrisi", description: "Meluruskan hoax seputar makanan." }
        ]
    }
];
