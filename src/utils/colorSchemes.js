export function generateColors(scheme) {
    const randomColor = () => 
        `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    if (scheme === 'monochromatic') {
        const base = randomColor();
        return Array(5)
            .fill(base)
            .map((color, i) => `${color}${Math.max(0, i * 20).toString(16)}`);
    } else if (scheme === 'analogous'){
        return Array.from({ length: 5 }, () => randomColor());
    }
    return Array.from({ length: 5 }, () => randomColor());
}