window.onload=function(){ //entry point
}
var w=[1,1];
var m=1;
var buffer='';
var reset=function(){
  var str=input.value;
  w=str.split(',').map(function(e){return parseInt(e);});
  buffer='0:'+wormToString(w)+'\n';
  output.value=buffer;
  m=1;
};
var inc=function(){
  var n=w.length;
  if(n==0){
    return;
  }else if(w[n-1]==0){
    var k=n-1;
    while(k>0){
      if(w[k-1]!=0){
        break;
      }else{
        k--;
        m++;
      }
    }
    w1=w.slice(0,k);
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
  
  buffer=m+":"+wormToString(w1)+'\n'+buffer;
  output.value=buffer;
//  debug.value="g="+g.wormToString()+";b="+b.wormToString();
  w=w1;
  m++;
}
var wormToString=function(a){
  if(a.length==0)return "[]";
  ret="[";
  for(var i=0;i<a.length;i++){
    var c=1;
    var ti=a[i];
    for(var j=i+1;j<a.length;j++){
      if(ti==a[j]){
        c++;
      }else{
        break;
      }
    }
    if(c==1){
      ret+=ti;
    }else{
      ret+=ti+"^"+c;
      i+=c-1;
    }
    if(i<a.length-1) ret+=",";
  }
  return ret+"]";
};

