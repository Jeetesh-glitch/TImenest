// Function to handle button navigation
function navigate(section) {
  alert(`Navigating to ${section}`);
  // Example: Navigate to different pages (assuming pages like theme.html, music.html, etc.)
  switch(section) {
    case 'theme':
      window.location.href = 'theme.html'; // Adjust to your actual page or section link
      break;
    case 'music':
      window.location.href = 'music.html';
      break;
    case 'home':
      window.location.href = 'home.html';
      break;
    case 'todo':
      window.location.href = 'todo.html';
      break;
    default:
      alert('Page not found');
  }
}

// Function to set the background video
function setBackground(videoSrc) {
  // Add a full-screen video element as background
  let existingBackground = document.querySelector('.background-video');
  if (existingBackground) {
    existingBackground.src = videoSrc; // Update the source if already exists
  } else {
    // Create a new video element if not already present
    const video = document.createElement('video');
    video.classList.add('background-video');
    video.src = videoSrc;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1';
    document.body.appendChild(video);
  }
}
