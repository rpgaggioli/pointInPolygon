
var add = require("robust-sum")
var mult = require("two-product")

module.exports = function inPoly( P , q ) {

	var i;
	var i1;
	var d;
	var X = 0;
	var Y = 1;
	var n = P.length;
	var DIM = q.length;
	var rCross = 0;
	

	for ( i = 0; i < n; i++) {
		for ( d = 0 ; d < DIM ; d++){
			P[i][d] = add(P[i][d], -q[d]);
		}
	}

	for ( i = 0; i < n; i++){
		i1 = ( i + n - 1 ) % n 
		
		if  ( (P[i] [Y] > 0) && (P[i1][Y] <= 0) ) || 
			( (P[i1][Y] > 0) && (P[i] [Y] <= 0) ) ) {
		
			intersection = mult( add( mult(P[i][X], P[i1][Y]) , -mult(P[i1][X], P[i][Y])) , (add(P[i1][Y], -P[i][Y]))^(-1) )
		
			if (intersection > 0) {
				rCross++
			}
		
		}
	}
	

	return rCross%2;
	// 1 if in, 0 if out
}




