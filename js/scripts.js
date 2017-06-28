function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return a*h/2
	} else {
		return console.error('nieprawidłowe dane');
	}
}
var triangle1Area = getTriangleArea(10, -15);
console.log(triangle1Area);
var triangle2Area = getTriangleArea(8, 3);
console.log(triangle2Area);
var triangle3Area = getTriangleArea(20, 21);
console.log(triangle3Area);