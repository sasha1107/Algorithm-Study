function solution(dots) {
    const x = dots.map(n => n[0]);
    const y = dots.map(n => n[1]);

    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}