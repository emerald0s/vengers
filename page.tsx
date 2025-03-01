<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asaf Venger's Digital Footprint</title>
    <style>
        /* Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif; /* Improved typography */
            background-color: rgb(249, 250, 251);
            min-height: 100vh;
            overflow-x: hidden; /* Avoid horizontal scrolling */
        }

        header {
            background: linear-gradient(to right, #3b82f6, #4f46e5);
            color: white;
            padding: 2rem 1rem;
            text-align: center;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: bold;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 1rem;
        }

        .about-section {
            background: white;
            max-width: 48rem;
            margin: 0 auto 4rem auto;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .about-section h2 {
            font-size: 1.875rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .about-section p {
            text-align: center;
            color: #4b5563;
        }

        /* Responsive Gallery */
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Flexible grid */
            gap: 1.5rem;
        }

        .gallery-item {
            position: relative;
            aspect-ratio: 1;
            overflow: hidden;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: transform 0.2s;
        }

        .gallery-item:hover {
            transform: scale(1.02);
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0; /* For fade-in animation */
            transition: opacity 0.5s ease-in-out;
        }

        .gallery-item img.loaded {
            opacity: 1; /* Fade-in effect */
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            z-index: 1000;
            padding: 1rem;
            align-items: center;
            justify-content: center;
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
        }

        .modal-content img {
            max-width: 100%;
            max-height: 90vh;
            object-fit: contain;
        }

        .close-button {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: white;
            border: none;
            border-radius: 50%;
            width: 2.5rem;
            height: 2.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1010;
        }

        .close-button:hover {
            background: #f3f4f6;
        }

        /* Fixed Navigation Arrows */
        .nav-button {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            background: white;
            border: none;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1010;
            transition: background-color 0.2s;
        }

        .prev-button {
            left: 1rem;
        }

        .next-button {
            right: 1rem;
        }

        .nav-button svg {
            width: 24px;
            height: 24px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Asaf Venger's Digital Footprint</h1>
    </header>

    <main class="container">
        <section class="about-section">
            <h2>About Me</h2>
            <p dir="rtl">שלום, שמי אסף ונגר, ואני חבר וחניך גאה בארגון הטרור "כנפיים של קרמבו". יש האומרים אפילו שזה ארגון הטרור האהוב עלי. בנוסף לזה אני נאו נאצי🙋‍♂️🇩🇪🐐👑.</p>
        </section>

        <div class="gallery">
            <div class="gallery-item">
                <img src="pics/GetImage.jpg" alt="Image 1">
            </div>
            <div class="gallery-item">
                <img src="pics/90089185_136133974609628_2531136854858509099_n.jpg" alt="Image 2">
            </div>
            <div class="gallery-item">
                <img src="pics/89477420_498120114432834_6004819497717677126_n.jpg" alt="Image 3">
            </div>
            <div class="gallery-item">
                <img src="pics/89385354_204197647483331_4226804155895057781_n.jpg" alt="Image 4">
            </div>
            <div class="gallery-item">
                <img src="pics/90031306_506891396668004_6301638787155542718_n.jpg" alt="Image 5">
            </div>
        </div>
    </main>

    <div class="modal" id="imageModal" onclick="closeModal()">
        <div class="modal-content" onclick="event.stopPropagation()">
            <button class="close-button" onclick="closeModal()">✕</button>
            <button class="nav-button prev-button" onclick="navigateImage(-1)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button class="nav-button next-button" onclick="navigateImage(1)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <img id="modalImage" src="/placeholder.svg" alt="Full size image">
        </div>
    </div>

    <script>
        const images = [
            "pics/GetImage.jpg",
            "pics/90089185_136133974609628_2531136854858509099_n.jpg",
            "pics/89477420_498120114432834_6004819497717677126_n.jpg",
            "pics/89385354_204197647483331_4226804155895057781_n.jpg",
            "pics/90031306_506891396668004_6301638787155542718_n.jpg"
        ];

        let currentImageIndex = 0;

        function openModal(index) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            currentImageIndex = index;
            modal.classList.add('active');
            modalImg.src = images[currentImageIndex];
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            modal.classList.remove('active');
        }

        function navigateImage(direction) {
            currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
            const modalImg = document.getElementById('modalImage');
            modalImg.src = images[currentImageIndex];
        }

        // Close modal when pressing escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            } else if (event.key === 'ArrowLeft') {
                navigateImage(-1);
            } else if (event.key === 'ArrowRight') {
                navigateImage(1);
            }
        });

        // Add click event listeners to gallery items
        document.addEventListener('DOMContentLoaded', () => {
            const galleryItems = document.querySelectorAll('.gallery-item img');
            galleryItems.forEach((img, index) => {
                img.addEventListener('click', () => openModal(index));
                img.onload = () => img.classList.add('loaded'); // Fade-in animation
            });
        });
    </script>
</body>
</html>
