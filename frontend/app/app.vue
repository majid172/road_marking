<template>
  <div :class="{ dark: isDark }" class="transition-colors duration-300">
    <div 
      :class="isDark ? 'bg-[#070D18] text-slate-100' : 'bg-slate-50 text-slate-900'" 
      class="min-h-screen font-sans selection:bg-amber-400 selection:text-slate-950 transition-colors duration-300"
    >
      
      <!-- Top Announcement & Credential Bar -->
      <header 
        :class="isDark ? 'bg-[#0B1528]/95 border-slate-800 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-900'" 
        class="border-b backdrop-blur-md sticky top-0 z-50 transition-colors duration-300"
      >
        <!-- Safety Alert Strip -->
        <div class="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 px-4 py-1.5 text-xs font-semibold tracking-wide shadow-sm">
          <div class="container mx-auto flex flex-wrap justify-between items-center gap-2">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="inline-flex items-center gap-1 bg-slate-950 text-amber-300 px-2 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                {{ currentLang === 'en' ? 'e-GP Enlisted' : 'ই-জিপি তালিকাভুক্ত' }}
              </span>
              <span class="font-bold sm:font-semibold">
                {{ currentLang === 'en' 
                  ? 'RHD & LGED Class-1 Highway Road Marking Contractor • BSTI & AASHTO M249 Certified' 
                  : 'আরএইচডি ও এলজিইডি ১ম শ্রেণির সড়ক মার্কিং ঠিকাদার • বিএসটিআই এবং আসটো এম২৪৯ সার্টিফাইড' }}
              </span>
            </div>

            <div class="flex items-center gap-3 sm:gap-4 text-xs font-bold">
              <span class="hidden md:inline-flex items-center gap-1.5 text-slate-950">
                <Phone class="w-3.5 h-3.5" />
                +880 1711-984250
              </span>

              <!-- Language Switcher -->
              <div class="flex items-center gap-1 bg-slate-950/15 px-2 py-0.5 rounded border border-slate-950/20">
                <button 
                  @click="currentLang = 'en'"
                  :class="currentLang === 'en' ? 'text-slate-950 font-black underline underline-offset-2' : 'text-slate-800 hover:text-black'"
                  class="transition cursor-pointer"
                >
                  EN
                </button>
                <span class="text-slate-900/50">|</span>
                <button 
                  @click="currentLang = 'bn'"
                  :class="currentLang === 'bn' ? 'text-slate-950 font-black underline underline-offset-2' : 'text-slate-800 hover:text-black'"
                  class="transition cursor-pointer"
                >
                  বাংলা
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Navbar -->
        <nav class="container mx-auto px-4 py-3.5 flex items-center justify-between">
          <!-- Logo -->
          <a href="#" class="flex items-center gap-3 group">
            <div class="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition duration-300 border border-amber-300">
              <svg class="w-7 h-7 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19L9 5" />
                <path d="M20 19L15 5" />
                <line x1="12" y1="7" x2="12" y2="10" stroke-width="3" />
                <line x1="12" y1="14" x2="12" y2="17" stroke-width="3" />
              </svg>
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <span :class="isDark ? 'text-white' : 'text-slate-900'" class="text-xl md:text-2xl font-black tracking-tight font-display">APEX</span>
                <span :class="isDark ? 'text-amber-400' : 'text-amber-500'" class="text-xl md:text-2xl font-black tracking-tight font-display">MARKING</span>
                <span class="bg-emerald-600/20 dark:bg-emerald-700/80 text-emerald-800 dark:text-emerald-200 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/30">BD</span>
              </div>
              <p :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-[10px] font-medium tracking-wide uppercase">
                {{ currentLang === 'en' ? 'Road Marking & Safety Construction' : 'রোড মার্কিং ও হাইওয়ে সেফটি কনস্ট্রাকশন' }}
              </p>
            </div>
          </a>

          <!-- Desktop Menu -->
          <div :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="hidden xl:flex items-center gap-7 text-sm font-semibold">
            <a href="#about" class="hover:text-amber-500 transition">{{ navT.about }}</a>
            <a href="#services" class="hover:text-amber-500 transition">{{ navT.services }}</a>
            <a href="#calculator" :class="isDark ? 'text-amber-300' : 'text-amber-600'" class="hover:text-amber-500 transition flex items-center gap-1.5 font-bold">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              {{ navT.calculator }}
            </a>
            <a href="#projects" class="hover:text-amber-500 transition">{{ navT.projects }}</a>
            <a href="#machinery" class="hover:text-amber-500 transition">{{ navT.machinery }}</a>
            <a href="#standards" class="hover:text-amber-500 transition">{{ navT.standards }}</a>
            <a href="#credentials" class="hover:text-amber-500 transition">{{ navT.credentials }}</a>
            <a href="#contact" class="hover:text-amber-500 transition">{{ navT.contact }}</a>
          </div>

          <!-- Action CTAs & Single Theme Toggle -->
          <div class="hidden sm:flex items-center gap-3">
            <a 
              href="#credentials"
              :class="isDark ? 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'"
              class="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border transition"
            >
              <FileText class="w-3.5 h-3.5 text-amber-500" />
              <span>{{ currentLang === 'en' ? 'Tender Profile' : 'টেন্ডার প্রোফাইল' }}</span>
            </a>

            <!-- The ONLY Theme Toggle Button: High-visibility Interactive Switch -->
            <button 
              @click="toggleTheme"
              type="button"
              class="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer shadow-sm border"
              :class="isDark 
                ? 'bg-slate-800 border-amber-400/50 text-amber-300 hover:bg-slate-700' 
                : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'"
              :title="isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'"
              aria-label="Toggle theme"
            >
              <span 
                class="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300"
                :class="isDark ? 'bg-amber-400 text-slate-950' : 'bg-white text-slate-800 shadow-sm'"
              >
                <Sun v-if="isDark" class="w-3.5 h-3.5" />
                <Moon v-else class="w-3.5 h-3.5" />
              </span>
              <span class="text-[11px] font-extrabold uppercase tracking-wide">
                {{ isDark ? 'Dark Mode' : 'Light Mode' }}
              </span>
            </button>

            <a 
              href="#contact"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs md:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/25 transition duration-300 transform active:scale-95"
            >
              <span>{{ currentLang === 'en' ? 'Request Quotation' : 'কোটেশন চাই' }}</span>
              <ArrowRight class="w-4 h-4" />
            </a>
          </div>

          <!-- Mobile Menu & Theme Button -->
          <div class="flex items-center gap-2 xl:hidden">
            <button 
              @click="toggleTheme" 
              type="button"
              :class="isDark ? 'bg-slate-800 text-amber-300 border-slate-700' : 'bg-slate-100 text-slate-800 border-slate-300'"
              class="p-2 rounded-lg border transition cursor-pointer"
              aria-label="Toggle Theme"
            >
              <Sun v-if="isDark" class="w-5 h-5" />
              <Moon v-else class="w-5 h-5" />
            </button>
            <button 
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              :class="isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-300'"
              class="p-2 rounded-lg border"
              aria-label="Toggle Navigation Menu"
            >
              <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
              <X v-else class="w-6 h-6" />
            </button>
          </div>
        </nav>

        <!-- Mobile Dropdown Menu -->
        <div v-if="isMobileMenuOpen" :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'" class="xl:hidden border-b px-5 py-4 space-y-3">
          <a @click="isMobileMenuOpen = false" href="#about" :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block py-1 hover:text-amber-500">{{ navT.about }}</a>
          <a @click="isMobileMenuOpen = false" href="#services" :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block py-1 hover:text-amber-500">{{ navT.services }}</a>
          <a @click="isMobileMenuOpen = false" href="#calculator" :class="isDark ? 'text-amber-300' : 'text-amber-600'" class="block py-1 font-bold">{{ navT.calculator }}</a>
          <a @click="isMobileMenuOpen = false" href="#projects" :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block py-1 hover:text-amber-500">{{ navT.projects }}</a>
          <a @click="isMobileMenuOpen = false" href="#machinery" :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block py-1 hover:text-amber-500">{{ navT.machinery }}</a>
          <a @click="isMobileMenuOpen = false" href="#standards" :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block py-1 hover:text-amber-500">{{ navT.standards }}</a>
          <a @click="isMobileMenuOpen = false" href="#credentials" :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block py-1 hover:text-amber-500">{{ navT.credentials }}</a>
          <a @click="isMobileMenuOpen = false" href="#contact" :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block py-1 hover:text-amber-500">{{ navT.contact }}</a>
          <div :class="isDark ? 'border-slate-800' : 'border-slate-200'" class="pt-2 border-t flex flex-col gap-2">
            <a @click="isMobileMenuOpen = false" href="#contact" class="w-full text-center py-2.5 rounded-lg text-sm font-bold text-slate-950 bg-amber-400">
              {{ currentLang === 'en' ? 'Get Instant Quote' : 'তাত্ক্ষণিক কোটেশন পান' }}
            </a>
          </div>
        </div>
      </header>

      <!-- Hero Section with Industrial Road Graphic & Real Projects Preview -->
      <section 
        id="about" 
        :class="isDark 
          ? 'bg-gradient-to-b from-[#0B1528] via-[#070D18] to-[#070D18] border-slate-800' 
          : 'bg-gradient-to-b from-slate-100 via-white to-slate-50 border-slate-200'" 
        class="relative pt-12 pb-20 md:py-24 overflow-hidden border-b transition-colors duration-300"
      >
        <!-- Background Grid & Glowing Lines -->
        <div class="absolute inset-0 bg-grid-pattern opacity-15 dark:opacity-30 pointer-events-none"></div>
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-amber-400/15 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 right-0 h-1 safety-stripe-bar"></div>

        <div class="container mx-auto px-4 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <!-- Left Column: Copy & Authority -->
            <div class="lg:col-span-7 space-y-6">
              <div 
                :class="isDark ? 'bg-slate-900 border-amber-500/30 text-amber-400' : 'bg-white border-amber-500/40 text-amber-700 shadow-sm'" 
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide"
              >
                <HardHat class="w-4 h-4 text-amber-500" />
                <span>{{ currentLang === 'en' ? 'GOVERNMENT & COMMERCIAL ROAD CONTRACTOR IN BANGLADESH' : 'বাংলাদেশ সরকারের বিশ্বস্ত রোড মার্কিং ও সাইনেজ ঠিকাদার' }}</span>
              </div>

              <h1 :class="isDark ? 'text-white' : 'text-slate-950'" class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] font-display">
                <span class="block">{{ currentLang === 'en' ? 'Precision Highway' : 'উচ্চমানের থার্মোপ্লাস্টিক' }}</span>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-500">
                  {{ currentLang === 'en' ? 'Thermoplastic Road Marking' : 'সড়ক মার্কিং ও লেন স্ট্রাইপিং' }}
                </span>
                <span :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-bold">
                  {{ currentLang === 'en' ? 'Engineered for RHD, LGED & Mega Infrastructure' : 'আরএইচডি, এলজিইডি ও মেগা অবকাঠামো প্রকল্পের জন্য' }}
                </span>
              </h1>

              <p :class="isDark ? 'text-slate-300' : 'text-slate-600'" class="text-base sm:text-lg leading-relaxed max-w-2xl">
                {{ currentLang === 'en' 
                  ? 'Apex Marking Ltd. is Bangladesh’s leading automated thermoplastic screed & spray marking contractor. Certified AASHTO M249 and BS 6088 retro-reflective glass bead integration engineered to withstand heavy monsoons, high traffic density, and rigorous government tender compliance.'
                  : 'এপেক্স মার্কিং লিমিটেড আধুনিক হাইড্রো-মেকানাইজড মেশিনারি দিয়ে বাংলাদেশের জাতীয় মহাসড়ক, সেতু সংযোগ সড়ক, ইপিজেড, বিমানবন্দর ও শিল্প কারখানার মেঝেতে টেকসই রোড মার্কিং সেবা প্রদান করে।' }}
              </p>

              <!-- Key Metric Counters -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-2">
                <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="border p-3.5 rounded-xl">
                  <div class="text-2xl lg:text-3xl font-extrabold text-amber-500 font-display">2,150+</div>
                  <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs font-medium mt-0.5">{{ currentLang === 'en' ? 'Lane KM Marked' : 'কিমি লেন মার্কিং' }}</div>
                </div>
                <div :class="isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'" class="border p-3.5 rounded-xl">
                  <div class="text-2xl lg:text-3xl font-extrabold font-display">160+</div>
                  <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs font-medium mt-0.5">{{ currentLang === 'en' ? 'Completed Tenders' : 'সম্পন্ন সরকারি প্রকল্প' }}</div>
                </div>
                <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="border p-3.5 rounded-xl">
                  <div class="text-2xl lg:text-3xl font-extrabold text-amber-500 font-display">99.8%</div>
                  <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs font-medium mt-0.5">{{ currentLang === 'en' ? 'AASHTO Pass Rate' : 'মান নিয়ন্ত্রণ পাসের হার' }}</div>
                </div>
                <div :class="isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'" class="border p-3.5 rounded-xl">
                  <div class="text-2xl lg:text-3xl font-extrabold font-display">24/7</div>
                  <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs font-medium mt-0.5">{{ currentLang === 'en' ? 'Night Crews Available' : 'রাতের জরুরি টিম' }}</div>
                </div>
              </div>

              <!-- Call to Actions -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="#contact" 
                  class="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 flex items-center gap-2 transform transition hover:-translate-y-0.5"
                >
                  <span>{{ currentLang === 'en' ? 'Request Project Quotation' : 'কোটেশনের জন্য আবেদন করুন' }}</span>
                  <ArrowRight class="w-4 h-4" />
                </a>

                <a 
                  href="#calculator" 
                  :class="isDark ? 'bg-slate-800/90 hover:bg-slate-700 text-white border-slate-700' : 'bg-slate-200 hover:bg-slate-300 text-slate-800 border-slate-300'"
                  class="px-6 py-3.5 rounded-xl text-sm font-bold border flex items-center gap-2 transition"
                >
                  <Calculator class="w-4 h-4 text-amber-500" />
                  <span>{{ currentLang === 'en' ? 'Estimate Cost in BDT (৳)' : 'খরচ হিসাব করুন (৳)' }}</span>
                </a>

                <button 
                  @click="openTenderModal = true"
                  :class="isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-950'"
                  class="px-4 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Download class="w-4 h-4 text-slate-500" />
                  <span>{{ currentLang === 'en' ? 'Download Tender Profile' : 'টেন্ডার প্রোফাইল ডাউনলোড' }}</span>
                </button>
              </div>

              <!-- Verified Partner / Agency Enlistment Badges -->
              <div :class="isDark ? 'border-slate-800/80' : 'border-slate-200'" class="pt-4 border-t">
                <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs font-semibold uppercase tracking-wider mb-2.5">
                  {{ currentLang === 'en' ? 'Authorized Execution Standards Compliant With:' : 'অনুমোদিত মানদণ্ড ও সম্পৃক্ত কর্তৃপক্ষ:' }}
                </div>
                <div :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold">
                  <span :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="px-3 py-1.5 rounded-md border flex items-center gap-1.5">
                    <ShieldCheck class="w-4 h-4 text-emerald-500" />
                    RHD (Roads & Highways Dept)
                  </span>
                  <span :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="px-3 py-1.5 rounded-md border flex items-center gap-1.5">
                    <ShieldCheck class="w-4 h-4 text-emerald-500" />
                    LGED Bangladesh
                  </span>
                  <span :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="px-3 py-1.5 rounded-md border flex items-center gap-1.5">
                    <ShieldCheck class="w-4 h-4 text-emerald-500" />
                    DNCC & DSCC City Corp
                  </span>
                  <span :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="px-3 py-1.5 rounded-md border flex items-center gap-1.5">
                    <ShieldCheck class="w-4 h-4 text-emerald-500" />
                    CAAB (Civil Aviation)
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Column: Visual Showcase Card -->
            <div class="lg:col-span-5">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div :class="isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'" class="relative rounded-2xl overflow-hidden border shadow-2xl">
                  <!-- Image Header Tag -->
                  <div class="relative h-64 sm:h-72 w-full overflow-hidden">
                    <img 
                      src="/images/highway-marking.jpg" 
                      alt="Dhaka Chattogram Highway Thermoplastic Road Marking"
                      class="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div class="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-400/30 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Dhaka-Chattogram 4-Lane N1 Highway
                    </div>
                    <div class="absolute bottom-3 left-4 right-4">
                      <span class="text-xs uppercase font-extrabold text-amber-400 tracking-wider">FEATURED EXECUTION</span>
                      <h3 class="text-lg font-bold text-white">Continuous Dual Yellow & Retro-Reflective White Ribbon</h3>
                    </div>
                  </div>

                  <!-- Specs Grid -->
                  <div :class="isDark ? 'bg-slate-900' : 'bg-white'" class="p-5 space-y-4">
                    <div class="grid grid-cols-2 gap-3 text-xs">
                      <div :class="isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'" class="p-2.5 rounded-lg border">
                        <span :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="block">{{ currentLang === 'en' ? 'Marking Material' : 'ব্যবহৃত উপাদান' }}</span>
                        <span :class="isDark ? 'text-white' : 'text-slate-900'" class="font-bold">Hot-Melt Thermoplastic (2.5mm)</span>
                      </div>
                      <div :class="isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'" class="p-2.5 rounded-lg border">
                        <span :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="block">{{ currentLang === 'en' ? 'Bead Standard' : 'গ্লাস বিডস মান' }}</span>
                        <span class="font-bold text-amber-500">BS 6088 Class A & B</span>
                      </div>
                      <div :class="isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'" class="p-2.5 rounded-lg border">
                        <span :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="block">{{ currentLang === 'en' ? 'Retro-Reflectivity' : 'লুমিন্যান্স প্রতিফলন' }}</span>
                        <span class="font-bold text-emerald-500">> 350 mcd/m²/lx</span>
                      </div>
                      <div :class="isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'" class="p-2.5 rounded-lg border">
                        <span :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="block">{{ currentLang === 'en' ? 'Drying Time' : 'শুকানোর সময়' }}</span>
                        <span :class="isDark ? 'text-white' : 'text-slate-900'" class="font-bold">&lt; 3 Minutes</span>
                      </div>
                    </div>

                    <!-- Quick Quotation Direct Trigger -->
                    <div :class="isDark ? 'border-slate-800' : 'border-slate-200'" class="flex items-center justify-between pt-2 border-t">
                      <span :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs flex items-center gap-1.5">
                        <Clock class="w-3.5 h-3.5 text-amber-500" />
                        {{ currentLang === 'en' ? 'Emergency Night Shifts Available' : 'জরুরি রাতের শিফট সুবিধা' }}
                      </span>
                      <a href="#calculator" class="text-xs font-bold text-amber-500 hover:text-amber-400 flex items-center gap-1">
                        {{ currentLang === 'en' ? 'Calculate Rate' : 'রেট ক্যালকুলেটর' }}
                        <ChevronRight class="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Official Credentials & Bangladesh Enlistment Banner -->
      <section 
        id="credentials" 
        :class="isDark ? 'bg-[#0B1528] border-slate-800' : 'bg-slate-100 border-slate-200'" 
        class="py-12 border-b transition-colors duration-300"
      >
        <div class="container mx-auto px-4">
          <div class="text-center max-w-2xl mx-auto mb-8">
            <span class="text-amber-500 text-xs font-bold tracking-widest uppercase">{{ currentLang === 'en' ? 'LEGAL & INSTITUTIONAL CREDIBILITY' : 'প্রাতিষ্ঠানিক ও আইনি তথ্যাদি' }}</span>
            <h2 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-2xl md:text-3xl font-extrabold font-display mt-1">
              {{ currentLang === 'en' ? 'Verified Government Contractor Credentials' : 'যাচাইকৃত ঠিকাদারি লাইসেন্স ও সরকারি সনদপত্র' }}
            </h2>
            <p :class="isDark ? 'text-slate-400' : 'text-slate-600'" class="text-xs sm:text-sm mt-2">
              {{ currentLang === 'en' 
                ? 'Required information for government tenders, e-GP submissions, and mega engineering partnerships.'
                : 'সরকারি টেন্ডার, ই-জিপি সাবমিশন এবং প্রাতিষ্ঠানিক চুক্তির জন্য প্রয়োজনীয় সকল ডকুমেন্টস।' }}
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="border hover:border-amber-400 p-4 rounded-xl transition">
              <div class="flex items-center justify-between mb-2">
                <span :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs font-bold">TRADE LICENSE</span>
                <Award class="w-5 h-5 text-amber-500" />
              </div>
              <div :class="isDark ? 'text-white' : 'text-slate-900'" class="text-base font-extrabold">TRAD/DNCC/049182/2022</div>
              <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs mt-1">Dhaka North City Corporation • Category: Civil Works</div>
            </div>

            <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="border hover:border-amber-400 p-4 rounded-xl transition">
              <div class="flex items-center justify-between mb-2">
                <span :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs font-bold">TIN & TAX STATUS</span>
                <ShieldCheck class="w-5 h-5 text-emerald-500" />
              </div>
              <div :class="isDark ? 'text-white' : 'text-slate-900'" class="text-base font-extrabold">TIN: 8192-3482-9011</div>
              <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs mt-1">Tax Zone 08, Dhaka • Tax Return Current (FY 2024-2025)</div>
            </div>

            <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="border hover:border-amber-400 p-4 rounded-xl transition">
              <div class="flex items-center justify-between mb-2">
                <span :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs font-bold">VAT / BIN REGISTRATION</span>
                <CheckCircle2 class="w-5 h-5 text-amber-500" />
              </div>
              <div :class="isDark ? 'text-white' : 'text-slate-900'" class="text-base font-extrabold">BIN: 004183920-0102</div>
              <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs mt-1">Customs & VAT Commissionerate, Dhaka Central</div>
            </div>

            <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="border hover:border-amber-400 p-4 rounded-xl transition">
              <div class="flex items-center justify-between mb-2">
                <span :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs font-bold">e-GP & ISO RATING</span>
                <CheckCircle2 class="w-5 h-5 text-emerald-500" />
              </div>
              <div :class="isDark ? 'text-white' : 'text-slate-900'" class="text-base font-extrabold">e-GP ID: 948102 (Active)</div>
              <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs mt-1">ISO 9001:2015 Quality & OHSAS 18001 Safety Certified</div>
            </div>
          </div>

          <!-- Download Action -->
          <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="mt-6 flex flex-wrap items-center justify-between border p-4 rounded-xl gap-4">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-lg bg-amber-400/20 text-amber-500">
                <FileText class="w-6 h-6" />
              </div>
              <div>
                <div :class="isDark ? 'text-white' : 'text-slate-900'" class="text-sm font-bold">{{ currentLang === 'en' ? 'Apex Road Marking Tender Profile Pack (PDF, 8.4 MB)' : 'এপেক্স রোড মার্কিং অফিসিয়াল টেন্ডার প্রোফাইল প্যাক' }}</div>
                <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs">{{ currentLang === 'en' ? 'Includes Machineries List, Lab Test Reports, Past Work Orders, & Bank Solvency.' : 'মেশিনারি তালিকা, টেস্ট রিপোর্ট, সম্পন্ন কাজের ওয়ার্ক অর্ডার ও সলভেন্সি সংযুক্ত।' }}</div>
              </div>
            </div>
            <button 
              @click="downloadSampleProfile"
              class="px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 flex items-center gap-2 transition cursor-pointer"
            >
              <Download class="w-4 h-4" />
              <span>{{ isDownloading ? (currentLang === 'en' ? 'Generating PDF...' : 'ডাউনলোড হচ্ছে...') : (currentLang === 'en' ? 'Download Tender Dossier' : 'টেন্ডার প্রোফাইল ডাউনলোড করুন') }}</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section 
        id="services" 
        :class="isDark ? 'bg-[#070D18]' : 'bg-slate-50'" 
        class="py-20 transition-colors duration-300"
      >
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <div :class="isDark ? 'bg-slate-900 border-amber-500/30 text-amber-400' : 'bg-white border-amber-500/40 text-amber-700 shadow-sm'" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold tracking-wider uppercase mb-3">
              <Wrench class="w-3.5 h-3.5" />
              <span>{{ currentLang === 'en' ? 'COMPREHENSIVE MARKING CAPABILITIES' : 'আমাদের সেবাসমূহ' }}</span>
            </div>
            <h2 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-3xl md:text-4xl font-extrabold font-display">
              {{ currentLang === 'en' ? 'Specialized Road & Industrial Floor Marking Services' : 'উন্নতমানের সড়ক ও শিল্প কারখানার মার্কিং সল্যুশন' }}
            </h2>
            <p :class="isDark ? 'text-slate-400' : 'text-slate-600'" class="text-sm md:text-base mt-3">
              {{ currentLang === 'en' 
                ? 'Conforming strictly to Bangladesh Roads & Highways Department (RHD) Standard Specifications, British Standards (BS EN 1871), and AASHTO M249.'
                : 'সড়ক ও জনপথ অধিদপ্তর (সওজ) এর স্ট্যান্ডার্ড এবং আন্তর্জাতিক বিএস ও আসটো মানদণ্ড মেনে সম্পন্ন করা হয়।' }}
            </p>
          </div>

          <!-- Services Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="(service, idx) in servicesList" 
              :key="idx"
              :class="isDark 
                ? 'bg-slate-900/80 border-slate-800 text-slate-100 hover:border-amber-400/60' 
                : 'bg-white border-slate-200 text-slate-900 shadow-md hover:shadow-xl hover:border-amber-500/60'"
              class="rounded-2xl p-6 relative group overflow-hidden flex flex-col justify-between border transition duration-300"
            >
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-500 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition duration-300">
                    <component :is="service.icon" class="w-6 h-6" />
                  </div>
                  <span :class="isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'" class="text-xs font-bold px-2.5 py-1 rounded-full border">
                    {{ service.badge }}
                  </span>
                </div>

                <h3 :class="isDark ? 'text-white group-hover:text-amber-400' : 'text-slate-900 group-hover:text-amber-600'" class="text-xl font-bold transition">
                  {{ currentLang === 'en' ? service.titleEn : service.titleBn }}
                </h3>

                <p :class="isDark ? 'text-slate-300' : 'text-slate-600'" class="text-xs sm:text-sm leading-relaxed">
                  {{ currentLang === 'en' ? service.descEn : service.descBn }}
                </p>

                <!-- Technical Specifications Bullet Points -->
                <div :class="isDark ? 'border-slate-800' : 'border-slate-200'" class="space-y-2 pt-2 border-t text-xs">
                  <div v-for="(spec, sIdx) in service.specs" :key="sIdx" :class="isDark ? 'text-slate-400' : 'text-slate-600'" class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>{{ spec }}</span>
                  </div>
                </div>
              </div>

              <!-- Card Bottom Button -->
              <div :class="isDark ? 'border-slate-800' : 'border-slate-200'" class="pt-6 mt-4 flex items-center justify-between border-t">
                <span class="text-xs font-semibold text-amber-500">
                  {{ currentLang === 'en' ? 'Standard: ' + service.standard : 'মানদণ্ড: ' + service.standard }}
                </span>
                <a 
                  href="#calculator" 
                  @click="selectCalculatorService(service.id)"
                  :class="isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-amber-600'"
                  class="text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition"
                >
                  <span>{{ currentLang === 'en' ? 'Get Rates' : 'দর যাচাই' }}</span>
                  <ChevronRight class="w-4 h-4 text-amber-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Cost Estimator in BDT (৳) -->
      <section 
        id="calculator" 
        :class="isDark 
          ? 'bg-gradient-to-b from-[#0B1528] to-[#070D18] border-slate-800' 
          : 'bg-gradient-to-b from-slate-100 to-slate-50 border-slate-200'" 
        class="py-20 border-y transition-colors duration-300"
      >
        <div class="container mx-auto px-4">
          <div :class="isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-xl'" class="max-w-4xl mx-auto border rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div class="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div :class="isDark ? 'border-slate-800' : 'border-slate-200'" class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b">
              <div>
                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-500 text-xs font-bold uppercase mb-2">
                  <Calculator class="w-3.5 h-3.5" />
                  <span>{{ currentLang === 'en' ? 'TRANSPARENT BANGLADESH PRICING' : 'সরাসরি খরচের হিসাব (টাকা)' }}</span>
                </div>
                <h2 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-2xl sm:text-3xl font-extrabold font-display">
                  {{ currentLang === 'en' ? 'Instant Project Rate & Cost Estimator' : 'রোড মার্কিং প্রজেক্ট খরচ ক্যালকুলেটর' }}
                </h2>
                <p :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs sm:text-sm mt-1">
                  {{ currentLang === 'en' 
                    ? 'Calculate approximate quotation for highway lane ribbons, warehouse epoxies, or commercial parking.' 
                    : 'আপনার প্রজেক্টের দৈর্ঘ্য, গ্লাস বিডস কোয়ালিটি ও লোকেশন অনুযায়ী আনুমানিক খরচ নির্ধারণ করুন।' }}
                </p>
              </div>
              <div :class="isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'" class="flex items-center gap-2 px-4 py-2 rounded-xl border text-right">
                <div>
                  <span :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-[10px] block">{{ currentLang === 'en' ? 'Currency Unit' : 'মুদ্রা' }}</span>
                  <span class="text-base font-extrabold text-amber-500">BDT (টাকা / ৳)</span>
                </div>
              </div>
            </div>

            <!-- Estimator Inputs Form -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- 1. Service Selection -->
              <div>
                <label :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block text-xs font-bold uppercase tracking-wider mb-2">
                  {{ currentLang === 'en' ? '1. Select Road / Marking Type' : '১. মার্কিং সেবার ধরন নির্বাচন করুন' }}
                </label>
                <select 
                  v-model="calcForm.serviceType"
                  :class="isDark ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
                  class="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition"
                >
                  <option value="thermoplastic_highway">Highway Thermoplastic Marking (AASHTO M249, 2.5mm)</option>
                  <option value="traffic_pedestrian">Urban Pedestrian Zebra & Stop Lines (High Friction)</option>
                  <option value="industrial_epoxy">Industrial Warehouse Epoxy Floor Line (5S Standard)</option>
                  <option value="reflective_glass">High-Index Retro-Reflective Glass Bead Application</option>
                  <option value="parking_lot">Commercial Parking Bay & Numbering Striping</option>
                  <option value="remarking_removal">Hydro-Blasting Erasure & Remarking</option>
                </select>
              </div>

              <!-- 2. Project Location in Bangladesh -->
              <div>
                <label :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block text-xs font-bold uppercase tracking-wider mb-2">
                  {{ currentLang === 'en' ? '2. Project Location / Region' : '২. প্রজেক্টের এলাকা বা জেলা' }}
                </label>
                <select 
                  v-model="calcForm.location"
                  :class="isDark ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
                  class="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition"
                >
                  <option value="dhaka">Dhaka Division (Gazipur, Narayanganj, Savar)</option>
                  <option value="chattogram">Chattogram & Cox's Bazar / Port Area</option>
                  <option value="sylhet">Sylhet & Moulvibazar Highway</option>
                  <option value="khulna">Khulna, Jashore & Mongla Port</option>
                  <option value="rajshahi">Rajshahi & Bogura Highway Link</option>
                  <option value="padma">Padma Bridge / Bangabandhu Expressway Corridor</option>
                </select>
              </div>

              <!-- 3. Quantity / Length Slider -->
              <div :class="isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'" class="md:col-span-2 space-y-2 p-5 rounded-2xl border">
                <div class="flex justify-between items-center text-sm font-semibold">
                  <span :class="isDark ? 'text-slate-300' : 'text-slate-700'">
                    {{ currentLang === 'en' ? '3. Project Scope Length / Surface Area' : '৩. মোট পরিমাপ (মিটার বা বর্গমিটার)' }}
                  </span>
                  <span class="text-amber-500 font-extrabold text-lg">
                    {{ calcForm.length.toLocaleString() }} {{ calcForm.unit === 'meters' ? (currentLang === 'en' ? 'Running Meters' : 'রানিং মিটার') : (currentLang === 'en' ? 'Sq. Meters' : 'বর্গমিটার') }}
                    <span :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs font-normal">({{ (calcForm.length / 1000).toFixed(2) }} Lane KM)</span>
                  </span>
                </div>
                <input 
                  type="range" 
                  v-model.number="calcForm.length" 
                  min="200" 
                  max="25000" 
                  step="100"
                  class="w-full h-2 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  :class="isDark ? 'bg-slate-800' : 'bg-slate-300'"
                />
                <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="flex justify-between text-[11px]">
                  <span>200 Meters (Basic Site)</span>
                  <span>5,000 M (5 KM Stretch)</span>
                  <span>15,000 M (Highway Tender)</span>
                  <span>25,000 M (Mega Highway)</span>
                </div>
              </div>

              <!-- 4. Quality Standard & Glass Bead Addition -->
              <div>
                <label :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block text-xs font-bold uppercase tracking-wider mb-2">
                  {{ currentLang === 'en' ? '4. Reflective Glass Bead Grade' : '৪. গ্লাস বিডস প্রতিফলন গ্রেড' }}
                </label>
                <select 
                  v-model="calcForm.glassBeadGrade"
                  :class="isDark ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
                  class="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition"
                >
                  <option value="standard">Class A Standard Reflective (RHD Local Road Standard)</option>
                  <option value="premium">Class B Premium Micro Glass Beads (Highway & Expressway)</option>
                  <option value="none">Standard Non-Reflective (Indoor Warehouse)</option>
                </select>
              </div>

              <!-- 5. Work Timing Option -->
              <div>
                <label :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block text-xs font-bold uppercase tracking-wider mb-2">
                  {{ currentLang === 'en' ? '5. Execution Shift Requirement' : '৫. কাজের শিফট পছন্দ' }}
                </label>
                <select 
                  v-model="calcForm.shift"
                  :class="isDark ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
                  class="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition"
                >
                  <option value="night">Night Shift Only (Zero Highway Disruption, 10 PM - 5 AM)</option>
                  <option value="day">Day Shift (Industrial / Traffic Diverted)</option>
                  <option value="round_the_clock">24/7 Rapid Completion (Emergency Tender Deadlines)</option>
                </select>
              </div>
            </div>

            <!-- Real-Time Calculation Output Box -->
            <div 
              :class="isDark 
                ? 'bg-gradient-to-br from-amber-400/15 via-slate-950 to-slate-950 border-amber-400/30' 
                : 'bg-gradient-to-br from-amber-400/20 via-slate-100 to-white border-amber-500/30'" 
              class="mt-8 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div>
                <span class="text-xs font-bold text-amber-500 tracking-wider uppercase block">
                  {{ currentLang === 'en' ? 'ESTIMATED INVESTMENT RANGE' : 'আনুমানিক প্রাক্কলিত বাজেট' }}
                </span>
                <div :class="isDark ? 'text-white' : 'text-slate-900'" class="text-3xl sm:text-4xl font-black font-display mt-1">
                  ৳ {{ estimatedCostRange.min.toLocaleString() }} — ৳ {{ estimatedCostRange.max.toLocaleString() }}
                </div>
                <p :class="isDark ? 'text-slate-400' : 'text-slate-600'" class="text-xs mt-1">
                  {{ currentLang === 'en' 
                    ? 'Includes material (AASHTO thermoplastic), primer coating, automated machine mobilization, & labor.' 
                    : 'থার্মোপ্লাস্টিক উপাদান, প্রাইমার কোট, মেশিন মোবিলাইজেশন এবং টেকনিক্যাল লেবার সহ।' }}
                </p>
              </div>

              <div class="flex items-center gap-3 w-full sm:w-auto">
                <a 
                  href="#contact"
                  @click="prefillEstimateDetails"
                  class="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-500/25 transition flex items-center justify-center gap-2"
                >
                  <span>{{ currentLang === 'en' ? 'Lock Official Quote' : 'অফিসিয়াল কোটেশন নিন' }}</span>
                  <ArrowRight class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects / Portfolio Section -->
      <section 
        id="projects" 
        :class="isDark ? 'bg-[#070D18]' : 'bg-white'" 
        class="py-20 transition-colors duration-300"
      >
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div :class="isDark ? 'bg-slate-900 border-amber-500/30 text-amber-400' : 'bg-slate-100 border-amber-500/40 text-amber-700'" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold tracking-wider uppercase mb-2">
                <Briefcase class="w-3.5 h-3.5" />
                <span>{{ currentLang === 'en' ? 'PROVEN TRACK RECORD' : 'আমাদের প্রকল্পসমূহ' }}</span>
              </div>
              <h2 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-3xl md:text-4xl font-extrabold font-display">
                {{ currentLang === 'en' ? 'Completed Road Marking Projects Across Bangladesh' : 'বাংলাদেশে সম্পন্নকৃত প্রধান সড়ক ও অবকাঠামো প্রকল্প' }}
              </h2>
            </div>

            <!-- Project Filter Buttons -->
            <div class="flex flex-wrap gap-2 text-xs font-semibold">
              <button 
                v-for="cat in projectCategories" 
                :key="cat.id"
                @click="activeCategory = cat.id"
                :class="activeCategory === cat.id 
                  ? 'bg-amber-400 text-slate-950 font-bold' 
                  : (isDark ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border-slate-800' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300')"
                class="px-4 py-2 rounded-xl border transition cursor-pointer"
              >
                {{ currentLang === 'en' ? cat.nameEn : cat.nameBn }}
              </button>
            </div>
          </div>

          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="(project, idx) in filteredProjects" 
              :key="idx"
              :class="isDark ? 'bg-slate-900 border-slate-800 hover:border-amber-400/50' : 'bg-slate-50 border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-lg'"
              class="rounded-2xl overflow-hidden border transition duration-300 flex flex-col group"
            >
              <!-- Card Image -->
              <div class="relative h-52 overflow-hidden">
                <img 
                  :src="project.image" 
                  :alt="project.titleEn"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div class="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-amber-300 border border-slate-700">
                  {{ project.tag }}
                </div>
                <div class="absolute top-3 right-3 bg-emerald-600/90 text-white text-[10px] font-extrabold px-2 py-0.5 rounded">
                  COMPLETED
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div class="text-xs font-semibold text-amber-500 flex items-center gap-1.5 mb-1.5">
                    <MapPin class="w-3.5 h-3.5" />
                    <span>{{ project.location }}</span>
                  </div>
                  <h3 :class="isDark ? 'text-white group-hover:text-amber-300' : 'text-slate-900 group-hover:text-amber-600'" class="text-lg font-bold transition">
                    {{ currentLang === 'en' ? project.titleEn : project.titleBn }}
                  </h3>
                  <p :class="isDark ? 'text-slate-400' : 'text-slate-600'" class="text-xs mt-2 line-clamp-3">
                    {{ currentLang === 'en' ? project.descEn : project.descBn }}
                  </p>
                </div>

                <div :class="isDark ? 'border-slate-800' : 'border-slate-200'" class="space-y-2 pt-3 border-t text-xs">
                  <div class="flex justify-between">
                    <span :class="isDark ? 'text-slate-400' : 'text-slate-500'">{{ currentLang === 'en' ? 'Client / Authority:' : 'ক্লায়েন্ট:' }}</span>
                    <span :class="isDark ? 'text-slate-200' : 'text-slate-800'" class="font-bold">{{ project.client }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span :class="isDark ? 'text-slate-400' : 'text-slate-500'">{{ currentLang === 'en' ? 'Scope Completed:' : 'কাজের পরিধি:' }}</span>
                    <span class="font-bold text-amber-500">{{ project.scope }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span :class="isDark ? 'text-slate-400' : 'text-slate-500'">{{ currentLang === 'en' ? 'Standard Standard:' : 'মান নির্ধারণ:' }}</span>
                    <span :class="isDark ? 'text-slate-200' : 'text-slate-800'" class="font-bold">{{ project.standard }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Machinery & Equipment Fleet Section -->
      <section 
        id="machinery" 
        :class="isDark ? 'bg-[#0B1528] border-slate-800' : 'bg-slate-100 border-slate-200'" 
        class="py-20 border-t transition-colors duration-300"
      >
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-5 space-y-6">
              <div :class="isDark ? 'bg-slate-900 border-amber-500/30 text-amber-400' : 'bg-white border-amber-500/40 text-amber-700 shadow-sm'" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase">
                <Truck class="w-3.5 h-3.5" />
                <span>{{ currentLang === 'en' ? 'EQUIPMENT & TECHNICAL CAPABILITY' : 'মেশিনারি ও কারিগরি সক্ষমতা' }}</span>
              </div>

              <h2 :class="isDark ? 'text-white' : 'text-slate-950'" class="text-3xl md:text-4xl font-extrabold font-display">
                {{ currentLang === 'en' ? 'Modern Fleet of Road Marking Machinery' : 'আধুনিক হাইড্রো-মেকানাইজড ইকুইপমেন্টের বিশাল বহর' }}
              </h2>

              <p :class="isDark ? 'text-slate-300' : 'text-slate-600'" class="text-sm md:text-base leading-relaxed">
                {{ currentLang === 'en' 
                  ? 'We do not rely on sub-contracted or manual labor. Our company owns and operates full automated screed lines, high-pressure pre-heaters, and laser-guided paint strippers stationed in Dhaka and Chattogram.'
                  : 'আমরা নিজস্ব আধুনিক মেশিনারিজ দিয়ে কাজ করি। আমাদের বহরে রয়েছে অটোমেটিক থার্মোপ্লাস্টিক অ্যাপ্লিকেটর, ৪৫০ লিটার মেল্টিং বয়লার এবং লেজার গাইডেড পেইন্ট স্ট্রাইপার।' }}
              </p>

              <div class="space-y-3">
                <div 
                  v-for="(machine, mIdx) in machineryList" 
                  :key="mIdx" 
                  :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" 
                  class="border p-3.5 rounded-xl flex items-start gap-3"
                >
                  <div class="w-9 h-9 rounded-lg bg-amber-400/20 text-amber-500 flex items-center justify-center shrink-0 font-bold text-sm">
                    0{{ mIdx + 1 }}
                  </div>
                  <div>
                    <h4 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-sm font-bold">{{ currentLang === 'en' ? machine.nameEn : machine.nameBn }}</h4>
                    <p :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs mt-0.5">{{ currentLang === 'en' ? machine.specEn : machine.specBn }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-7">
              <div :class="isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-300'" class="relative rounded-3xl overflow-hidden border shadow-2xl">
                <img 
                  src="/images/marking-machine.jpg" 
                  alt="Automated Road Marking Machine In Bangladesh"
                  class="w-full h-[440px] object-cover" 
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                <div class="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <span class="text-xs font-extrabold text-amber-400 uppercase tracking-wider">FLAGSHIP MACHINE</span>
                      <h3 class="text-base sm:text-lg font-bold text-white">Hofmann H18-1 Screed & Extrusion Line Striper</h3>
                    </div>
                    <div class="text-right">
                      <span class="text-xs text-slate-400 block">Maximum Daily Output</span>
                      <span class="text-sm font-extrabold text-emerald-400">18,000 Lane Meters / Shift</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quality Standards & Weather Durability Section -->
      <section 
        id="standards" 
        :class="isDark ? 'bg-[#070D18]' : 'bg-slate-50'" 
        class="py-20 transition-colors duration-300"
      >
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <div :class="isDark ? 'bg-slate-900 border-amber-500/30 text-amber-400' : 'bg-white border-amber-500/40 text-amber-700 shadow-sm'" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase mb-2">
              <ShieldCheck class="w-3.5 h-3.5" />
              <span>{{ currentLang === 'en' ? 'COMPLIANCE & TESTING PROCESS' : 'মান নিয়ন্ত্রণ ও ল্যাব টেস্ট' }}</span>
            </div>
            <h2 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-3xl md:text-4xl font-extrabold font-display">
              {{ currentLang === 'en' ? 'Engineered for Bangladesh’s Heavy Monsoon & Tropical Heat' : 'বাংলাদেশের ভারী বর্ষা ও চরম তাপেও সর্বোচ্চ স্থায়িত্ব' }}
            </h2>
            <p :class="isDark ? 'text-slate-400' : 'text-slate-600'" class="text-sm md:text-base mt-2">
              {{ currentLang === 'en' 
                ? 'Our four-tier quality control protocol ensures markings maintain reflectivity and adhesion through torrential rains and heavy commercial freight.'
                : 'সঠিক তাপমাত্রা ও আসটো এম২৪৯ স্ট্যান্ডার্ড অনুসরণ করায় আমাদের মার্কিং বর্ষায় উঠে যায় না এবং রাতে স্পষ্ট আলো প্রতিফলিত করে।' }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="border p-6 rounded-2xl relative">
              <div class="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center mb-4 text-base">
                1
              </div>
              <h3 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-base font-bold">{{ currentLang === 'en' ? 'Surface Hydro-Prep' : 'সারফেস প্রস্তুতি' }}</h3>
              <p :class="isDark ? 'text-slate-400' : 'text-slate-600'" class="text-xs mt-2 leading-relaxed">
                {{ currentLang === 'en' 
                  ? 'High-velocity compressed air and blast cleaning to remove dust, oil, and moisture from asphalt before primer application.' 
                  : 'অ্যাসফল্ট থেকে সমস্ত ধুলাবালি ও তেল অপসারণ করে প্রাইমার কোট স্থাপন করা হয়।' }}
              </p>
            </div>

            <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="border p-6 rounded-2xl relative">
              <div class="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center mb-4 text-base">
                2
              </div>
              <h3 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-base font-bold">{{ currentLang === 'en' ? 'Melting Temp QC' : 'সঠিক তাপমাত্রা নিয়ন্ত্রণ' }}</h3>
              <p :class="isDark ? 'text-slate-400' : 'text-slate-600'" class="text-xs mt-2 leading-relaxed">
                {{ currentLang === 'en' 
                  ? 'Thermostatically locked between 180°C - 200°C to guarantee resin bonding without scorching or premature degradation.' 
                  : '১৮০°C থেকে ২০০°C তাপমাত্রায় গলিয়ে রেসিন ও টাইটানিয়াম ডাই-অক্সাইডের নিখুঁত মিশ্রণ নিশ্চিত করা হয়।' }}
              </p>
            </div>

            <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="border p-6 rounded-2xl relative">
              <div class="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center mb-4 text-base">
                3
              </div>
              <h3 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-base font-bold">{{ currentLang === 'en' ? 'Drop-On Bead Spread' : 'গ্লাস বিডস স্প্রেড' }}</h3>
              <p :class="isDark ? 'text-slate-400' : 'text-slate-600'" class="text-xs mt-2 leading-relaxed">
                {{ currentLang === 'en' 
                  ? 'Uniform glass sphere distribution under 400g/m² pressure to achieve instant high night-time retro-reflectivity.' 
                  : 'নির্দিষ্ট প্রেশারে মাইক্রো গ্লাস বিডস ছড়িয়ে দেওয়া হয় যা রাতের বেলায় হেডলাইটের আলো প্রতিফলিত করে।' }}
              </p>
            </div>

            <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="border p-6 rounded-2xl relative">
              <div class="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center mb-4 text-base">
                4
              </div>
              <h3 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-base font-bold">{{ currentLang === 'en' ? 'Reflectometer Test' : 'ডিজিটাল রিফ্লেকশন টেস্ট' }}</h3>
              <p :class="isDark ? 'text-slate-400' : 'text-slate-600'" class="text-xs mt-2 leading-relaxed">
                {{ currentLang === 'en' 
                  ? 'On-site calibrated retro-reflectometer readings documented for government consultant hand-over approval.' 
                  : 'ডিজিটাল মিটার দিয়ে রিফ্লেকশন পরিমাপ করে কনসালট্যান্ট ও ইঞ্জিনিয়ারের জন্য টেস্ট রিপোর্ট তৈরি করা হয়।' }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Client Testimonials & Endorsements -->
      <section 
        :class="isDark ? 'bg-[#0B1528] border-slate-800' : 'bg-slate-100 border-slate-200'" 
        class="py-16 border-y transition-colors duration-300"
      >
        <div class="container mx-auto px-4">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-amber-500 text-xs font-bold tracking-widest uppercase">{{ currentLang === 'en' ? 'CLIENT ENDORSEMENTS' : 'ক্লায়েন্ট মতামত' }}</span>
            <h2 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-2xl sm:text-3xl font-extrabold font-display mt-1">
              {{ currentLang === 'en' ? 'What Project Directors Say' : 'প্রকল্প পরিচালক ও কনসালট্যান্টদের মূল্যায়ন' }}
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="p-6 rounded-2xl border">
              <div class="flex text-amber-400 gap-1 mb-3">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400" />
              </div>
              <p :class="isDark ? 'text-slate-300' : 'text-slate-600'" class="text-xs sm:text-sm italic">
                "Apex Marking completed the 42 KM segment of our highway package ahead of schedule. The retro-reflectivity readings comfortably exceeded RHD standards and survived two monsoon cycles with zero peeling."
              </p>
              <div :class="isDark ? 'border-slate-800' : 'border-slate-200'" class="mt-4 pt-4 border-t">
                <div :class="isDark ? 'text-white' : 'text-slate-900'" class="text-xs font-bold">Engr. Rafiqul Islam, PEng</div>
                <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-[11px]">Chief Resident Engineer, Expressway Expansion Project</div>
              </div>
            </div>

            <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="p-6 rounded-2xl border">
              <div class="flex text-amber-400 gap-1 mb-3">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400" />
              </div>
              <p :class="isDark ? 'text-slate-300' : 'text-slate-600'" class="text-xs sm:text-sm italic">
                "For our 180,000 sq ft pharmaceutical manufacturing warehouse in Gazipur, their 5S epoxy floor markings and forklift lanes passed our international FDA & WHO audit flawlessly."
              </p>
              <div :class="isDark ? 'border-slate-800' : 'border-slate-200'" class="mt-4 pt-4 border-t">
                <div :class="isDark ? 'text-white' : 'text-slate-900'" class="text-xs font-bold">Tariq Mahmud</div>
                <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-[11px]">Head of Supply Chain & Plant Logistics, Square Pharma Park</div>
              </div>
            </div>

            <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="p-6 rounded-2xl border">
              <div class="flex text-amber-400 gap-1 mb-3">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400" />
              </div>
              <p :class="isDark ? 'text-slate-300' : 'text-slate-600'" class="text-xs sm:text-sm italic">
                "Their night-crew mobilization is unmatched. They handled terminal apron striping between 11 PM and 4 AM without disrupting airline ground service operations. Very dependable team in Dhaka."
              </p>
              <div :class="isDark ? 'border-slate-800' : 'border-slate-200'" class="mt-4 pt-4 border-t">
                <div :class="isDark ? 'text-white' : 'text-slate-900'" class="text-xs font-bold">Capt. S. A. Chowdhury</div>
                <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-[11px]">Airfield Operations Consultant, HSIA Cargo Complex</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tender & Quotation Inquiry Form -->
      <section 
        id="contact" 
        :class="isDark ? 'bg-[#070D18]' : 'bg-slate-50'" 
        class="py-20 transition-colors duration-300"
      >
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <!-- Left Column: Contact details & Regional Coverage in BD -->
            <div class="lg:col-span-5 space-y-6">
              <div :class="isDark ? 'bg-slate-900 border-amber-500/30 text-amber-400' : 'bg-white border-amber-500/40 text-amber-700 shadow-sm'" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase">
                <PhoneCall class="w-3.5 h-3.5" />
                <span>{{ currentLang === 'en' ? 'DIRECT TENDER DESK' : 'যোগাযোগ ও কোটেশন ডেস্কে' }}</span>
              </div>

              <h2 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-3xl md:text-4xl font-extrabold font-display">
                {{ currentLang === 'en' ? 'Speak with our Highway Marking Engineers' : 'আমাদের হাইওয়ে ইঞ্জিনিয়ারদের সাথে সরাসরি কথা বলুন' }}
              </h2>

              <p :class="isDark ? 'text-slate-300' : 'text-slate-600'" class="text-sm leading-relaxed">
                {{ currentLang === 'en' 
                  ? 'Whether preparing an official government tender BOQ, submitting e-GP technical proposals, or requiring rapid night striping for private industrial facilities, our technical estimators respond within 2 working hours.'
                  : 'টেন্ডার বিওকিউ তৈরি, ই-জিপি ডকুমেন্টস বা যে কোনো জরুরি রোড মার্কিং প্রজেক্টের জন্য যোগাযোগ করুন।' }}
              </p>

              <!-- Office Locations Grid -->
              <div class="space-y-4 pt-2">
                <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="p-4 rounded-xl border flex items-start gap-3">
                  <MapPin class="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <div :class="isDark ? 'text-white' : 'text-slate-900'" class="text-sm font-bold">{{ currentLang === 'en' ? 'Head Office & Machine Yard (Dhaka):' : 'হেড অফিস ও মেশিন ইয়ার্ড (ঢাকা):' }}</div>
                    <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs mt-0.5">Plot 48/A, Tejgaon Industrial Area, Dhaka-1208, Bangladesh</div>
                  </div>
                </div>

                <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="p-4 rounded-xl border flex items-start gap-3">
                  <MapPin class="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <div :class="isDark ? 'text-white' : 'text-slate-900'" class="text-sm font-bold">{{ currentLang === 'en' ? 'Chattogram Port Division:' : 'চট্টগ্রাম বন্দর শাখা:' }}</div>
                    <div :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs mt-0.5">Agrabad C/A, Chattogram-4100, Bangladesh</div>
                  </div>
                </div>

                <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'" class="p-4 rounded-xl border flex items-start gap-3">
                  <Phone class="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <div :class="isDark ? 'text-white' : 'text-slate-900'" class="text-sm font-bold">{{ currentLang === 'en' ? 'Direct Hotline & WhatsApp:' : 'হটলাইন ও হোয়াটসঅ্যাপ:' }}</div>
                    <div class="text-xs text-amber-500 font-bold mt-0.5">+880 1711-984250 / +880 1844-320911</div>
                  </div>
                </div>
              </div>

              <!-- WhatsApp Direct Floating Button -->
              <a 
                href="https://wa.me/8801711984250" 
                target="_blank"
                class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.179.182-.077.357.101.174.449.742.964 1.201.662.591 1.221.774 1.394.861.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                </svg>
                <span>{{ currentLang === 'en' ? 'Chat Directly on WhatsApp' : 'হোয়াটসঅ্যাপে তাৎক্ষণিক বার্তা দিন' }}</span>
              </a>
            </div>

            <!-- Right Column: Interactive Quotation Form -->
            <div class="lg:col-span-7">
              <div :class="isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'" class="border rounded-3xl p-6 sm:p-8">
                <h3 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-xl font-bold mb-1">
                  {{ currentLang === 'en' ? 'Submit Project Specification / Tender BOQ' : 'প্রজেক্ট বিবরণ ও কোটেশন ফর্ম' }}
                </h3>
                <p :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs mb-6">
                  {{ currentLang === 'en' 
                    ? 'Fill out project parameters to receive an itemized commercial quotation within 2 hours.' 
                    : 'প্রজেক্টের বিবরণ দিয়ে ফর্মটি পূরণ করুন, দ্রুত আমাদের সিনিয়র টেকনিক্যাল টিম যোগাযোগ করবে।' }}
                </p>

                <form @submit.prevent="submitInquiry" class="space-y-4">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block text-xs font-semibold mb-1.5">{{ currentLang === 'en' ? 'Full Name / Contact Person *' : 'নাম *' }}</label>
                      <input 
                        type="text" 
                        required 
                        v-model="inquiryForm.name"
                        placeholder="e.g. Engr. Tanvir Ahmed"
                        :class="isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
                        class="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block text-xs font-semibold mb-1.5">{{ currentLang === 'en' ? 'Company / Contracting Firm *' : 'প্রতিষ্ঠান বা ফার্মের নাম *' }}</label>
                      <input 
                        type="text" 
                        required 
                        v-model="inquiryForm.company"
                        placeholder="e.g. Spectra Engineers Ltd."
                        :class="isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
                        class="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block text-xs font-semibold mb-1.5">{{ currentLang === 'en' ? 'Phone / Mobile No. *' : 'মোবাইল নম্বর *' }}</label>
                      <input 
                        type="tel" 
                        required 
                        v-model="inquiryForm.phone"
                        placeholder="+880 17XX-XXXXXX"
                        :class="isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
                        class="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block text-xs font-semibold mb-1.5">{{ currentLang === 'en' ? 'Work Email *' : 'ইমেইল *' }}</label>
                      <input 
                        type="email" 
                        required 
                        v-model="inquiryForm.email"
                        placeholder="name@company.com"
                        :class="isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
                        class="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block text-xs font-semibold mb-1.5">{{ currentLang === 'en' ? 'Project Category / Agency' : 'প্রকল্পের ধরন' }}</label>
                      <select 
                        v-model="inquiryForm.agency"
                        :class="isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
                        class="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-500"
                      >
                        <option value="rhd">RHD National Highway Tender</option>
                        <option value="lged">LGED Rural / Upazila Road Project</option>
                        <option value="city_corp">City Corporation Urban Marking</option>
                        <option value="industrial">Private Industrial Park / Warehouse</option>
                        <option value="airport">Airfield Runway / CAAB Project</option>
                        <option value="other">Other Commercial Facility</option>
                      </select>
                    </div>
                    <div>
                      <label :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block text-xs font-semibold mb-1.5">{{ currentLang === 'en' ? 'Approximate Scope (KM or M²)' : 'কাজের পরিধি' }}</label>
                      <input 
                        type="text" 
                        v-model="inquiryForm.scope"
                        placeholder="e.g. 15 KM Highway or 4,000 M²"
                        :class="isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
                        class="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label :class="isDark ? 'text-slate-300' : 'text-slate-700'" class="block text-xs font-semibold mb-1.5">{{ currentLang === 'en' ? 'Project Details / BOQ Specifications' : 'বিস্তারিত বিবরণ' }}</label>
                    <textarea 
                      rows="3" 
                      v-model="inquiryForm.message"
                      placeholder="Provide details on thickness requirements (e.g., 2.5mm thermoplastic), location, project completion deadline, etc."
                      :class="isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
                      class="w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-500"
                    ></textarea>
                  </div>

                  <!-- Submit Button -->
                  <button 
                    type="submit" 
                    :disabled="isSubmitting"
                    class="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span v-if="!isSubmitting">{{ currentLang === 'en' ? 'Submit Official Quotation Request' : 'কোটেশন রিকোয়েস্ট পাঠান' }}</span>
                    <span v-else>{{ currentLang === 'en' ? 'Transmitting Request...' : 'প্রক্রিয়াকরণ হচ্ছে...' }}</span>
                    <Send v-if="!isSubmitting" class="w-4 h-4" />
                  </button>

                  <!-- Feedback alert -->
                  <div v-if="inquirySubmitted" :class="isDark ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300' : 'bg-emerald-50 border-emerald-500/40 text-emerald-800'" class="p-3 border rounded-xl text-xs flex items-center gap-2">
                    <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>
                      {{ currentLang === 'en' 
                        ? 'Thank you! Your quotation request has been received. Our chief estimator will contact you within 2 hours.' 
                        : 'ধন্যবাদ! আপনার কোটেশন রিকোয়েস্ট গৃহীত হয়েছে। আমাদের ইঞ্জিনিয়ার খুব শীঘ্রই যোগাযোগ করবেন।' }}
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-slate-900 dark:bg-[#050912] border-t border-slate-800 pt-16 pb-12 text-slate-400 text-xs transition-colors duration-300">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <!-- Col 1: About Apex -->
            <div class="lg:col-span-2 space-y-4">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center font-black text-slate-950">
                  A
                </div>
                <span class="text-lg font-black text-white font-display">APEX ROAD MARKING BANGLADESH</span>
              </div>
              <p class="text-xs text-slate-400 leading-relaxed pr-6">
                {{ currentLang === 'en' 
                  ? 'Apex Road Marking Ltd. is Bangladesh’s foremost specialized highway marking and industrial floor coating contractor. Operating automated hydraulic screed fleets, certified AASHTO M249 formulations, and comprehensive tender execution support.'
                  : 'এপেক্স রোড মার্কিং লিমিটেড বাংলাদেশ সরকার অনুমোদিত ও অভিজ্ঞ সড়ক ও শিল্প কারখানার মার্কিং ঠিকাদারি প্রতিষ্ঠান।' }}
              </p>
              <div class="flex items-center gap-3 text-slate-300 text-xs">
                <span class="bg-slate-800 px-2 py-1 rounded border border-slate-700">ISO 9001:2015</span>
                <span class="bg-slate-800 px-2 py-1 rounded border border-slate-700">RHD Class-1 Enlisted</span>
                <span class="bg-slate-800 px-2 py-1 rounded border border-slate-700">e-GP Registered</span>
              </div>
            </div>

            <!-- Col 2: Services Links -->
            <div class="space-y-3">
              <h4 class="text-xs font-bold text-white uppercase tracking-wider">{{ currentLang === 'en' ? 'Core Services' : 'সেবাসমূহ' }}</h4>
              <ul class="space-y-2">
                <li><a href="#services" class="hover:text-amber-400 transition">Thermoplastic Road Marking</a></li>
                <li><a href="#services" class="hover:text-amber-400 transition">Zebra Crossing & Pedestrian Safety</a></li>
                <li><a href="#services" class="hover:text-amber-400 transition">Industrial Epoxy Floor Marking</a></li>
                <li><a href="#services" class="hover:text-amber-400 transition">Micro Glass Bead Retro-Reflection</a></li>
                <li><a href="#services" class="hover:text-amber-400 transition">Hydro-Blasting & Line Removal</a></li>
                <li><a href="#services" class="hover:text-amber-400 transition">Airport Airfield Marking (CAAB)</a></li>
              </ul>
            </div>

            <!-- Col 3: Government Coverage -->
            <div class="space-y-3">
              <h4 class="text-xs font-bold text-white uppercase tracking-wider">{{ currentLang === 'en' ? 'Tender Criteria' : 'টেন্ডার তথ্য' }}</h4>
              <ul class="space-y-2">
                <li><a href="#credentials" class="hover:text-amber-400 transition">RHD Highway Standards</a></li>
                <li><a href="#credentials" class="hover:text-amber-400 transition">LGED Upazila Road Specs</a></li>
                <li><a href="#credentials" class="hover:text-amber-400 transition">City Corporation Urban Lines</a></li>
                <li><a href="#credentials" class="hover:text-amber-400 transition">AASHTO M249 Compliance</a></li>
                <li><a href="#credentials" class="hover:text-amber-400 transition">Download Tender Dossier (PDF)</a></li>
                <li><a href="#credentials" class="hover:text-amber-400 transition">Trade License & TIN Verification</a></li>
              </ul>
            </div>

            <!-- Col 4: Regional Hubs -->
            <div class="space-y-3">
              <h4 class="text-xs font-bold text-white uppercase tracking-wider">{{ currentLang === 'en' ? 'Regional Yards' : ' শাখা অফিস' }}</h4>
              <ul class="space-y-2 text-xs text-slate-400">
                <li><strong class="text-slate-200">Dhaka Yard:</strong> Tejgaon I/A</li>
                <li><strong class="text-slate-200">Chattogram:</strong> Agrabad C/A</li>
                <li><strong class="text-slate-200">Sylhet:</strong> Subidbazar Highway Link</li>
                <li><strong class="text-slate-200">Khulna:</strong> Rupsha Bridge Point</li>
                <li class="pt-2 text-amber-400 font-bold">24/7 Hotline: +880 1711-984250</li>
              </ul>
            </div>
          </div>

          <!-- Bottom Copyright -->
          <div class="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-[11px]">
            <div>
              © 2026 Apex Road Marking Bangladesh Ltd. All Rights Reserved. Compliant with Bangladesh Roads and Highways Department.
            </div>
            <div class="flex items-center gap-4">
              <a href="#" class="hover:text-slate-300">Privacy Policy</a>
              <a href="#" class="hover:text-slate-300">Terms of Contract</a>
              <a href="#credentials" class="hover:text-slate-300">Tender License</a>
            </div>
          </div>
        </div>
      </footer>

      <!-- Floating WhatsApp Quick Action -->
      <aside aria-label="Quick Actions" class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <!-- WhatsApp Floating Button -->
        <a 
          href="https://wa.me/8801711984250" 
          target="_blank" 
          class="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl flex items-center justify-center hover:scale-110 transition"
          title="Direct WhatsApp"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.179.182-.077.357.101.174.449.742.964 1.201.662.591 1.221.774 1.394.861.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
          </svg>
        </a>
      </aside>

      <!-- Tender Pack Download Modal -->
      <div v-if="openTenderModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
        <div :class="isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'" class="border rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative">
          <button 
            @click="openTenderModal = false"
            :class="isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-950'"
            class="absolute top-4 right-4 p-1 cursor-pointer"
          >
            <X class="w-5 h-5" />
          </button>

          <div class="flex items-center gap-3">
            <div class="p-3 rounded-xl bg-amber-400/20 text-amber-500 border border-amber-400/30">
              <FileText class="w-6 h-6" />
            </div>
            <div>
              <h3 :class="isDark ? 'text-white' : 'text-slate-900'" class="text-base font-bold">Download Company Tender Profile Pack</h3>
              <p :class="isDark ? 'text-slate-400' : 'text-slate-500'" class="text-xs">Official Dossier for e-GP & Government Tenders (PDF, 8.4 MB)</p>
            </div>
          </div>

          <p :class="isDark ? 'text-slate-300' : 'text-slate-600'" class="text-xs leading-relaxed">
            The dossier includes our Trade License, Tax Clearance (FY 2024-25), VAT/BIN Certificate, RHD & LGED Enlistment Letters, Machinery Ownership List with Engine Nos., and Lab Test Reports for AASHTO M249 Thermoplastic Paint.
          </p>

          <div class="space-y-2 pt-2">
            <input 
              type="text" 
              placeholder="Your Name / Organization" 
              :class="isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
              class="w-full border rounded-lg px-3 py-2 text-xs" 
            />
            <input 
              type="email" 
              placeholder="Official Email for Verification" 
              :class="isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'"
              class="w-full border rounded-lg px-3 py-2 text-xs" 
            />
          </div>

          <div class="flex items-center justify-end gap-3 pt-3">
            <button 
              @click="openTenderModal = false"
              :class="isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-950'"
              class="px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button 
              @click="downloadSampleProfile"
              class="px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 flex items-center gap-1.5 cursor-pointer"
            >
              <Download class="w-4 h-4" />
              <span>Download Dossier Now</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  Phone,
  Mail,
  HardHat,
  ShieldCheck,
  Award,
  CheckCircle2,
  FileText,
  Download,
  ArrowRight,
  ChevronRight,
  Calculator,
  Briefcase,
  Wrench,
  Clock,
  Truck,
  MapPin,
  Star,
  PhoneCall,
  Send,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-vue-next'

// Single Theme State (Light / Dark)
const isDark = ref(false)

function applyTheme(dark) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('apex_theme', dark ? 'dark' : 'light')
    if (dark) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
    }
  }
}

function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('apex_theme')
    if (saved) {
      isDark.value = (saved === 'dark')
    } else {
      // Default to true or system preference
      isDark.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme(isDark.value)
  }
})

// Language toggle state
const currentLang = ref('en')
const isMobileMenuOpen = ref(false)
const openTenderModal = ref(false)
const isDownloading = ref(false)
const isSubmitting = ref(false)
const inquirySubmitted = ref(false)

// Translations for navigation
const navT = computed(() => {
  return currentLang.value === 'en'
    ? {
        about: 'About',
        services: 'Services',
        calculator: 'Rate Estimator',
        projects: 'Projects',
        machinery: 'Machinery Fleet',
        standards: 'Quality & Safety',
        credentials: 'Credentials',
        contact: 'Contact'
      }
    : {
        about: 'পরিচিতি',
        services: 'সেবাসমূহ',
        calculator: 'খরচ ক্যালকুলেটর',
        projects: 'প্রকল্পসমূহ',
        machinery: 'যন্ত্রপাতি বহর',
        standards: 'মান ও নিরাপত্তা',
        credentials: 'সনদপত্র',
        contact: 'যোগাযোগ'
      }
})

// Services List matching ChatGPT specifications
const servicesList = [
  {
    id: 'thermoplastic_highway',
    titleEn: 'Thermoplastic Road Marking',
    titleBn: 'থার্মোপ্লাস্টিক সড়ক মার্কিং',
    badge: 'HIGHWAY STANDARD',
    icon: HardHat,
    standard: 'AASHTO M249 / BS 3262',
    descEn: 'Hot-melt thermoplastic extruded at 180°C - 200°C for national highways, center dividing lines, continuous edge lines, and expressway ribbons with rapid 3-minute traffic reopening.',
    descBn: 'জাতীয় মহাসড়ক ও এক্সপ্রেসওয়ের জন্য ১৮০°-২০০° সেলসিয়াস তাপমাত্রায় গলিত থার্মোপ্লাস্টিক এক্সট্রুশন, যা ৩ মিনিটের মধ্যে শুকিয়ে ট্রাফিক চলাচলের উপযোগী হয়।',
    specs: ['Thickness: 2.5mm - 3.0mm', 'Titanium Dioxide Pigment (> 10%)', 'Pre-mixed & Drop-on Glass Beads', 'Monsoon Weather Skid Resistant']
  },
  {
    id: 'traffic_pedestrian',
    titleEn: 'Traffic & Pedestrian Markings',
    titleBn: 'জেব্রা ক্রসিং ও পথচারী নিরাপত্তা মার্কিং',
    badge: 'URBAN SAFETY',
    icon: Award,
    standard: 'City Corp & RHD Standard',
    descEn: 'High-visibility zebra crossings, stop bars, directional arrows, speed breaker warning hazard stripes, and yellow box junction grids designed for high-density metropolitan traffic.',
    descBn: 'মেট্রোপলিটন ট্রাফিকের জন্য উচ্চমাত্রার দৃশ্যমান জেব্রা ক্রসিং, স্টপ লাইন, স্পিড ব্রেকার হ্যাজার্ড স্ট্রাইপস এবং ইয়েলো বক্স জাংশন মার্কিং।',
    specs: ['High Friction Skid Resistance (BPN > 55)', 'Ultra-bright Yellow & Safety White', 'Vibration/Audio Rumble Ribbons', 'Urban Wear Tear Proof']
  },
  {
    id: 'industrial_epoxy',
    titleEn: 'Industrial & Factory Floor Striping',
    titleBn: 'শিল্প কারখানা ও গুদামের ফ্লোর মার্কিং',
    badge: '5S COMPLIANCE',
    icon: Wrench,
    standard: 'OSHA & ISO 5S Guidelines',
    descEn: 'Heavy-duty 100% solids epoxy and polyurethane demarcation for export manufacturing plants, pharmaceutical cleanrooms, logistics warehouses, and heavy forklift aisle ways.',
    descBn: 'রপ্তানিমুখী পোশাক কারখানা, ফার্মাসিউটিক্যালস ও লজিস্টিক গুদামের জন্য টেকসই ইপক্সি ওয়াকওয়ে, ফর্ক Non-skid লিফট জোন ও সেফটি ডিলাইনিয়েশন।',
    specs: ['High Chemical & Oil Spillage Resistance', 'Forklift Heavy Axle Load Endurance', 'Slip-Resistant Textured Finishes', 'Clear 5S Color Coding Standards']
  },
  {
    id: 'reflective_glass',
    titleEn: 'Retro-Reflective Glass Bead Application',
    titleBn: 'রিফ্লেক্টিভ মাইক্রো গ্লাস বিডস প্রয়োগ',
    badge: 'NIGHT VISIBILITY',
    icon: ShieldCheck,
    standard: 'BS 6088 Class A & B',
    descEn: 'Engineered micro glass spherical beads drop-coated under pressure over hot thermoplastic to provide intense night-time retro-reflectivity even during fog and rain.',
    descBn: 'রাতের আঁধারে এবং কুয়াশা বা বৃষ্টির সময় হেডলাইটের আলোয় দূর থেকে দৃশ্যমান থাকার জন্য থার্মোপ্লাস্টিকের সাথে বিশেষ গ্লাস বিডস স্থাপন।',
    specs: ['Reflective Index: > 1.50 nd', 'Roundness: > 80% Spherical Rating', 'Moisture Proof Silicone Coating', 'Luminance: > 350 mcd/m²/lx']
  },
  {
    id: 'remarking_removal',
    titleEn: 'Highway Maintenance & Line Removal',
    titleBn: 'রাস্তা সংস্কার ও পুরানো দাগ অপসারণ',
    badge: 'ROAD REHABILITATION',
    icon: Clock,
    standard: 'Hydro-Blasting Standard',
    descEn: 'High-pressure water hydro-blasting and mechanical scarifiers to cleanly remove outdated or faded road markings without causing asphalt structural gouging.',
    descBn: 'রাস্তার পিচের কোনো ক্ষতি না করে হাই-প্রেশার ওয়াটার জেট ও মেকানিক্যাল স্কারিফায়ার দিয়ে পুরানো বা ভুল দাগ দ্রুত মুছে ফেলা।',
    specs: ['Zero Asphalt Base Destruction', 'Eco-Friendly, Chemical Free', 'Immediate Re-application Ready', 'Highway Traffic Management Diverted']
  },
  {
    id: 'parking_lot',
    titleEn: 'Commercial Parking & Access Stripping',
    titleBn: 'কমার্শিয়াল পার্কিং ও বেসমেন্ট মার্কিং',
    badge: 'COMMERCIAL FACILITY',
    icon: Truck,
    standard: 'Architectural Standards',
    descEn: 'Precision striping for shopping malls, hospital emergency bays, airport terminals, residential towers, EV charging stalls, and wheelchair handicap access symbols.',
    descBn: 'শপিং মল, হাসপাতাল, এয়ারপোর্ট ও বহুতল ভবনের বেসমেন্ট কার পার্কিংয়ের জন্য পার্কিং বে, দিকনির্দেশক অ্যারো ও নম্বর মার্কিং।',
    specs: ['Crisp Laser-Aligned Edges', 'Wheelchair ADA Handicap Stencils', 'Basement Pillar Hazard Warning', 'High-Gloss Oil-Resistant Coating']
  }
]

// Project Categories
const projectCategories = [
  { id: 'all', nameEn: 'All Projects', nameBn: 'সব প্রকল্প' },
  { id: 'highway', nameEn: 'National Highways', nameBn: 'মহাসড়ক' },
  { id: 'city', nameEn: 'Urban & City Corp', nameBn: 'নগর উন্নয়ন' },
  { id: 'industrial', nameEn: 'Industrial & Ports', nameBn: 'শিল্প ও বন্দর' }
]

const activeCategory = ref('all')

// Real Bangladesh Projects Data
const projectsList = [
  {
    id: 1,
    category: 'highway',
    tag: 'RHD HIGHWAY',
    titleEn: 'Dhaka-Chattogram 4-Lane Highway (N1) Remarking',
    titleBn: 'ঢাকা-চট্টগ্রাম চার লেন মহাসড়ক (এন১) থার্মোপ্লাস্টিক মার্কিং',
    descEn: 'Executed 120 Lane-KM continuous retro-reflective center line ribbons and road safety symbols under RHD maintenance package.',
    descBn: 'সড়ক ও জনপথ অধিদপ্তরের অধীনে ১২০ কিমি নিরবচ্ছিন্ন থার্মোপ্লাস্টিক রিবন ও সেফটি সিম্বল মার্কিং সম্পন্ন।',
    client: 'Roads & Highways Department (RHD)',
    scope: '120 Lane-KM',
    location: 'Cumilla - Feni Highway Segment',
    standard: 'AASHTO M249 Standard',
    image: '/images/highway-marking.jpg'
  },
  {
    id: 2,
    category: 'highway',
    tag: 'EXPRESSWAY',
    titleEn: 'Bangabandhu Expressway (N8) Interchange & Ramps',
    titleBn: 'বঙ্গবন্ধু এক্সপ্রেসওয়ে (এন৮) ইন্টারচেঞ্জ ও র‍্যাম্প মার্কিং',
    descEn: 'Full interchange chevron striping, deceleration ramp speed lines, and retro-reflective lane dividing markers.',
    descBn: 'এক্সপ্রেসওয়ের ইন্টারচেঞ্জ ও টোল প্লাজা সংযোগ সড়কে হাই-ফ্রিকশন অডিও রিবন ও লেন ডিভাইডার মার্কিং।',
    client: 'Bangladesh Bridges Authority / RHD',
    scope: '64 Lane-KM',
    location: 'Dhaka - Mawa Corridor',
    standard: 'High-Friction Audio Markings',
    image: '/images/marking-machine.jpg'
  },
  {
    id: 3,
    category: 'industrial',
    tag: 'ECONOMIC ZONE',
    titleEn: 'Meghna Industrial Economic Zone 5S Floor Demarcation',
    titleBn: 'মেঘনা ইন্ডাস্ট্রিয়াল ইকোনমিক জোন ফ্লোর মার্কিং',
    descEn: 'Heavy duty epoxy pedestrian paths, automated guided vehicle (AGV) tracks, and hazardous machinery clearance zones.',
    descBn: 'মেগা ইন্ডাস্ট্রিয়াল জোনে ভারি ফর্ক লিফট জোন এবং আন্তর্জাতিক ৫এস কমপ্লায়েন্স সেফটি লাইন মার্কিং।',
    client: 'Meghna Group of Industries / BEZA',
    scope: '42,000 Sq. Meters',
    location: 'Narayanganj Economic Zone',
    standard: 'OSHA & ISO 5S Flooring',
    image: '/images/factory-marking.jpg'
  },
  {
    id: 4,
    category: 'city',
    tag: 'CITY CORP',
    titleEn: 'Dhaka Airport Road & Mirpur Flyover Zebra Markings',
    titleBn: 'ঢাকা এয়ারপোর্ট রোড ও মিরপুর ফ্লাইওভার জেব্রা ক্রসিং',
    descEn: 'Installed high-visibility thermoplastic pedestrian zebra crossings and reflective warning bands across major urban arteries.',
    descBn: 'ঢাকা উত্তর সিটি কর্পোরেশনের আওতাধীন ব্যস্ততম মোড়সমূহে হাই-গ্রিপ পথচারী পারাপার ও স্টপ লাইন মার্কিং।',
    client: 'Dhaka North City Corporation (DNCC)',
    scope: '35 Urban Crossings',
    location: 'Airport Road to Mirpur-10, Dhaka',
    standard: 'BSTI Urban Code',
    image: '/images/highway-marking.jpg'
  },
  {
    id: 5,
    category: 'industrial',
    tag: 'AIRFIELD / CAAB',
    titleEn: 'Hazrat Shahjalal Int’l Airport (HSIA) Cargo Apron Markings',
    titleBn: 'হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর কার্গো অ্যাপ্রন মার্কিং',
    descEn: 'ICAO Annex 14 compliant high-friction fuel-resistant surface striping for aircraft towing and ground support vehicles.',
    descBn: 'বেসামরিক বিমান চলাচল কর্তৃপক্ষের অধীনে বিমানের ট্যাক্সিওয়ে ও গ্রাউন্ড সাপোর্ট ভেহিকল মার্কিং।',
    client: 'Civil Aviation Authority Bangladesh (CAAB)',
    scope: '18,500 Sq. Meters',
    location: 'Kurmitola, Dhaka',
    standard: 'ICAO Annex 14 Standard',
    image: '/images/factory-marking.jpg'
  },
  {
    id: 6,
    category: 'city',
    tag: 'COMMERCIAL HUB',
    titleEn: 'Jamuna Future Park Multi-Level Parking Bay Striping',
    titleBn: 'যমুনা ফিউচার পার্ক মাল্টি-লেভেল কার পার্কিং মার্কিং',
    descEn: 'Complete architectural layout, parking stall numbering, EV priority zones, and basement pillar safety chevron lines.',
    descBn: 'দক্ষিণ এশিয়ার বৃহত্তম শপিং মলের ৫,০০০ কার ধারণক্ষমতার বেসমেন্টে পার্কিং বে ও ট্রাফিক সাইনেজ।',
    client: 'Jamuna Group Facility Engineering',
    scope: '5,000 Parking Bays',
    location: 'Kuril, Pragati Sarani, Dhaka',
    standard: 'Architectural Spec',
    image: '/images/marking-machine.jpg'
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projectsList
  return projectsList.filter(p => p.category === activeCategory.value)
})

// Machinery List
const machineryList = [
  {
    nameEn: 'Hofmann H18-1 Hydraulic Extruder',
    nameBn: 'হফম্যান এইচ১৮-১ হাইড্রোলিক এক্সট্রুডার মেশিন',
    specEn: 'German automated road line striper, up to 18 KM per day, equipped with dual glass bead injection guns.',
    specBn: 'জার্মান প্রযুক্তির স্বয়ংক্রিয় মেশিন, দৈনিক ১৮ কিমি পর্যন্ত নিখুঁত মার্কিং ও ডাবল বিডস ইনজেকশন।'
  },
  {
    nameEn: 'Double-Tank 450L Pre-Heater Melters',
    nameBn: 'ডাবল ট্যাংক ৪৫০ লিটার প্রি-হিটার মেল্টিং বয়লার',
    specEn: 'Diesel/LPG thermostatic controlled melters maintaining stable 190°C core batch temperature.',
    specBn: 'থার্মোস্ট্যাট নিয়ন্ত্রিত মেল্টার যা উপাদানকে সঠিক ১৮০°-২০০° সেলসিয়াসে সমভাবে উত্তপ্ত রাখে।'
  },
  {
    nameEn: 'High-Pressure Hydro-Blast Scarifier',
    nameBn: 'হাই-প্রেশার হাইড্রো-ব্লাস্ট ও স্কারিফায়ার',
    specEn: '2500-bar water pressure removal unit for erasing old markings without pavement surface damage.',
    specBn: '২৫০০ বার চাপে জলীয় গতিতে পিচ নষ্ট না করে পুরানো বা ত্রুটিপূর্ণ মার্কিং তোলার ইউনিট।'
  },
  {
    nameEn: 'Digital Retro-Reflectometer (Zehntner RL/Qd)',
    nameBn: 'ডিজিটাল রেট্রো-রিফ্লেক্টোমিটার পরীক্ষণ যন্ত্র',
    specEn: 'On-site calibrated luminance reading certified by BUET / RHD test consultants.',
    specBn: 'সরাসরি সাইটে রিফ্লেকশন পরীক্ষার ডিজিটাল ইকুইপমেন্ট যা বুয়েট ও আরএইচডি টেস্টে গ্রহণযোগ্য।'
  }
]

// Calculator Form State
const calcForm = ref({
  serviceType: 'thermoplastic_highway',
  location: 'dhaka',
  length: 2500,
  unit: 'meters',
  glassBeadGrade: 'premium',
  shift: 'night'
})

function selectCalculatorService(id) {
  calcForm.value.serviceType = id
}

// Pricing formula based on Bangladesh market rates (BDT)
const estimatedCostRange = computed(() => {
  const baseRates = {
    thermoplastic_highway: 185,
    traffic_pedestrian: 260,
    industrial_epoxy: 220,
    reflective_glass: 195,
    parking_lot: 140,
    remarking_removal: 280
  }

  const rate = baseRates[calcForm.value.serviceType] || 180
  let multiplier = 1.0

  if (calcForm.value.glassBeadGrade === 'premium') multiplier += 0.12
  if (calcForm.value.shift === 'round_the_clock') multiplier += 0.15
  if (calcForm.value.location === 'padma' || calcForm.value.location === 'chattogram') multiplier += 0.05

  if (calcForm.value.length > 5000) multiplier *= 0.92
  if (calcForm.value.length > 15000) multiplier *= 0.88

  const baseTotal = calcForm.value.length * rate * multiplier
  const min = Math.round(baseTotal * 0.95 / 500) * 500
  const max = Math.round(baseTotal * 1.08 / 500) * 500

  return { min, max }
})

// Inquiry Form State
const inquiryForm = ref({
  name: '',
  company: '',
  phone: '',
  email: '',
  agency: 'rhd',
  scope: '',
  message: ''
})

function prefillEstimateDetails() {
  inquiryForm.value.scope = `${calcForm.value.length} Meters (${calcForm.value.serviceType})`
  inquiryForm.value.message = `Generated quote estimate: BDT ৳${estimatedCostRange.value.min.toLocaleString()} - ৳${estimatedCostRange.value.max.toLocaleString()} for ${calcForm.value.location.toUpperCase()} region with ${calcForm.value.glassBeadGrade} glass beads.`
}

function submitInquiry() {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    inquirySubmitted.value = true
    setTimeout(() => {
      inquirySubmitted.value = false
    }, 7000)
  }, 900)
}

function downloadSampleProfile() {
  isDownloading.value = true
  setTimeout(() => {
    isDownloading.value = false
    openTenderModal.value = false
    alert('Apex Road Marking Ltd. Tender Dossier (PDF) has been generated successfully for your download.')
  }, 1000)
}
</script>
