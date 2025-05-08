document.querySelectorAll('.video-container').forEach(container => {
    const thumbnail = container.querySelector('.video-thumbnail');
    const video = container.querySelector('video');

    thumbnail.addEventListener('click', () => {
        thumbnail.style.opacity = '0'; // Hide thumbnail smoothly
        setTimeout(() => thumbnail.style.display = 'none', 300); // Remove from DOM after fade
        video.play(); // Start playing the video
    });

    video.addEventListener('pause', () => {
        thumbnail.style.display = 'block';
        setTimeout(() => thumbnail.style.opacity = '1', 10); // Show thumbnail when paused
    });
});
