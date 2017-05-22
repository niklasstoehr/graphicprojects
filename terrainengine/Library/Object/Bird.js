var Bird = function () {

	var scope = this;

	THREE.Geometry.call( this );

	v(   20,   0,   0 );
	v( - 20, - 8,   0 );
	v( - 20,   0,   0 );
	v( - 20, - 8, 	0 );

	v(   0,   8, - 24 );
	v(   0,   8,   24 );
	v(   8,   0,   0 );
	v( - 12,   0,   0 );

	f3( 0, 2, 1 );
	f3( 4, 7, 6 );
	f3( 5, 6, 7 );

	this.computeFaceNormals();

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vector3( x, y, z ) );

	}

	function f3( a, b, c ) {

		scope.faces.push( new THREE.Face3( a, b, c ) );

	}

}

Bird.prototype = Object.create( THREE.Geometry.prototype );
Bird.prototype.constructor = Bird;
