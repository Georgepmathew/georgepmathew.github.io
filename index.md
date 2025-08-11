<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EngineerGPM - Portfolio</title>
    <!-- Tailwind CSS CDN for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                }
            }
        }
    </script>
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    </style>
</head>

<body class="bg-gray-900 text-gray-200 font-sans leading-relaxed">
    <div class="container mx-auto p-4 md:p-8">

        <!-- Header Section -->
        <header class="text-center mb-12">
            <h1 class="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-2">EngineerGPM</h1>
            <p class="text-xl md:text-2xl text-gray-400">Innovating the future, one line of code at a time.</p>
        </header>

        <!-- Main Content Grid -->
        <main class="grid grid-cols-1 md:grid-cols-3 gap-8">

            <!-- About Me Card (Updated with your profile summary) -->
            <section class="bg-gray-800 rounded-lg shadow-lg p-6 md:col-span-2">
                <h2 class="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">About Me</h2>
                <div class="space-y-4 text-gray-300">
                    <p>
                        Hello! My name is GeorgenP Mathew. I am a Civil Engineer with a B.E. from Mar Ephraem College of Engineering and Technology, Anna University. My passion for building and problem-solving led me to explore various fields, and I am excited to announce that I will be pursuing my Master's degree in Materials Engineering at RWTH Aachen University in Aachen for the winter intake of 2025.
                    </p>
                    <p>
                        I'm focused on applying my knowledge to real-world projects and am interested in continuing to learn and develop in the field of engineering. This portfolio is a showcase of my projects and skills, which I've built through my academic and professional experiences.
                    </p>
                </div>
                <div class="mt-6">
                    <p class="text-xl font-medium text-gray-400">Skills:</p>
                    <ul class="flex flex-wrap gap-2 mt-2">
                        <li class="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">Civil Engineering</li>
                        <li class="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">Project Management</li>
                        <li class="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">AutoCAD</li>
                        <li class="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">SketchUp</li>
                        <li class="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">Adobe Illustrator</li>
                        <li class="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">Microsoft Office</li>
                    </ul>
                </div>
            </section>

            <!-- Social Media & Contact Card -->
            <aside class="bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 class="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">Contact & Social</h2>
                <ul class="space-y-4">
                    <!-- Social media links with icons -->
                    <li>
                        <a href="https://www.facebook.com/engineergpm" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-blue-500 hover:text-blue-400 transition-colors">
                            <i class="fab fa-facebook-f fa-lg"></i>
                            <span class="text-gray-300">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@EngineerGPM" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-red-500 hover:text-red-400 transition-colors">
                            <i class="fab fa-youtube fa-lg"></i>
                            <span class="text-gray-300">YouTube</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.threads.com/@engineergpm" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <i class="fab fa-threads fa-lg"></i>
                            <span class="text-gray-300">Threads</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/EngineerGPM" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <i class="fab fa-twitter fa-lg"></i>
                            <span class="text-gray-300">X (Twitter)</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/engineergpm/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-pink-500 hover:text-pink-400 transition-colors">
                            <i class="fab fa-instagram fa-lg"></i>
                            <span class="text-gray-300">Instagram</span>
                        </a>
                    </li>
                    <li class="border-t border-gray-700 pt-4">
                         <a href="mailto:georgepmathew424@gmail.com" class="flex items-center gap-4 text-emerald-400 hover:text-emerald-300 transition-colors">
                            <i class="fas fa-envelope fa-lg"></i>
                            <span class="text-gray-300">Email Me</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </main>

        <!-- Projects Section -->
        <section class="mt-8">
            <h2 class="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">My Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <!-- Project 1 Card -->
                <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
                    <img src="https://placehold.co/600x400/222/FFF?text=Project+1+Image" alt="Project 1" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-2">Project Title 1</h3>
                        <p class="text-gray-400 text-sm">
                            A brief description of your first project. Mention the technologies used and what it does.
                        </p>
                        <a href="#" class="mt-4 inline-block text-blue-400 hover:underline">
                            View on GitHub <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 2 Card -->
                <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
                    <img src="https://placehold.co/600x400/222/FFF?text=Project+2+Image" alt="Project 2" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-2">Project Title 2</h3>
                        <p class="text-gray-400 text-sm">
                            A brief description of your second project. Highlight its key features and impact.
                        </p>
                        <a href="#" class="mt-4 inline-block text-blue-400 hover:underline">
                            View on GitHub <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 3 Card -->
                <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
                    <img src="https://placehold.co/600x400/222/FFF?text=Project+3+Image" alt="Project 3" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-2">Project Title 3</h3>
                        <p class="text-gray-400 text-sm">
                            A brief description of your third project. Describe the problem it solves and your role.
                        </p>
                        <a href="#" class="mt-4 inline-block text-blue-400 hover:underline">
                            View on GitHub <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>
        </section>

        <!-- Footer -->
        <footer class="mt-12 text-center text-gray-500">
            <p>&copy; 2025 EngineerGPM. All Rights Reserved.</p>
        </footer>

    </div>
</body>
</html>
