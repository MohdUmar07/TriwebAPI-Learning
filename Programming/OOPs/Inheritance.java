// Inheritance ---

class Shape {
    public void area() {
      System.out.println("Print the area");
    }
  }
  
  class Triangle extends Shape {
    public void area(int l, int h) {
      System.out.println("Area of Triangle: " + 0.5 * l * h);
    }
  }
  
  public class Inheritance {
  
    public static void main(String[] args) {
      Triangle t1 = new Triangle();
      t1.area(); 
      t1.area(5, 6);
    }
  }
  