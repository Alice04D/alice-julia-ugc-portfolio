function ServicesDeliverables(){
const {SectionHeading,ServiceCard}=window.AliceJuliaDesignSystem_3111c6;
function DeliverableCard({title,body}){
const [hover,setHover]=React.useState(false);
return React.createElement('div',{
onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),
style:{
border:'1.5px solid',borderColor:hover?'var(--accent)':'var(--border-default)',
borderRadius:'var(--radius-md)',padding:'var(--space-6)',height:'100%',
transform:hover?'translateY(-4px)':'none',
boxShadow:hover?'var(--shadow-card-hover)':'none',
transition:'transform var(--dur-med) var(--ease-standard),box-shadow var(--dur-med) var(--ease-standard),border-color var(--dur-med) var(--ease-standard)'
}},
React.createElement('h3',{style:{margin:'0 0 12px',fontSize:'var(--text-h3)',fontWeight:800,color:hover?'var(--accent)':'var(--ink)',transition:'color var(--dur-med) var(--ease-standard)'}},title),
React.createElement('p',{style:{margin:0,fontSize:'var(--text-small)',color:'var(--text-secondary)',lineHeight:'var(--leading-body)'}},body)
);
}
const services=[
{title:'Base Rates',description:'Platform-native UGC tailored to your brand, voice, and audience. 1 additional revision per video included.',items:['1 video — £110–160','3 videos — £300–450','5 videos — £475–700'],price:'From £110'},
{title:'Extra Usage Rights',description:'Beyond organic/social use.',items:['Paid ads, 3 months — £75–100','Paid ads, 6–12 months — £150–250','Perpetual buyout — £500–700'],price:'From £75',dark:true},
{title:'Extra Hooks',description:'A/B test entry points to find the strongest one.',items:['Per extra hook — £50'],price:'£50'},
{title:'Whitelisting',description:'Spark Ads / Partnership Ads access only — never full account login.',items:['1 month — £200','3 months — £500–550','6 months — £900–1,000'],price:'From £200',dark:true},
{title:'Raw Footage',description:'Unedited footage for your team to re-cut and repurpose.',items:['Per video — £60'],price:'£60'},
{title:'Script & Brief Writing',description:'From a single script to a full shot-ready brief.',items:['Single script — £35–45','Full brief — £70–90','Bundle of 5 — from £150'],price:'From £35',dark:true}
];
const deliverables=[
['Turnaround Time','Standard turnaround is typically 5–7 business days from receiving the brief and product delivery, with timelines varying depending on project scope.'],
['Revisions','One round of revisions is included to ensure the final content aligns with your vision and brief. Additional revisions can be discussed if further edits are required.'],
['Content & Delivery','Final assets are edited in CapCut and delivered ready to use in high-resolution format, optimised for platform-native performance. Raw footage or additional asset requests can be arranged as add-ons.']
];
return React.createElement(React.Fragment,null,
React.createElement('section',{style:{background:'var(--ivory)',padding:'var(--space-9) var(--content-pad)'}},
React.createElement('div',{style:{maxWidth:'var(--content-max)',margin:'0 auto'}},
React.createElement(Reveal,null,React.createElement(SectionHeading,{eyebrow:'Rates',title:'Services & Pricing'})),
React.createElement('div',{style:{marginTop:'var(--space-8)',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-6)'}},
services.map((s,i)=>React.createElement(Reveal,{key:i,delay:(i%3)*90},React.createElement(ServiceCard,s)))
)
)
),
React.createElement('section',{style:{background:'var(--ivory)',padding:'0 var(--content-pad) var(--space-9)'}},
React.createElement('div',{style:{maxWidth:'var(--content-max)',margin:'0 auto'}},
React.createElement(Reveal,null,React.createElement(SectionHeading,{eyebrow:'What to expect',title:'Deliverables'})),
React.createElement('div',{style:{marginTop:'var(--space-8)',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-6)'}},
deliverables.map(([t,d],i)=>React.createElement(Reveal,{key:i,delay:i*100},
React.createElement(DeliverableCard,{title:t,body:d})
))
)
)
)
);
}
window.ServicesDeliverables=ServicesDeliverables;
