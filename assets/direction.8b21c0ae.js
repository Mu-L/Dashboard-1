var E=(T=>(T[T.SCREEN_CENTER=0]="SCREEN_CENTER",T[T.TOP_START=1]="TOP_START",T[T.TOP_CENTER=2]="TOP_CENTER",T[T.TOP_END=3]="TOP_END",T[T.RIGHT_START=4]="RIGHT_START",T[T.RIGHT_CENTER=5]="RIGHT_CENTER",T[T.RIGHT_END=6]="RIGHT_END",T[T.BOTTOM_END=7]="BOTTOM_END",T[T.BOTTOM_CENTER=8]="BOTTOM_CENTER",T[T.BOTTOM_START=9]="BOTTOM_START",T[T.LEFT_END=10]="LEFT_END",T[T.LEFT_CENTER=11]="LEFT_CENTER",T[T.LEFT_START=12]="LEFT_START",T))(E||{});const A=[];for(const T in E)if(isNaN(T)){const a=T.split("_").map(p=>{const s=p.toLocaleLowerCase();return s.charAt(0).toUpperCase()+s.substring(1)});A.push({label:a.join(" "),value:E[T]})}function o(T,a,p=8){const{width:s,height:O,top:_,left:R}=T.getBoundingClientRect(),{width:t,height:C,offset:N=10}=a,h={[0]:[window.innerWidth/2-t/2,window.innerHeight/2-C/2],[1]:[R,_-C-N],[2]:[R+s/2-t/2,_-C-N],[3]:[R+s-t,_-C-N],[4]:[R+s+N,_],[5]:[R+s+N,_+O/2-C/2],[6]:[R+s+N,_+O-C],[7]:[R+s-t,_+O+N],[8]:[R+s/2-t/2,_+O+N],[9]:[R,_+O+N],[10]:[R-t-N,_+O-C],[11]:[R-t-N,_+O/2-C/2],[12]:[R-t-N,_]},d=[R+s/2,_+O/2];return[...h[p],...d]}export{A as d,o as g};