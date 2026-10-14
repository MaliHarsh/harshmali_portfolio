// CONCEPTUAL RECONSTRUCTION — not the original CAD or manufacturing drawing.
// Dimensions in mm are illustrative. Verify geometry, clearances, and interfaces.
side=110; rail=14; depth=10; center_height=105;
module bar(c,s){translate(c) cube(s,center=true);}
union(){
 bar([0,0,5],[130,65,10]);
 bar([0,0,17],[28,28,24]);
 translate([0,0,center_height]) rotate([0,45,0]) {
  bar([0,0,side/2],[side+rail,depth,rail]);
  bar([0,0,-side/2],[side+rail,depth,rail]);
  bar([side/2,0,0],[rail,depth,side-rail]);
  bar([-side/2,0,0],[rail,depth,side-rail]);
 }
 bar([0,0,center_height],[156,10,10]);
 bar([0,0,center_height],[24,16,24]);
}
