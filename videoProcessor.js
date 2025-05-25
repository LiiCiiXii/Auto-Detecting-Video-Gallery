self.addEventListener('message', async (e) => {
    const file = e.data.file;
    const chunkSize = 1024 * 1024 * 10; // 10MB chunks
    let offset = 0;
    const id = e.data.id;
    const totalSize = file.size;

    try {
        const chunks = [];
        while (offset < totalSize) {
            const chunk = file.slice(offset, offset + chunkSize);
            const buffer = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = () => reject(new Error('File reading failed'));
                reader.readAsArrayBuffer(chunk);
            });
            chunks.push(buffer);
            offset += chunkSize;
            self.postMessage({ id, progress: (offset / totalSize) * 100 });
        }

        const blob = new Blob(chunks, { type: file.type });
        const url = URL.createObjectURL(blob);
        self.postMessage({
            id,
            url,
            title: file.name.replace(/\.[^/.]+$/, ""),
            fileName: file.name,
            size: totalSize,
            description: `Added from local file: ${file.name}`,
            progress: 100
        });
    } catch (error) {
        self.postMessage({ id, error: error.message });
    }
});