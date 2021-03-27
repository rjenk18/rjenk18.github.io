function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = readLine();
    let area = (PI * Math.pow(r, 2));
    let permimeter = (2 * PI * r);
    
    // Print the area of the circle:
    console.log(area);
    // Print the perimeter of the circle:
    console.log(permimeter);