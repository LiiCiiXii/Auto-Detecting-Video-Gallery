async function getAvailableVideos() {
    try {
        const response = await fetch('/api/videos');
        return await response.json();
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
}