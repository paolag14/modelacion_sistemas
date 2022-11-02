//Paola Elizabeth Gómez Martínez A01633772
//Challenge 2 - Lines drawing algorithm with Processing
//Hecho en editor en línea

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    dibujar_linea(1,2,100,20);
    dibujar_linea(10,200,50,10);
    dibujar_linea(300,300, 10,10);
    dibujar_linea(200,300, 250,50);
    dibujar_linea(350,350, 100, 300);
  }
  
  
  //Algoritmo de Bresenham para dibujar líneas
  let dibujar_linea = (x1, y1, x2, y2) => {
      let x, y, delta_x, delta_y, delta_x1, delta_y1, xd_error, yd_error, x_error, y_error, i;
    
      // Cálculo de deltas
      delta_x = x2 - x1;
      delta_y = y2 - y1;
    
      delta_x1 = Math.abs(delta_x);
      delta_y1 = Math.abs(delta_y);
    
      // Calcular intervalos de error 
      xd_error = 2 * delta_y1 - delta_x1;
      yd_error = 2 * delta_x1 - delta_y1;
      
      // La línea domina en el eje x
      if (delta_y1 <= delta_x1) {
          if (delta_x >= 0) {
              x = x1;
              y = y1;
              x_error = x2;
          } 
        
          else { 
              x = x2;
              y = y2;
              x_error = x1;
          }
          
          //Dibujar primer punto
          point(x, y);
          for (i = 0; x < x_error; i++) {
              x = x + 1;
              if (xd_error < 0) {
                  xd_error = xd_error + 2 * delta_y1;
              } 
            
              else {
                  if ((delta_x < 0 && delta_y < 0) || (delta_x > 0 && delta_y > 0)) {
                      y = y + 1;
                  }
                
                  else {
                      y = y - 1;
                  }
                
                  xd_error = xd_error + 2 * (delta_y1 - delta_x1);
              }
            
              point(x, y);
          }
      } 
      
      // La línea domina en el eje y
      else { 
          if (delta_y >= 0) {
              x = x1;
              y = y1;
              y_error = y2;
          }
        
          else { 
              x = x2;
              y = y2; 
              y_error = y1;
          }
          
          //Dibujar primer punto
          point(x, y); 
        
          for (i = 0; y < y_error; i++) {
              y = y + 1;
              if (yd_error <= 0) {
                  yd_error = yd_error + 2 * delta_x1;
              }
            
              else {
                  if ((delta_x < 0 && delta_y<0) || (delta_x > 0 && delta_y > 0)) {
                      x = x + 1;
                  }
                
                  else {
                      x = x - 1;
                  }
                
                  yd_error = yd_error + 2 * (delta_x1 - delta_y1);
              }
      
              point(x, y);
          }
      }
   }