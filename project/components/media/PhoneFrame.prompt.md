iPhone-style bezel (rounded body + dynamic-island notch) used consistently around every embedded UGC video and case study, per the brief.

```jsx
<PhoneFrame width={220} caption="Beauty · Serum demo">
  <video src="clip.mp4" style={{width:'100%',height:'100%',objectFit:'cover'}} />
</PhoneFrame>
```
Pure CSS chrome — no photos or real device art. Drop any 9:16 video or image inside as children; it fills the screen area automatically.
