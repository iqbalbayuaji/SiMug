// Data dummy untuk courses
// Kategori: Kebugaran dan Fisik, Sports & Skill Training, Nutrisi & Gaya Hidup

export const courseCategories = [
  { id: 'kebugaran', name: 'Kebugaran dan Fisik', icon: 'gymIcon' },
  { id: 'sports', name: 'Sports & Skill Training', icon: 'soccerIcon' },
  { id: 'nutrisi', name: 'Nutrisi & Gaya Hidup', icon: 'foodIcon' },
]

export const coursesData = [
  // ============ KEBUGARAN DAN FISIK ============
  {
    id: 1,
    slug: 'fitness-fundamental-pemula',
    title: 'Fitness Fundamental untuk Pemula',
    shortDescription: 'Pelajari dasar-dasar fitness dan bangun fondasi kuat untuk perjalanan kebugaranmu.',
    description: `Course ini dirancang khusus untuk kamu yang baru memulai perjalanan fitness. Kamu akan mempelajari teknik dasar yang benar, cara menggunakan peralatan gym dengan aman, dan bagaimana menyusun program latihan yang efektif.

Dengan panduan step-by-step, kamu akan memahami anatomi dasar otot, prinsip progressive overload, dan pentingnya recovery. Course ini cocok untuk siapa saja yang ingin memulai gaya hidup sehat tanpa risiko cedera.`,
    category: 'kebugaran',
    categoryLabel: 'Kebugaran dan Fisik',
    level: 'Pemula',
    duration: '8 jam',
    totalModules: 6,
    totalLessons: 32,
    price: 149000,
    discountPrice: 99000,
    rating: 4.8,
    totalRatings: 2453,
    totalStudents: 12500,
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    previewVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'Coach Andi Pratama',
      avatar: 'https://ui-avatars.com/api/?name=Andi+Pratama&background=4177FF&color=fff&size=200',
      title: 'Certified Personal Trainer',
      bio: 'Personal trainer bersertifikat dengan pengalaman 8+ tahun. Telah membantu lebih dari 500 klien mencapai goals fitness mereka.',
      totalCourses: 5,
      totalStudents: 25000,
    },
    features: [
      'Teknik dasar gerakan compound & isolation',
      'Cara menggunakan peralatan gym dengan benar',
      'Menyusun program latihan mingguan',
      'Manajemen recovery dan istirahat',
      'Tracking progress yang efektif',
      'Tips nutrisi dasar untuk pemula',
    ],
    requirements: [
      'Tidak memerlukan pengalaman fitness sebelumnya',
      'Akses ke gym atau peralatan dasar di rumah',
      'Komitmen untuk berlatih minimal 3x seminggu',
    ],
    curriculum: [
      {
        moduleId: 1,
        title: 'Pengantar Fitness',
        duration: '45 menit',
        lessons: [
          { id: 1, title: 'Apa itu Fitness dan Mengapa Penting?', duration: '10:00', isPreview: true },
          { id: 2, title: 'Mengenal Jenis-jenis Latihan', duration: '15:00', isPreview: true },
          { id: 3, title: 'Goal Setting yang Realistis', duration: '12:00', isPreview: false },
          { id: 4, title: 'Mindset untuk Sukses', duration: '8:00', isPreview: false },
        ]
      },
      {
        moduleId: 2,
        title: 'Anatomi & Otot Dasar',
        duration: '1 jam',
        lessons: [
          { id: 5, title: 'Kelompok Otot Utama', duration: '15:00', isPreview: false },
          { id: 6, title: 'Cara Kerja Otot', duration: '12:00', isPreview: false },
          { id: 7, title: 'Prinsip Progressive Overload', duration: '18:00', isPreview: false },
          { id: 8, title: 'Pentingnya Form yang Benar', duration: '15:00', isPreview: false },
        ]
      },
      {
        moduleId: 3,
        title: 'Gerakan Compound',
        duration: '1.5 jam',
        lessons: [
          { id: 9, title: 'Squat: Teknik & Variasi', duration: '20:00', isPreview: false },
          { id: 10, title: 'Deadlift: Langkah demi Langkah', duration: '22:00', isPreview: false },
          { id: 11, title: 'Bench Press: Panduan Lengkap', duration: '18:00', isPreview: false },
          { id: 12, title: 'Overhead Press: Tips & Tricks', duration: '15:00', isPreview: false },
          { id: 13, title: 'Rowing Movements', duration: '15:00', isPreview: false },
        ]
      },
      {
        moduleId: 4,
        title: 'Gerakan Isolation',
        duration: '1 jam',
        lessons: [
          { id: 14, title: 'Bicep & Tricep Exercises', duration: '15:00', isPreview: false },
          { id: 15, title: 'Shoulder Isolation', duration: '12:00', isPreview: false },
          { id: 16, title: 'Core & Abs Training', duration: '18:00', isPreview: false },
          { id: 17, title: 'Leg Isolation Movements', duration: '15:00', isPreview: false },
        ]
      },
      {
        moduleId: 5,
        title: 'Program & Scheduling',
        duration: '1 jam',
        lessons: [
          { id: 18, title: 'Menyusun Split Training', duration: '20:00', isPreview: false },
          { id: 19, title: 'Full Body vs Split Routine', duration: '15:00', isPreview: false },
          { id: 20, title: 'Periodisasi untuk Pemula', duration: '15:00', isPreview: false },
          { id: 21, title: 'Template Program Siap Pakai', duration: '10:00', isPreview: false },
        ]
      },
      {
        moduleId: 6,
        title: 'Recovery & Lifestyle',
        duration: '45 menit',
        lessons: [
          { id: 22, title: 'Pentingnya Istirahat', duration: '12:00', isPreview: false },
          { id: 23, title: 'Sleep Optimization', duration: '15:00', isPreview: false },
          { id: 24, title: 'Nutrisi Dasar untuk Recovery', duration: '18:00', isPreview: false },
        ]
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'Budi Santoso',
        avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=random',
        rating: 5,
        date: '2 minggu lalu',
        comment: 'Course yang sangat lengkap! Sebagai pemula, saya jadi paham teknik yang benar. Coach Andi menjelaskan dengan sangat detail.',
      },
      {
        id: 2,
        user: 'Dewi Lestari',
        avatar: 'https://ui-avatars.com/api/?name=Dewi+Lestari&background=random',
        rating: 5,
        date: '1 bulan lalu',
        comment: 'Recommended banget! Video berkualitas tinggi dan materi mudah dipahami. Sekarang saya sudah PD ke gym sendiri.',
      },
      {
        id: 3,
        user: 'Rizky Fadilah',
        avatar: 'https://ui-avatars.com/api/?name=Rizky+Fadilah&background=random',
        rating: 4,
        date: '1 bulan lalu',
        comment: 'Bagus untuk pemula. Mungkin bisa ditambah lebih banyak variasi gerakan.',
      },
    ],
    badge: 'Bestseller',
    updatedAt: 'November 2024',
  },
  {
    id: 2,
    slug: 'bodyweight-training-rumah',
    title: 'Bodyweight Training di Rumah',
    shortDescription: 'Latihan efektif tanpa peralatan! Bangun otot dan stamina dari rumah.',
    description: `Tidak punya akses ke gym? Tidak masalah! Course ini akan mengajarkan kamu cara membangun tubuh ideal hanya dengan berat badanmu sendiri.

Dari push-up dasar hingga variasi advanced seperti muscle-up progression, kamu akan mempelajari gerakan-gerakan yang efektif untuk membangun kekuatan, massa otot, dan daya tahan.`,
    category: 'kebugaran',
    categoryLabel: 'Kebugaran dan Fisik',
    level: 'Semua Level',
    duration: '6 jam',
    totalModules: 5,
    totalLessons: 28,
    price: 129000,
    discountPrice: 79000,
    rating: 4.7,
    totalRatings: 1876,
    totalStudents: 9800,
    thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
    previewVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'Maya Sari',
      avatar: 'https://ui-avatars.com/api/?name=Maya+Sari&background=FF6B6B&color=fff&size=200',
      title: 'Calisthenics Coach',
      bio: 'Atlet calisthenics nasional dan coach dengan 5+ tahun pengalaman. Spesialisasi dalam bodyweight training dan mobility.',
      totalCourses: 3,
      totalStudents: 15000,
    },
    features: [
      'Gerakan bodyweight dari basic hingga advanced',
      'Program latihan tanpa peralatan',
      'Progression untuk setiap gerakan',
      'Mobility dan flexibility routine',
      'Workout plans untuk berbagai goals',
    ],
    requirements: [
      'Tidak memerlukan peralatan',
      'Ruang minimal 2x2 meter',
      'Matras yoga (opsional)',
    ],
    curriculum: [
      {
        moduleId: 1,
        title: 'Fundamental Movements',
        duration: '1 jam',
        lessons: [
          { id: 1, title: 'Push-up Progression', duration: '15:00', isPreview: true },
          { id: 2, title: 'Squat Variations', duration: '15:00', isPreview: true },
          { id: 3, title: 'Pull-up Progression', duration: '18:00', isPreview: false },
          { id: 4, title: 'Core Fundamentals', duration: '12:00', isPreview: false },
        ]
      },
      {
        moduleId: 2,
        title: 'Upper Body Focus',
        duration: '1.5 jam',
        lessons: [
          { id: 5, title: 'Advanced Push-ups', duration: '20:00', isPreview: false },
          { id: 6, title: 'Dips & Variations', duration: '18:00', isPreview: false },
          { id: 7, title: 'Handstand Progression', duration: '25:00', isPreview: false },
          { id: 8, title: 'Shoulder Strength', duration: '15:00', isPreview: false },
        ]
      },
      {
        moduleId: 3,
        title: 'Lower Body Focus',
        duration: '1 jam',
        lessons: [
          { id: 9, title: 'Pistol Squat Progression', duration: '20:00', isPreview: false },
          { id: 10, title: 'Lunges & Split Squats', duration: '15:00', isPreview: false },
          { id: 11, title: 'Glute Activation', duration: '12:00', isPreview: false },
          { id: 12, title: 'Calf & Ankle Work', duration: '13:00', isPreview: false },
        ]
      },
      {
        moduleId: 4,
        title: 'Core Mastery',
        duration: '1 jam',
        lessons: [
          { id: 13, title: 'Hollow Body Position', duration: '15:00', isPreview: false },
          { id: 14, title: 'L-Sit Progression', duration: '18:00', isPreview: false },
          { id: 15, title: 'Leg Raises & Variations', duration: '15:00', isPreview: false },
          { id: 16, title: 'Plank Mastery', duration: '12:00', isPreview: false },
        ]
      },
      {
        moduleId: 5,
        title: 'Program Templates',
        duration: '30 menit',
        lessons: [
          { id: 17, title: 'Beginner Full Body Routine', duration: '10:00', isPreview: false },
          { id: 18, title: 'Intermediate Split', duration: '10:00', isPreview: false },
          { id: 19, title: 'Advanced Challenge', duration: '10:00', isPreview: false },
        ]
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'Ahmad Wijaya',
        avatar: 'https://ui-avatars.com/api/?name=Ahmad+Wijaya&background=random',
        rating: 5,
        date: '1 minggu lalu',
        comment: 'Perfect untuk yang tidak punya waktu ke gym! Progression-nya jelas dan mudah diikuti.',
      },
      {
        id: 2,
        user: 'Sinta Dewi',
        avatar: 'https://ui-avatars.com/api/?name=Sinta+Dewi&background=random',
        rating: 4,
        date: '3 minggu lalu',
        comment: 'Bagus sekali! Coach Maya sangat menginspirasi. Saya sudah bisa hold handstand 10 detik!',
      },
    ],
    badge: 'Popular',
    updatedAt: 'Desember 2024',
  },
  {
    id: 3,
    slug: 'fat-loss-program',
    title: 'Fat Loss Program Berkelanjutan',
    shortDescription: 'Program penurunan lemak yang sustainable dan tidak menyiksa.',
    description: `Lupakan diet ekstrem yang tidak sustainable! Course ini mengajarkan pendekatan ilmiah untuk menurunkan lemak tubuh sambil mempertahankan massa otot.

Kamu akan belajar tentang defisit kalori yang tepat, macronutrient balancing, dan jenis latihan yang optimal untuk fat loss. Semua berbasis research terbaru!`,
    category: 'kebugaran',
    categoryLabel: 'Kebugaran dan Fisik',
    level: 'Semua Level',
    duration: '10 jam',
    totalModules: 8,
    totalLessons: 45,
    price: 199000,
    discountPrice: 149000,
    rating: 4.9,
    totalRatings: 3210,
    totalStudents: 18500,
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
    previewVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'Dr. Fajar Nutritionist',
      avatar: 'https://ui-avatars.com/api/?name=Dr+Fajar&background=22C55E&color=fff&size=200',
      title: 'Sports Nutritionist & Trainer',
      bio: 'Dokter olahraga dengan spesialisasi nutrisi. Lulusan UI dengan sertifikasi internasional dari ISSN.',
      totalCourses: 4,
      totalStudents: 30000,
    },
    features: [
      'Memahami metabolisme dan fat loss',
      'Menghitung kalori & makro dengan tepat',
      'Program cardio & strength training',
      'Meal planning untuk fat loss',
      'Mengatasi plateau',
      'Maintaining results jangka panjang',
    ],
    requirements: [
      'Pemahaman dasar tentang nutrisi (akan dijelaskan)',
      'Akses ke gym atau peralatan rumah',
      'Food scale untuk tracking (recommended)',
    ],
    curriculum: [
      {
        moduleId: 1,
        title: 'Science of Fat Loss',
        duration: '1 jam',
        lessons: [
          { id: 1, title: 'Bagaimana Tubuh Membakar Lemak', duration: '18:00', isPreview: true },
          { id: 2, title: 'Metabolisme & TDEE', duration: '20:00', isPreview: true },
          { id: 3, title: 'Mitos vs Fakta Fat Loss', duration: '15:00', isPreview: false },
          { id: 4, title: 'Setting Realistic Goals', duration: '12:00', isPreview: false },
        ]
      },
      {
        moduleId: 2,
        title: 'Nutrition Strategy',
        duration: '1.5 jam',
        lessons: [
          { id: 5, title: 'Calorie Deficit yang Tepat', duration: '20:00', isPreview: false },
          { id: 6, title: 'Protein untuk Preservasi Otot', duration: '18:00', isPreview: false },
          { id: 7, title: 'Carbs & Fats: Finding Balance', duration: '20:00', isPreview: false },
          { id: 8, title: 'Meal Timing & Frequency', duration: '15:00', isPreview: false },
        ]
      },
      {
        moduleId: 3,
        title: 'Training for Fat Loss',
        duration: '1.5 jam',
        lessons: [
          { id: 9, title: 'Resistance Training Priority', duration: '22:00', isPreview: false },
          { id: 10, title: 'Cardio: LISS vs HIIT', duration: '18:00', isPreview: false },
          { id: 11, title: 'Optimal Training Split', duration: '20:00', isPreview: false },
          { id: 12, title: 'Active Recovery', duration: '15:00', isPreview: false },
        ]
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'Rina Putri',
        avatar: 'https://ui-avatars.com/api/?name=Rina+Putri&background=random',
        rating: 5,
        date: '5 hari lalu',
        comment: 'Turun 8kg dalam 3 bulan tanpa merasa tersiksa! Approach-nya sangat sustainable.',
      },
      {
        id: 2,
        user: 'Denny Kurniawan',
        avatar: 'https://ui-avatars.com/api/?name=Denny+Kurniawan&background=random',
        rating: 5,
        date: '2 minggu lalu',
        comment: 'Akhirnya paham fat loss yang benar. Tidak ada magic pill, tapi hasilnya real!',
      },
    ],
    badge: 'Bestseller',
    updatedAt: 'Januari 2025',
  },
  
  // ============ SPORTS & SKILL TRAINING ============
  {
    id: 4,
    slug: 'basic-boxing-training',
    title: 'Basic Boxing Training',
    shortDescription: 'Pelajari teknik tinju dasar untuk self-defense dan kebugaran.',
    description: `Tinju bukan hanya olahraga untuk bertarung, tapi juga cara efektif untuk membakar kalori dan meningkatkan koordinasi tubuh.

Course ini mengajarkan stance, footwork, pukulan dasar (jab, cross, hook, uppercut), dan kombinasi yang efektif. Cocok untuk fitness maupun self-defense!`,
    category: 'sports',
    categoryLabel: 'Sports & Skill Training',
    level: 'Pemula',
    duration: '7 jam',
    totalModules: 6,
    totalLessons: 30,
    price: 179000,
    discountPrice: 129000,
    rating: 4.8,
    totalRatings: 1567,
    totalStudents: 8900,
    thumbnail: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800',
    previewVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'Coach Rocky Hidayat',
      avatar: 'https://ui-avatars.com/api/?name=Rocky+Hidayat&background=EF4444&color=fff&size=200',
      title: 'Professional Boxing Coach',
      bio: 'Mantan atlet tinju nasional dengan pengalaman 15+ tahun. Pelatih beberapa atlet profesional Indonesia.',
      totalCourses: 2,
      totalStudents: 12000,
    },
    features: [
      'Stance dan footwork yang benar',
      'Teknik pukulan dasar lengkap',
      'Defensive movements',
      'Kombinasi untuk sparring',
      'Conditioning untuk boxer',
      'Shadow boxing routines',
    ],
    requirements: [
      'Sarung tinju (boxing gloves)',
      'Ruang latihan minimal 3x3 meter',
      'Cermin untuk koreksi form (recommended)',
    ],
    curriculum: [
      {
        moduleId: 1,
        title: 'Pengenalan Boxing',
        duration: '45 menit',
        lessons: [
          { id: 1, title: 'Sejarah & Filosofi Tinju', duration: '10:00', isPreview: true },
          { id: 2, title: 'Equipment yang Dibutuhkan', duration: '12:00', isPreview: true },
          { id: 3, title: 'Pemanasan Boxing', duration: '15:00', isPreview: false },
          { id: 4, title: 'Hand Wrapping Tutorial', duration: '8:00', isPreview: false },
        ]
      },
      {
        moduleId: 2,
        title: 'Stance & Footwork',
        duration: '1 jam',
        lessons: [
          { id: 5, title: 'Basic Stance', duration: '15:00', isPreview: false },
          { id: 6, title: 'Forward & Backward Movement', duration: '12:00', isPreview: false },
          { id: 7, title: 'Lateral Movement', duration: '15:00', isPreview: false },
          { id: 8, title: 'Pivot & Angles', duration: '18:00', isPreview: false },
        ]
      },
      {
        moduleId: 3,
        title: 'Basic Punches',
        duration: '1.5 jam',
        lessons: [
          { id: 9, title: 'The Jab', duration: '20:00', isPreview: false },
          { id: 10, title: 'The Cross (Straight Right)', duration: '20:00', isPreview: false },
          { id: 11, title: 'The Hook', duration: '22:00', isPreview: false },
          { id: 12, title: 'The Uppercut', duration: '18:00', isPreview: false },
        ]
      },
      {
        moduleId: 4,
        title: 'Defense',
        duration: '1 jam',
        lessons: [
          { id: 13, title: 'Basic Guard Position', duration: '12:00', isPreview: false },
          { id: 14, title: 'Slipping & Rolling', duration: '18:00', isPreview: false },
          { id: 15, title: 'Blocking & Parrying', duration: '15:00', isPreview: false },
          { id: 16, title: 'Counter Punching Basics', duration: '15:00', isPreview: false },
        ]
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'Yoga Pratama',
        avatar: 'https://ui-avatars.com/api/?name=Yoga+Pratama&background=random',
        rating: 5,
        date: '1 minggu lalu',
        comment: 'Coach Rocky luar biasa! Penjelasannya detail dan mudah diikuti.',
      },
    ],
    badge: 'Popular',
    updatedAt: 'Desember 2024',
  },
  {
    id: 5,
    slug: 'basketball-skill-training',
    title: 'Basketball Skill Training',
    shortDescription: 'Tingkatkan skill basketball-mu: dribbling, shooting, dan game IQ.',
    description: `Dari pemula yang baru memegang bola hingga yang ingin meningkatkan skill, course ini cocok untuk semua level.

Pelajari fundamental dribbling, berbagai teknik shooting, passing yang efektif, dan defensive basics. Dilengkapi dengan drills yang bisa kamu latih sendiri!`,
    category: 'sports',
    categoryLabel: 'Sports & Skill Training',
    level: 'Semua Level',
    duration: '9 jam',
    totalModules: 7,
    totalLessons: 38,
    price: 169000,
    discountPrice: 119000,
    rating: 4.7,
    totalRatings: 1234,
    totalStudents: 7500,
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
    previewVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'Coach Daniel Basket',
      avatar: 'https://ui-avatars.com/api/?name=Daniel+Basket&background=F97316&color=fff&size=200',
      title: 'Basketball Coach & Former Pro Player',
      bio: 'Mantan pemain profesional IBL dengan 10+ tahun pengalaman coaching. Spesialisasi skill development.',
      totalCourses: 3,
      totalStudents: 10000,
    },
    features: [
      'Ball handling & dribbling drills',
      'Shooting mechanics yang benar',
      'Passing fundamentals',
      'Defensive stance & movements',
      'Game IQ & court awareness',
      'Practice plans untuk berbagai level',
    ],
    requirements: [
      'Bola basket',
      'Lapangan atau area datar',
      'Ring basket (untuk shooting drills)',
    ],
    curriculum: [
      {
        moduleId: 1,
        title: 'Basketball Basics',
        duration: '30 menit',
        lessons: [
          { id: 1, title: 'Memahami Permainan Basket', duration: '10:00', isPreview: true },
          { id: 2, title: 'Posisi & Tugas Pemain', duration: '12:00', isPreview: true },
          { id: 3, title: 'Warm-up untuk Basket', duration: '8:00', isPreview: false },
        ]
      },
      {
        moduleId: 2,
        title: 'Ball Handling',
        duration: '1.5 jam',
        lessons: [
          { id: 4, title: 'Basic Dribbling', duration: '18:00', isPreview: false },
          { id: 5, title: 'Crossover & Between Legs', duration: '20:00', isPreview: false },
          { id: 6, title: 'Behind the Back', duration: '18:00', isPreview: false },
          { id: 7, title: 'Advanced Combinations', duration: '22:00', isPreview: false },
        ]
      },
      {
        moduleId: 3,
        title: 'Shooting',
        duration: '2 jam',
        lessons: [
          { id: 8, title: 'Shooting Form & Mechanics', duration: '25:00', isPreview: false },
          { id: 9, title: 'Free Throw Mastery', duration: '18:00', isPreview: false },
          { id: 10, title: 'Mid-Range Game', duration: '20:00', isPreview: false },
          { id: 11, title: '3-Point Shooting', duration: '22:00', isPreview: false },
          { id: 12, title: 'Layups & Finishing', duration: '25:00', isPreview: false },
        ]
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'Kevin Basketball',
        avatar: 'https://ui-avatars.com/api/?name=Kevin+B&background=random',
        rating: 5,
        date: '2 minggu lalu',
        comment: 'Shooting saya improve drastis setelah ikut course ini!',
      },
    ],
    badge: null,
    updatedAt: 'November 2024',
  },
  {
    id: 6,
    slug: 'futsal-sepak-bola-dasar',
    title: 'Basic Futsal & Sepak Bola',
    shortDescription: 'Kuasai teknik dasar futsal dan sepak bola untuk bermain lebih baik.',
    description: `Course komprehensif untuk mempelajari fundamental sepak bola dan futsal. Dari ball control, passing, dribbling, hingga shooting.

Cocok untuk pemula yang ingin belajar dari nol, atau pemain rekreasional yang ingin meningkatkan skill dasar mereka.`,
    category: 'sports',
    categoryLabel: 'Sports & Skill Training',
    level: 'Pemula',
    duration: '8 jam',
    totalModules: 6,
    totalLessons: 35,
    price: 149000,
    discountPrice: 99000,
    rating: 4.6,
    totalRatings: 987,
    totalStudents: 6200,
    thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
    previewVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'Coach Ricky Futsal',
      avatar: 'https://ui-avatars.com/api/?name=Ricky+Futsal&background=10B981&color=fff&size=200',
      title: 'Licensed Football Coach',
      bio: 'Coach berlisensi AFC C dengan pengalaman melatih tim muda dan dewasa selama 8 tahun.',
      totalCourses: 2,
      totalStudents: 8000,
    },
    features: [
      'Ball control & first touch',
      'Passing accuracy',
      'Dribbling skills',
      'Shooting techniques',
      'Positioning basics',
      'Small-sided game tactics',
    ],
    requirements: [
      'Bola sepak/futsal',
      'Sepatu futsal/bola',
      'Area latihan',
    ],
    curriculum: [
      {
        moduleId: 1,
        title: 'Fundamental Skills',
        duration: '1.5 jam',
        lessons: [
          { id: 1, title: 'Ball Control Basics', duration: '20:00', isPreview: true },
          { id: 2, title: 'First Touch Training', duration: '18:00', isPreview: true },
          { id: 3, title: 'Passing Fundamentals', duration: '22:00', isPreview: false },
          { id: 4, title: 'Receiving Under Pressure', duration: '18:00', isPreview: false },
        ]
      },
    ],
    reviews: [],
    badge: null,
    updatedAt: 'Oktober 2024',
  },

  // ============ NUTRISI & GAYA HIDUP ============
  {
    id: 7,
    slug: 'basic-nutrition-101',
    title: 'Basic Nutrition 101',
    shortDescription: 'Pahami dasar nutrisi untuk mendukung goals fitness dan kesehatanmu.',
    description: `Nutrisi adalah 80% dari hasil fitness! Course ini akan mengajarkan fundamental nutrisi yang sering disalahpahami.

Dari memahami macronutrients, micronutrients, hingga menyusun meal plan yang sesuai dengan goals-mu. Tidak ada diet ekstrem, hanya ilmu yang applicable!`,
    category: 'nutrisi',
    categoryLabel: 'Nutrisi & Gaya Hidup',
    level: 'Pemula',
    duration: '6 jam',
    totalModules: 5,
    totalLessons: 25,
    price: 129000,
    discountPrice: 89000,
    rating: 4.9,
    totalRatings: 2890,
    totalStudents: 15000,
    thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800',
    previewVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'Dr. Sari Nutritionist',
      avatar: 'https://ui-avatars.com/api/?name=Dr+Sari&background=8B5CF6&color=fff&size=200',
      title: 'Clinical Nutritionist',
      bio: 'Ahli gizi klinis dengan pengalaman 10+ tahun. Lulusan S2 Gizi UI, praktisi dan content creator nutrisi.',
      totalCourses: 4,
      totalStudents: 25000,
    },
    features: [
      'Memahami macronutrients (protein, carbs, fats)',
      'Micronutrients essential',
      'Menghitung kebutuhan kalori',
      'Meal planning basics',
      'Membaca label nutrisi',
      'Suplemen: mana yang perlu?',
    ],
    requirements: [
      'Tidak ada prasyarat',
      'Kalkulator/app untuk tracking',
      'Open mind untuk belajar',
    ],
    curriculum: [
      {
        moduleId: 1,
        title: 'Dasar Nutrisi',
        duration: '1 jam',
        lessons: [
          { id: 1, title: 'Mengapa Nutrisi Penting?', duration: '12:00', isPreview: true },
          { id: 2, title: 'Kalori: Energi untuk Tubuh', duration: '15:00', isPreview: true },
          { id: 3, title: 'TDEE & BMR Explained', duration: '18:00', isPreview: false },
          { id: 4, title: 'Surplus vs Deficit', duration: '15:00', isPreview: false },
        ]
      },
      {
        moduleId: 2,
        title: 'Macronutrients Deep Dive',
        duration: '1.5 jam',
        lessons: [
          { id: 5, title: 'Protein: Building Blocks', duration: '20:00', isPreview: false },
          { id: 6, title: 'Carbohydrates: Not Evil!', duration: '18:00', isPreview: false },
          { id: 7, title: 'Fats: Essential & Healthy', duration: '18:00', isPreview: false },
          { id: 8, title: 'Optimal Macro Ratios', duration: '20:00', isPreview: false },
        ]
      },
      {
        moduleId: 3,
        title: 'Micronutrients',
        duration: '1 jam',
        lessons: [
          { id: 9, title: 'Vitamin Essentials', duration: '18:00', isPreview: false },
          { id: 10, title: 'Minerals yang Penting', duration: '15:00', isPreview: false },
          { id: 11, title: 'Water & Hydration', duration: '12:00', isPreview: false },
          { id: 12, title: 'Fiber & Gut Health', duration: '15:00', isPreview: false },
        ]
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'Linda Healthy',
        avatar: 'https://ui-avatars.com/api/?name=Linda+H&background=random',
        rating: 5,
        date: '3 hari lalu',
        comment: 'Penjelasan Dr. Sari sangat mudah dipahami. Sekarang saya bisa meal prep sendiri!',
      },
      {
        id: 2,
        user: 'Bimo Nutrition',
        avatar: 'https://ui-avatars.com/api/?name=Bimo+N&background=random',
        rating: 5,
        date: '1 minggu lalu',
        comment: 'Course terbaik tentang nutrisi! Evidence-based dan practical.',
      },
    ],
    badge: 'Bestseller',
    updatedAt: 'Januari 2025',
  },
  {
    id: 8,
    slug: 'meal-prep-gaya-hidup-sibuk',
    title: 'Meal Prep untuk Gaya Hidup Sibuk',
    shortDescription: 'Siapkan makanan sehat seminggu hanya dalam beberapa jam!',
    description: `Tidak punya waktu memasak setiap hari? Meal prep adalah solusinya! Course ini mengajarkan cara menyiapkan makanan sehat untuk seminggu dalam waktu singkat.

Dari perencanaan, belanja efisien, cooking batch, hingga storage yang benar. Hemat waktu, hemat uang, tetap sehat!`,
    category: 'nutrisi',
    categoryLabel: 'Nutrisi & Gaya Hidup',
    level: 'Semua Level',
    duration: '5 jam',
    totalModules: 4,
    totalLessons: 20,
    price: 119000,
    discountPrice: 79000,
    rating: 4.8,
    totalRatings: 1654,
    totalStudents: 9500,
    thumbnail: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800',
    previewVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'Chef Rina',
      avatar: 'https://ui-avatars.com/api/?name=Chef+Rina&background=EC4899&color=fff&size=200',
      title: 'Healthy Food Chef & Nutritionist',
      bio: 'Chef dengan passion untuk healthy eating. Content creator dengan 500K+ followers di Instagram.',
      totalCourses: 3,
      totalStudents: 18000,
    },
    features: [
      'Planning mingguan yang efektif',
      'Grocery shopping tips',
      'Batch cooking techniques',
      'Food storage & safety',
      '30+ resep meal prep',
      'Macro-friendly recipes',
    ],
    requirements: [
      'Peralatan dapur standar',
      'Container untuk storage',
      'Kulkas & freezer',
    ],
    curriculum: [
      {
        moduleId: 1,
        title: 'Meal Prep Basics',
        duration: '45 menit',
        lessons: [
          { id: 1, title: 'Apa itu Meal Prep?', duration: '10:00', isPreview: true },
          { id: 2, title: 'Benefits of Meal Prep', duration: '12:00', isPreview: true },
          { id: 3, title: 'Tools & Equipment', duration: '15:00', isPreview: false },
          { id: 4, title: 'Container Guide', duration: '8:00', isPreview: false },
        ]
      },
      {
        moduleId: 2,
        title: 'Planning & Shopping',
        duration: '1 jam',
        lessons: [
          { id: 5, title: 'Weekly Menu Planning', duration: '20:00', isPreview: false },
          { id: 6, title: 'Creating Shopping List', duration: '15:00', isPreview: false },
          { id: 7, title: 'Smart Grocery Shopping', duration: '15:00', isPreview: false },
          { id: 8, title: 'Budget-friendly Tips', duration: '10:00', isPreview: false },
        ]
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'Busy Mom Lisa',
        avatar: 'https://ui-avatars.com/api/?name=Lisa+M&background=random',
        rating: 5,
        date: '1 minggu lalu',
        comment: 'Life changing! Sekarang saya prep food setiap Minggu dan tidak stress lagi urusan makan.',
      },
    ],
    badge: 'Popular',
    updatedAt: 'Desember 2024',
  },
  {
    id: 9,
    slug: 'mental-health-untuk-pemula',
    title: 'Mental Health untuk Pemula',
    shortDescription: 'Pahami kesehatan mental dan cara menjaganya di kehidupan sehari-hari.',
    description: `Kesehatan mental sama pentingnya dengan kesehatan fisik. Course ini membantu kamu memahami dasar-dasar kesehatan mental dan praktik self-care yang efektif.

Pelajari tentang stress management, anxiety coping, mindfulness, dan cara membangun resilience mental.`,
    category: 'nutrisi',
    categoryLabel: 'Nutrisi & Gaya Hidup',
    level: 'Semua Level',
    duration: '7 jam',
    totalModules: 6,
    totalLessons: 28,
    price: 159000,
    discountPrice: 109000,
    rating: 4.9,
    totalRatings: 2100,
    totalStudents: 12000,
    thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800',
    previewVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'Psikolog Anita',
      avatar: 'https://ui-avatars.com/api/?name=Anita+Psikolog&background=6366F1&color=fff&size=200',
      title: 'Clinical Psychologist',
      bio: 'Psikolog klinis dengan 12+ tahun praktik. Spesialisasi anxiety, depression, dan stress management.',
      totalCourses: 3,
      totalStudents: 20000,
    },
    features: [
      'Memahami kesehatan mental',
      'Stress management techniques',
      'Anxiety coping strategies',
      'Mindfulness & meditation',
      'Building healthy habits',
      'When to seek help',
    ],
    requirements: [
      'Tidak ada prasyarat',
      'Jurnal untuk refleksi (recommended)',
      'Ruang tenang untuk practice',
    ],
    curriculum: [
      {
        moduleId: 1,
        title: 'Understanding Mental Health',
        duration: '1 jam',
        lessons: [
          { id: 1, title: 'Apa itu Kesehatan Mental?', duration: '15:00', isPreview: true },
          { id: 2, title: 'Common Misconceptions', duration: '12:00', isPreview: true },
          { id: 3, title: 'Mental Health Spectrum', duration: '18:00', isPreview: false },
          { id: 4, title: 'Signs & Symptoms', duration: '15:00', isPreview: false },
        ]
      },
      {
        moduleId: 2,
        title: 'Stress Management',
        duration: '1.5 jam',
        lessons: [
          { id: 5, title: 'Understanding Stress', duration: '15:00', isPreview: false },
          { id: 6, title: 'Identifying Triggers', duration: '18:00', isPreview: false },
          { id: 7, title: 'Coping Strategies', duration: '22:00', isPreview: false },
          { id: 8, title: 'Relaxation Techniques', duration: '20:00', isPreview: false },
        ]
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'Stressed Worker',
        avatar: 'https://ui-avatars.com/api/?name=SW&background=random',
        rating: 5,
        date: '4 hari lalu',
        comment: 'Course ini membantu saya memahami diri sendiri lebih baik. Teknik-tekniknya applicable!',
      },
    ],
    badge: 'New',
    updatedAt: 'Januari 2025',
  },
  {
    id: 10,
    slug: 'sleep-optimization',
    title: 'Sleep Optimization',
    shortDescription: 'Tidur lebih berkualitas untuk recovery dan performa optimal.',
    description: `Tidur adalah fondasi dari semua aspek kesehatan. Course ini mengajarkan science of sleep dan cara praktis untuk mengoptimalkan kualitasnya.

Dari sleep hygiene, circadian rhythm, hingga mengatasi insomnia ringan. Bangun kembali kebiasaan tidur yang sehat!`,
    category: 'nutrisi',
    categoryLabel: 'Nutrisi & Gaya Hidup',
    level: 'Semua Level',
    duration: '4 jam',
    totalModules: 4,
    totalLessons: 18,
    price: 99000,
    discountPrice: 69000,
    rating: 4.8,
    totalRatings: 1432,
    totalStudents: 8000,
    thumbnail: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800',
    previewVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'Dr. Sleep Expert',
      avatar: 'https://ui-avatars.com/api/?name=Dr+Sleep&background=1E40AF&color=fff&size=200',
      title: 'Sleep Medicine Specialist',
      bio: 'Dokter spesialis tidur dengan research di bidang sleep optimization. Penulis buku "Tidur Berkualitas".',
      totalCourses: 2,
      totalStudents: 12000,
    },
    features: [
      'Science of sleep',
      'Sleep stages explained',
      'Circadian rhythm optimization',
      'Sleep hygiene practices',
      'Dealing with insomnia',
      'Napping strategy',
    ],
    requirements: [
      'Sleep tracking app (recommended)',
      'Bedroom yang bisa dioptimasi',
      'Komitmen untuk konsisten',
    ],
    curriculum: [
      {
        moduleId: 1,
        title: 'Understanding Sleep',
        duration: '1 jam',
        lessons: [
          { id: 1, title: 'Why We Sleep', duration: '15:00', isPreview: true },
          { id: 2, title: 'Sleep Cycles & Stages', duration: '18:00', isPreview: true },
          { id: 3, title: 'Circadian Rhythm', duration: '15:00', isPreview: false },
          { id: 4, title: 'Sleep Debt Reality', duration: '12:00', isPreview: false },
        ]
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'Night Owl',
        avatar: 'https://ui-avatars.com/api/?name=Night+Owl&background=random',
        rating: 5,
        date: '1 minggu lalu',
        comment: 'Akhirnya bisa tidur normal setelah ikut course ini. Highly recommended!',
      },
    ],
    badge: 'New',
    updatedAt: 'Januari 2025',
  },
]

// Helper function to get courses by category
export const getCoursesByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') return coursesData
  return coursesData.filter(course => course.category === categoryId)
}

// Helper function to get course by slug
export const getCourseBySlug = (slug) => {
  return coursesData.find(course => course.slug === slug)
}

// Helper function to get related courses
export const getRelatedCourses = (currentCourseId, category, limit = 3) => {
  return coursesData
    .filter(course => course.id !== currentCourseId && course.category === category)
    .slice(0, limit)
}

// Format price to IDR
export const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}
