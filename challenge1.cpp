//Paola Elizabeth Gómez Martínez A01633772
//Challenge 1 - Lines drawing algorithm

#include <iostream>
using namespace std;

//Función para imprimir puntos de la línea
void listPoints(pair<double, double> point1, pair<double, double> point2 ) {
    int x1 = point1.first, y1 = point1.second, x2 = point2.first, y2 = point2.second;
	int slope = 2 * (y2 - y1);
	int slope_error = slope - (x2 - x1);
	for (int x = x1, y = y1; x <= x2; x++) {
		cout << "(" << x << "," << y << ") ";
		slope_error += slope;

		if (slope_error >= 0) {
			y++;
			slope_error -= 2 * (x2 - x1);
		}
	}
}

int main() {

    //Punto 1
    pair<double, double> point1 = make_pair(1, 2);
    //Punto 2
    pair<double, double> point2 = make_pair(12, 6);
    
    listPoints(point1, point2);

    

	return 0;
}
