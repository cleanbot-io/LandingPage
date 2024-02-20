# Cleanbot
#### On-demand housekeeping service

## Getting Started

First, install packages:
```bash
yarn
```

secondly, run the development server:
```bash
yarn dev
```


## Style Guide
When using an Image or img
```code 
import Image from "next/image";
```
Use Next's Image tag <Image> inplace of <img> or <image>
while they work, it is not optimal for Next and Vercel throws errors upon compilation.
- Make sure to assign a alt tag so it's  < Image alt='bedroom image' width='1000' height='100' >
also assign each image: width and height props

When using apostrophe
Use HTML entities for typography
so no hard coding ' instead use a code &lsquo; &prime; or &ldquo;
This way we are not getting errors on Vercel and it keeps NextJS happy

## Misc Info
Package to use:
https://keen-slider.io/examples#examples

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Photo Credits:
https://www.behance.net/gallery/60644969/Bathroom-wood-stone
by artist - Nataliya Yahela

https://www.behance.net/gallery/173629859/Living-Room-Interior-Design
by artist - Giorgi Mamaladze

https://unsplash.com/photos/white-and-gray-optical-illusion
by artist - JJ Ying

## Old landing page
https://lucid-tesla-2d8d82.netlify.app
