function Header(){
const {NavLink,Button,PhoneFrame}=window.AliceJuliaDesignSystem_3111c6;
const [scrolled,setScrolled]=React.useState(false);
React.useEffect(()=>{
const onScroll=()=>setScrolled(window.scrollY>40);
window.addEventListener('scroll',onScroll);return ()=>window.removeEventListener('scroll',onScroll);
},[]);
return React.createElement('header',{id:'top',style:{background:'var(--ivory)'}},
React.createElement('nav',{style:{
position:'sticky',top:0,zIndex:20,display:'flex',justifyContent:'center',gap:44,
padding:'22px 0',background:scrolled?'rgba(246,241,234,.92)':'transparent',
backdropFilter:scrolled?'blur(8px)':'none',
borderBottom:scrolled?'1px solid var(--border-default)':'1px solid transparent',
transition:'background var(--dur-med) var(--ease-standard),border-color var(--dur-med) var(--ease-standard)'
}},
React.createElement(NavLink,{href:'#about'},'About'),
React.createElement(NavLink,{href:'#portfolio'},'Portfolio'),
React.createElement(NavLink,{href:'#contact'},'Contact')
),
React.createElement('div',{style:{
maxWidth:'var(--content-max)',margin:'0 auto',padding:'var(--space-9) var(--content-pad) var(--space-8)',
display:'grid',gridTemplateColumns:'1.1fr 0.9fr',gap:'var(--space-8)',alignItems:'center'
}},
React.createElement('div',null,
React.createElement('h1',{style:{
margin:0,fontSize:'var(--text-display)',fontWeight:800,letterSpacing:'var(--tracking-tight)',
lineHeight:'var(--leading-tight)',color:'var(--ink)'
}},'Alice',React.createElement('br'),React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:18}},'Julia',React.createElement('span',{style:{width:16,height:16,borderRadius:'50%',background:'var(--accent)',display:'inline-block'}}))),
React.createElement('div',{style:{height:1,background:'var(--border-strong)',margin:'var(--space-6) 0 var(--space-4)',opacity:.5}}),
React.createElement('p',{style:{fontSize:'var(--text-body-lg)',color:'var(--text-secondary)',maxWidth:420,fontWeight:500}},'UGC content that performs — organic or paid.'),
React.createElement('div',{style:{display:'flex',gap:14,marginTop:'var(--space-6)'}},
React.createElement(Button,{variant:'primary',size:'lg',as:'a',href:'#contact',iconRight:true},'Work with me'),
React.createElement(Button,{variant:'outline',size:'lg',as:'a',href:'#portfolio'},'See portfolio')
)
),
React.createElement('div',{style:{display:'flex',justifyContent:'center'}},
React.createElement(PhoneFrame,{width:250,caption:'Intro reel'},
React.createElement('image-slot',{id:'hero-intro-video',style:{width:'100%',height:'100%'},placeholder:'Vertical intro video'})
)
)
)
);
}
window.Header=Header;
