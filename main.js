window.onload=function(){ //entry point
}
var w=[2];
var m=1;
var buffer='';
var reset=function(){
  var str=input.value;
  w=str.split(',').map(function(e){return parseInt(e);});
  buffer='0:'+w.toString()+'\n';
  output.value=buffer;
  m=1;
};
var inc=function(){
  var n=w.length;
  if(n==0){
    return;
  }else if(w[n-1]==0){
    w1=w.slice(0,n-1);
  }else{
    var k=-1;
    for(var i=n-2;i>=0;i--){
      if(w[i]<w[n-1]){
        k=i;
        break;
      }
    }
    if(k==-1){
        g=[];
        b=w.clone();
        b[b.length-1]--;
    }else{
        g=w.slice(0,k+1);
        b=w.slice(k+1,n);
        b[b.length-1]--;
    }
    var w1=g;
    for(mi=0;mi<m+1;mi++){
      w1=w1.concat(b);
    }
  }
  
  buffer=m+":"+w1.toString()+'\n'+buffer;
  output.value=buffer;
  debug.value="g="+g.toString()+";b="+b.toString();
  w=w1;
  m++;
}
