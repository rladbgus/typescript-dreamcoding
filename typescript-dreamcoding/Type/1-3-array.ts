{
    // Array
    const fruits: string[] = ['π', 'π'];
    const scroes: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) {}
  
    // Tuple -> interface, type alias, class
    let student: [string, number];
    // μΈλ±μ€ μ¬μ©νλ λ°©λ²μ μΆμ²νμ§ μμ!!!
    student = ['name', 123];
    student[0]; // name
    student[1]; // 123
    
    const [name, age] = student;
  }
  