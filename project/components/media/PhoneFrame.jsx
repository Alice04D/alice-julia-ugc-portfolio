import React from 'react';
export function PhoneFrame({children,caption,width=240}){
const h=width*2.05;
return React.createElement('figure',{style:{margin:0,display:'inline-flex',flexDirection:'column',alignItems:'center',gap:14}},
React.createElement('div',{style:{
width,height:h,borderRadius:width*0.19,background:'var(--ink)',padding:width*0.035,
boxShadow:'var(--shadow-phone)',position:'relative'
}},
React.createElement('div',{style:{
width:'100%',height:'100%',borderRadius:width*0.16,overflow:'hidden',position:'relative',
background:'var(--surface-alt)',display:'flex',alignItems:'center',justifyContent:'center'
}},
React.createElement('div',{style:{
position:'absolute',top:width*0.045,left:'50%',transform:'translateX(-50%)',
width:width*0.32,height:width*0.075,borderRadius:width*0.05,background:'var(--ink)',zIndex:2
}}),
children)),
caption&&React.createElement('figcaption',{style:{fontSize:'var(--text-small)',color:'var(--text-secondary)',textAlign:'center',maxWidth:width}},caption)
);
}
