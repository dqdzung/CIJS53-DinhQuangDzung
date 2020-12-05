const distance = (a,b) => {
    return Math.sqrt(((b.x - a.x)**2 + (b.y - a.y)**2));
}
export {distance};