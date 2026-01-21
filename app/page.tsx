'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: 'Bar-B-Q Menu',
      category: 'restaurant',
      image: '/a4_2.jpg',
      description: 'Elegant restaurant menu design with ornamental borders'
    },
    {
      id: 2,
      title: 'Breakfast Menu',
      category: 'restaurant',
      image: '/a4d_3.jpg',
      description: 'Classic breakfast menu design with food imagery'
    },
    {
      id: 3,
      title: 'Drinks Menu',
      category: 'restaurant',
      image: '/a4d_4.jpg',
      description: 'Comprehensive drinks and beverages menu design'
    },
    {
      id: 4,
      title: 'Dirleh Hotel Menu',
      category: 'hotel',
      image: '/a4d_1.jpg',
      description: 'Premium hotel restaurant menu design'
    },
    {
      id: 5,
      title: 'Blossom Resorts Menu',
      category: 'hotel',
      image: '/a4_1.jpg',
      description: 'Luxury resort menu with ornate decorations'
    },
    {
      id: 6,
      title: 'Chinese Food Menu',
      category: 'restaurant',
      image: '/a4_3.jpg',
      description: 'Asian cuisine menu with elegant styling'
    },
    {
      id: 7,
      title: 'Pakistani Dishes',
      category: 'restaurant',
      image: '/a4d_2.jpg',
      description: 'Traditional Pakistani cuisine menu design'
    },
    {
      id: 8,
      title: 'Professional Resume',
      category: 'professional',
      image: '/cv_m.jpg',
      description: 'Modern professional CV and resume design'
    },
    {
      id: 9,
      title: 'Special Requests Menu',
      category: 'restaurant',
      image: '/a4_4.jpg',
      description: 'Specialty items and custom orders menu'
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  // All available images grouped by name pattern
  const allImages = [
    // A4 Designs (Restaurant Menus)
    { id: 1, name: 'a4_1', image: '/a4_1.jpg', group: 'A4 Designs', color: 'from-orange-500 to-red-500' },
    { id: 2, name: 'a4_2', image: '/a4_2.jpg', group: 'A4 Designs', color: 'from-orange-500 to-red-500' },
    { id: 3, name: 'a4_3', image: '/a4_3.jpg', group: 'A4 Designs', color: 'from-orange-500 to-red-500' },
    { id: 4, name: 'a4_4', image: '/a4_4.jpg', group: 'A4 Designs', color: 'from-orange-500 to-red-500' },

    // A4D Designs (Restaurant Menus)
    { id: 5, name: 'a4d_1', image: '/a4d_1.jpg', group: 'A4D Designs', color: 'from-orange-500 to-yellow-500' },
    { id: 6, name: 'a4d_2', image: '/a4d_2.jpg', group: 'A4D Designs', color: 'from-orange-500 to-yellow-500' },
    { id: 7, name: 'a4d_3', image: '/a4d_3.jpg', group: 'A4D Designs', color: 'from-orange-500 to-yellow-500' },
    { id: 8, name: 'a4d_4', image: '/a4d_4.jpg', group: 'A4D Designs', color: 'from-orange-500 to-yellow-500' },

    // Logos
    { id: 9, name: 'logo1', image: '/logo1.jpg', group: 'Logos', color: 'from-blue-500 to-indigo-500' },
    { id: 10, name: 'logo2', image: '/logo2.jpg', group: 'Logos', color: 'from-blue-500 to-indigo-500' },
    { id: 11, name: 'logo_shiger', image: '/logo_shiger.jpg', group: 'Logos', color: 'from-blue-500 to-indigo-500' },
    { id: 12, name: 'logo_shopper', image: '/logo_shopper.jpg', group: 'Logos', color: 'from-blue-500 to-indigo-500' },

    // Hushe Posters
    { id: 13, name: 'hushe_poster1', image: '/hushe_poster1.jpg', group: 'Hushe Posters', color: 'from-yellow-500 to-amber-500' },
    { id: 14, name: 'hushe_poster2', image: '/hushe_poster2.jpg', group: 'Hushe Posters', color: 'from-yellow-500 to-amber-500' },
    { id: 15, name: 'hushe_poster3', image: '/hushe_poster3.jpg', group: 'Hushe Posters', color: 'from-yellow-500 to-amber-500' },
    { id: 16, name: 'hushe_poster4', image: '/hushe_poster4.jpg', group: 'Hushe Posters', color: 'from-yellow-500 to-amber-500' },

    // Hiring Posters
    { id: 17, name: 'hiring_post1', image: '/hiring_post1.jpg', group: 'Hiring Posters', color: 'from-green-500 to-emerald-500' },
    { id: 18, name: 'hiring_post2', image: '/hiring_post2.jpg', group: 'Hiring Posters', color: 'from-green-500 to-emerald-500' },

    // North Digital
    { id: 19, name: 'north_digit1', image: '/north_digit1.jpg', group: 'North Digital', color: 'from-cyan-500 to-blue-500' },
    { id: 20, name: 'north_digit2', image: '/north_digit2.jpg', group: 'North Digital', color: 'from-cyan-500 to-blue-500' },
    { id: 21, name: 'north_digit3', image: '/north_digit3.jpg', group: 'North Digital', color: 'from-cyan-500 to-blue-500' },
    { id: 22, name: 'north_digit4', image: '/north_digit4.jpg', group: 'North Digital', color: 'from-cyan-500 to-blue-500' },

    // Property Ads
    { id: 23, name: 'property_ad_1', image: '/property_ad_1.jpg', group: 'Property Ads', color: 'from-purple-500 to-pink-500' },
    { id: 24, name: 'property_ad_2', image: '/property_ad_2.jpg', group: 'Property Ads', color: 'from-purple-500 to-pink-500' },

    // Royal Branding
    { id: 25, name: 'royal_bc1', image: '/royal_bc1.jpg', group: 'Royal Branding', color: 'from-yellow-600 to-orange-600' },
    { id: 26, name: 'royal_bc2', image: '/royal_bc2.jpg', group: 'Royal Branding', color: 'from-yellow-600 to-orange-600' },
    { id: 27, name: 'royal_group', image: '/royal_group.jpg', group: 'Royal Branding', color: 'from-yellow-600 to-orange-600' },
    { id: 28, name: 'Royal_logo', image: '/Royal_logo.jpg', group: 'Royal Branding', color: 'from-yellow-600 to-orange-600' },

    // Screenshots
    { id: 29, name: 'screenshot1', image: '/screenshot1.jpg', group: 'Screenshots', color: 'from-gray-600 to-gray-800' },
    { id: 30, name: 'screenshot2', image: '/screenshot2.jpg', group: 'Screenshots', color: 'from-gray-600 to-gray-800' },

    // Additional Designs
    { id: 31, name: '1', image: '/1.jpg', group: 'Featured Works', color: 'from-red-500 to-pink-500' },
    { id: 32, name: '2', image: '/2.jpg', group: 'Featured Works', color: 'from-red-500 to-pink-500' },
    { id: 33, name: 'allama_iqbal', image: '/allama_iqbal.jpg', group: 'Featured Works', color: 'from-red-500 to-pink-500' },
    { id: 34, name: 'birthday_poster', image: '/birthday_poster.jpg', group: 'Event Posters', color: 'from-pink-500 to-rose-500' },
    { id: 35, name: 'dirleh_poster', image: '/dirleh_poster.jpg', group: 'Event Posters', color: 'from-pink-500 to-rose-500' },
    { id: 36, name: 'Easy_for', image: '/Easy_for.jpg', group: 'Miscellaneous', color: 'from-teal-500 to-cyan-500' },
    { id: 37, name: 'gb', image: '/gb.jpg', group: 'Miscellaneous', color: 'from-teal-500 to-cyan-500' },
    { id: 38, name: 'govt_cert', image: '/govt_cert.jpg', group: 'Certificates', color: 'from-slate-600 to-slate-800' },
    { id: 39, name: 'mining', image: '/mining.jpg', group: 'Miscellaneous', color: 'from-teal-500 to-cyan-500' },
    { id: 40, name: 'q1', image: '/q1.jpg', group: 'Premium Designs', color: 'from-violet-500 to-purple-500' },
    { id: 41, name: 'q2', image: '/q2.jpg', group: 'Premium Designs', color: 'from-violet-500 to-purple-500' },
    { id: 42, name: 'ramzan_calander', image: '/ramzan_calander.jpg', group: 'Event Posters', color: 'from-pink-500 to-rose-500' },
    { id: 43, name: 'revaaj_logo', image: '/revaaj_logo.jpg', group: 'Logo Design', color: 'from-red-600 to-orange-600' },
    { id: 44, name: 'sink_cert', image: '/sink_cert.jpg', group: 'Certificates', color: 'from-slate-600 to-slate-800' },
    { id: 45, name: 'cv_m', image: '/cv_m.jpg', group: 'Professional', color: 'from-blue-600 to-cyan-600' }
  ];

  // Group images by their group name
  const groupedItems = Array.from(
    allImages.reduce((map, img) => {
      if (!map.has(img.group)) {
        map.set(img.group, { group: img.group, color: img.color, items: [] });
      }
      map.get(img.group)!.items.push(img);
      return map;
    }, new Map<string, any>()).values()
  );

  return (
    <div className="bg-background min-h-screen font-sans overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-foreground font-bold text-lg hidden sm:inline tracking-tight">Qamar Abbas</span>
              <span className="text-accent font-light hidden sm:inline">Designer</span>
            </div>

            <div className="hidden sm:flex gap-8 items-center text-sm">
              <a href="#home" className="text-foreground hover:text-accent transition duration-300">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition duration-300">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition duration-300">Work</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition duration-300">Contact</a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden text-foreground"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden bg-card border-t border-border px-4 py-4 space-y-3">
            <a href="#home" className="block text-foreground hover:text-accent transition">Home</a>
            <a href="#about" className="block text-muted-foreground hover:text-foreground transition">About</a>
            <a href="#projects" className="block text-muted-foreground hover:text-foreground transition">Work</a>
            <a href="#contact" className="block text-muted-foreground hover:text-foreground transition">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/cding.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Creative Design Excellence
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Graphic Designer & Digital Marketer specializing in stunning menu designs, branding, and professional documents.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://qamarcv.tiiny.site" target="_blank" rel="noopener noreferrer">
                  <button className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition duration-300 transform hover:scale-105">
                    Download CV
                  </button>
                </a>
                <a href="https://Wa.me/+923062803553" target="_blank" rel="noopener noreferrer">
                  <button className="w-full sm:w-auto bg-transparent border-2 border-accent text-accent font-semibold py-3 px-8 rounded-lg hover:bg-accent/10 transition duration-300">
                    Get In Touch
                  </button>
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
                <span className="text-accent">→</span>
                <span>Scroll to explore my work</span>
                <ChevronDown className="w-4 h-4 animate-bounce ml-2 text-accent" />
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/30 rounded-2xl transform -rotate-6 opacity-20 blur-2xl"></div>
                <img
                  src="/qana.jpg"
                  alt="Qamar Abbas"
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-accent/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                  About Me
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a creative and passionate graphic designer with a knack for digital marketing. Specializing in creating visually compelling designs that captivate and convert audiences.
                </p>
                <p>
                  Based in Gilgit-Baltistan, Pakistan, I run a YouTube channel where I share insights and experiences in design and marketing, helping aspiring designers level up their skills.
                </p>
                <p>
                  With nearly a decade of experience, I've worked on diverse projects ranging from elegant restaurant menus to professional branding and marketing campaigns.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-2xl font-bold text-accent">100+</p>
                  <p className="text-sm text-muted-foreground">Projects Done</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-2xl font-bold text-accent">50+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-2xl font-bold text-accent">10y</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Expertise</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Menu Design</p>
                      <p className="text-sm text-muted-foreground">Restaurant & Hotel menus</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Logo & Branding</p>
                      <p className="text-sm text-muted-foreground">Visual identity design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Digital Marketing</p>
                      <p className="text-sm text-muted-foreground">Creative campaigns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Photo Editing</p>
                      <p className="text-sm text-muted-foreground">Professional retouching</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <a href="https://www.youtube.com/@UltraExplore" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.instagram.com/qmr.abbas12" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.192c2.713 0 3.035.01 4.105.06 1.036.05 1.789.217 2.427.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.248.64.415 1.391.465 2.427.05 1.07.06 1.392.06 4.105 0 2.713-.01 3.035-.06 4.105-.05 1.036-.217 1.789-.465 2.427-.254.66-.598 1.216-1.153 1.772a4.908 4.908 0 0 1-1.772 1.153c-.64.248-1.391.415-2.427.465-1.07.05-1.392.06-4.105.06-2.713 0-3.035-.01-4.105-.06-1.036-.05-1.789-.217-2.427-.465-.66-.254-1.216-.598-1.772-1.153a4.908 4.908 0 0 1-1.153-1.772c-.248-.64-.415-1.391-.465-2.427-.05-1.07-.06-1.392-.06-4.105 0-2.713.01-3.035.06-4.105.05-1.036.217-1.789.465-2.427.254-.66.598-1.216 1.153-1.772A4.908 4.908 0 0 1 6.468 2.717c.64-.248 1.391-.415 2.427-.465 1.07-.05 1.392-.06 4.105-.06z"/></svg>
                </a>
                <a href="https://www.facebook.com/Qmr.abbas12/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/qamar-balti-5a208611b/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-card -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">My Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set developed through years of professional experience in design and digital marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Graphic Design',
                skills: ['Photoshop', 'Illustrator', 'InDesign', 'CorelDRAW'],
                icon: '🎨'
              },
              {
                title: 'Digital Marketing',
                skills: ['SEO', 'Content Strategy', 'Social Media', 'Copywriting'],
                icon: '📱'
              },
              {
                title: 'Photography & Editing',
                skills: ['Portrait', 'Product', 'Retouching', 'Color Grading'],
                icon: '📸'
              }
            ].map((skill, idx) => (
              <div
                key={idx}
                className="group bg-card border border-border rounded-xl p-8 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">{skill.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{skill.title}</h3>
                <div className="space-y-2">
                  {skill.skills.map((s, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span className="text-muted-foreground">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Design Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of diverse design work across restaurant menus, hotel designs, and professional documents
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {['all', 'restaurant', 'hotel', 'professional'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-lg font-medium transition duration-300 ${
                  activeFilter === filter
                    ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/30'
                    : 'bg-card border border-border text-muted-foreground hover:border-accent hover:text-foreground'
                }`}
              >
                {filter === 'all' && 'All Projects'}
                {filter === 'restaurant' && 'Restaurant Menus'}
                {filter === 'hotel' && 'Hotel & Resorts'}
                {filter === 'professional' && 'Professional'}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent transition duration-300"
              >
                <div className="relative h-96 overflow-hidden bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <div>
                      <p className="text-accent text-sm font-semibold uppercase mb-1">View Details</p>
                      <p className="text-white">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-accent text-xs font-semibold uppercase tracking-wide mb-2">{item.category}</p>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Groups with Carousels */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Complete Portfolio Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through all design categories with interactive carousels
            </p>
          </div>

          <div className="space-y-12">
            {groupedItems.map((group) => (
              <CarouselGroup key={group.group} group={group} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/cding.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background -z-10"></div>

        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Ready to Create Something <span className="text-accent">Amazing</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate to bring your creative vision to life. Whether you need menu designs, branding, or marketing content, I'm ready to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="https://Wa.me/+923062803553" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto bg-accent text-accent-foreground font-semibold py-3 px-8 rounded-lg hover:bg-accent/90 transition duration-300 transform hover:scale-105 shadow-lg shadow-accent/30">
                  Start Chat on WhatsApp
                </button>
              </a>
              <a href="mailto:qmr.abbas12@gmail.com">
                <button className="w-full sm:w-auto bg-card border-2 border-accent text-accent font-semibold py-3 px-8 rounded-lg hover:bg-accent/10 transition duration-300">
                  Send Email
                </button>
              </a>
            </div>

            <div className="pt-8 text-sm text-muted-foreground">
              <p>+92 306 2803553 | qmr.abbas12@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2024 Qamar Abbas. All rights reserved. | Graphic Designer & Digital Marketer</p>
        </div>
      </footer>
    </div>
  );
}

function CarouselGroup({ group }: { group: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? group.items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === group.items.length - 1 ? 0 : prev + 1));
  };

  const visibleItems = group.items.length <= 3 
    ? group.items 
    : [
        group.items[currentIndex],
        group.items[(currentIndex + 1) % group.items.length],
        group.items[(currentIndex + 2) % group.items.length]
      ];

  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-card p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Group Header */}
      <div className="mb-8">
        <div className={`inline-block bg-gradient-to-r ${group.color} rounded-lg px-4 py-2 mb-4`}>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest">{group.group}</h3>
        </div>
        <p className="text-muted-foreground text-sm">
          {group.items.length} design{group.items.length !== 1 ? 's' : ''} in this collection
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleItems.map((item: any, idx: number) => (
            <div
              key={item.id}
              className="group relative bg-muted rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-semibold uppercase">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {group.items.length > 3 && (
          <div className="flex items-center justify-between pt-4">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 shadow-md hover:shadow-lg"
              aria-label="Previous items"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(group.items.length / 3) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * 3)}
                  className={`rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === idx
                      ? 'bg-accent w-8 h-2'
                      : 'bg-border hover:bg-muted-foreground w-2 h-2'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 shadow-md hover:shadow-lg"
              aria-label="Next items"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
