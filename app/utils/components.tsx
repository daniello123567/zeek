"use client"
import React, { useEffect, useRef, useState } from 'react'
import LocalFont from 'next/font/local'
import gsap from 'gsap';
import Image from 'next/image';
import { Car, carInf, search, showStuff, standard } from './utlils';
import { Draggable, ScrambleTextPlugin } from 'gsap/all';
import SplitText from 'gsap/SplitText';
const Aeo = LocalFont({ src: '../../public/fonts/AeonikPro-Regular.woff2' });
const IMB = LocalFont({ src: "../../public/fonts/IBMPlexMono-Medium.ttf" });

const Header = () => {
  return <div className='flex z-50 px-[1em]  fixed top-[1em] left-0 right-0  justify-between w-full items-center'>
    <div className='p-[0.2em] pr-[0.3em]  w-fit border-1 border-[hsla(0,0%,54%,.102)] cursor-pointer bg-[oklab(0 0 0/0.2)]  backdrop-blur-lg  rounded-[2px]'>
      <svg className='w-full h-full' width="93" height="24" viewBox="0 0 93 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7202 21.5554H15.0706V14.4755L9.42012 8.74527V2.44172H20.7202V21.5554ZM1.88483 21.5554V2.44172H7.53529V9.53627L13.1857 15.2665V21.5554H1.88483ZM22.6034 0.532715H0V23.4669H22.6034V0.532715ZM40.2434 8.28208L34.3853 14.4796H39.9379V15.7444H31.305V15.7232L37.1632 9.52567H31.6316V8.26006H40.2451V8.28208H40.2434ZM76.8708 15.7428L71.458 11.8791V15.7428H69.9498V8.25843H71.458V11.8579L76.7188 8.25843H79.0401L73.7574 11.8359L79.2244 15.7428H76.8708ZM92.1022 15.7428L88.002 12.9474H88.7625C90.2045 12.9474 91.4734 12.1107 91.4734 10.6804V10.5809C91.4734 9.12853 90.1939 8.25843 88.7076 8.25843H82.6991V15.7428H84.2064V11.8367L89.8755 15.7428H92.1022ZM84.2064 9.52567H88.7407C89.3049 9.52567 89.8254 9.75726 89.9781 10.2196C89.9886 10.2971 89.9992 10.4944 89.9992 10.6942C89.9992 10.8924 89.9886 11.0897 89.9781 11.1672C89.8254 11.5749 89.3049 11.8277 88.7407 11.8277H84.2064V9.52567ZM52.5005 14.4127V15.7444H44.8302V8.26006H52.5005V9.59253H46.2964V11.199H52.1756V12.5323H46.2964V14.4144H52.4997L52.5005 14.4127ZM65.0607 14.4127V15.7444H57.392V8.26006H65.0615V9.59253H58.8574V11.199H64.7366V12.5323H58.8574V14.4144H65.0615L65.0607 14.4127Z" fill="white"></path></svg>
    </div>

    <div className='h-full w-fit flex gap-[1em]'>
      <div className='p-[.2em] h-[32.2px] bg-[oklab(0 0 0/0.2)] border-1 border-[hsla(0,0%,54%,.102)] backdrop-blur-sm'>
        <svg className=' cursor-pointer' width="24" height="24" fill="white" version="1.1" id="Capa_1" viewBox="0 0 48.997 48.998"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M45.961,18.702c-0.033-0.038-0.061-0.075-0.1-0.112l-1.717-1.657c1.424-0.323,2.957-1.516,2.957-2.74 c0-1.426-1.979-1.932-3.668-1.932c-1.766,0-1.971,1.21-1.992,2.065l-4.43-4.271c-0.9-0.891-2.607-1.592-3.883-1.592H24.5h-0.002 h-8.63c-1.275,0-2.981,0.701-3.882,1.592l-4.429,4.271c-0.023-0.855-0.228-2.065-1.992-2.065c-1.691,0-3.669,0.506-3.669,1.932 c0,1.224,1.534,2.417,2.958,2.74l-1.717,1.657c-0.039,0.037-0.066,0.074-0.1,0.112C1.2,20.272,0,23.184,0,25.297v6.279 c0,1.524,0.601,2.907,1.572,3.938v2.435c0,1.424,1.192,2.585,2.658,2.585h3.214c1.466,0,2.657-1.159,2.657-2.585v-0.623h14.397 H24.5h14.396v0.623c0,1.426,1.19,2.585,2.658,2.585h3.213c1.467,0,2.657-1.161,2.657-2.585v-2.435 c0.972-1.031,1.572-2.414,1.572-3.938v-6.279C48.998,23.184,47.798,20.272,45.961,18.702z M13.613,11.953 c0.623-0.519,1.712-0.913,2.255-0.913h8.63H24.5h8.63c0.543,0,1.632,0.394,2.255,0.913l5.809,5.63H24.5h-0.002H7.805L13.613,11.953 z M1.993,24.347c0-1.546,1.21-2.801,2.704-2.801c1.493,0,6.372,2.864,6.372,4.41s-4.879,1.188-6.372,1.188 C3.203,27.144,1.993,25.894,1.993,24.347z M10.102,34.573H9.587H9.072l-3.055,0.005c-0.848-0.264-1.446-0.572-1.869-0.903 c-0.214-0.167-0.378-0.341-0.506-0.514c-0.129-0.175-0.223-0.347-0.284-0.519c-0.38-1.074,0.405-2.061,0.405-2.061h5.214 l3.476,3.99L10.102,34.573L10.102,34.573z M31.996,34.575H24.5h-0.002h-7.496c-1.563,0-2.832-1.269-2.832-2.831h10.328H24.5h10.328 C34.828,33.308,33.559,34.575,31.996,34.575z M32.654,29.812H24.5h-0.002h-8.154c-1.7,0-3.08-2.096-3.08-4.681h11.234H24.5h11.234 C35.734,27.717,34.354,29.812,32.654,29.812z M45.641,32.644c-0.062,0.172-0.156,0.344-0.285,0.518 c-0.127,0.173-0.291,0.347-0.506,0.514c-0.422,0.331-1.021,0.641-1.869,0.903l-3.055-0.005h-0.515h-0.515h-2.353l3.478-3.99h5.213 C45.234,30.583,46.02,31.568,45.641,32.644z M44.301,27.144c-1.492,0-6.371,0.356-6.371-1.188s4.879-4.41,6.371-4.41 c1.494,0,2.704,1.255,2.704,2.801C47.005,25.892,45.795,27.144,44.301,27.144z"></path> </g> </g></svg>
      </div>
      <div className='p-[.2em] h-[32.2px] bg-[oklab(0 0 0/0.2)] border-1 border-[hsla(0,0%,54%,.102)] backdrop-blur-sm'>
        <svg width="24" height="24" viewBox="0 0 28 25" fill="white" xmlns="http://www.w3.org/2000/svg"><rect x="1.5625" y="0.0610352" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.53;"></rect><rect x="1.5625" y="3.71973" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.6031;"></rect><rect x="1.5625" y="7.37793" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.1" className="opacity: 0.83;"></rect><rect x="1.5625" y="11.0366" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.1" className="opacity: 0.5878;"></rect><rect x="1.5625" y="14.6953" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.1" className="opacity: 0.6046;"></rect><rect x="1.5625" y="18.3535" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.45" className="opacity: 0.6278;"></rect><rect x="1.5625" y="22.0122" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.7" className="opacity: 0.5047;"></rect><rect x="5.95117" y="0.0610352" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.15" className="opacity: 0.5405;"></rect><rect x="5.95117" y="3.71973" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.15" className="opacity: 0.4232;"></rect><rect x="5.95117" y="7.37793" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.3263;"></rect><rect x="5.95117" y="11.0366" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.7352;"></rect><rect x="5.95117" y="14.6953" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.6476;"></rect><rect x="5.95117" y="18.3535" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.8278;"></rect><rect x="5.95117" y="22.0122" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.7951;"></rect><rect x="10.3418" y="0.0610352" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.4516;"></rect><rect x="10.3418" y="3.71973" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.4639;"></rect><rect x="10.3418" y="7.37793" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.4478;"></rect><rect x="10.3418" y="11.0366" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.6273;"></rect><rect x="10.3418" y="14.6953" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.6234;"></rect><rect x="10.3418" y="18.3535" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.15" className="opacity: 0.6431;"></rect><rect x="10.3418" y="22.0122" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.15" className="opacity: 0.7911;"></rect><rect x="14.7324" y="0.0610352" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.7642;"></rect><rect x="14.7324" y="3.71973" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.15" className="opacity: 0.601;"></rect><rect x="14.7324" y="7.37793" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.15" className="opacity: 0.5463;"></rect><rect x="14.7324" y="11.0366" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.6289;"></rect><rect x="14.7324" y="14.6953" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.5064;"></rect><rect x="14.7324" y="18.3535" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.808;"></rect><rect x="14.7324" y="22.0122" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.4703;"></rect><rect x="19.123" y="0.0610352" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.15" className="opacity: 0.4937;"></rect><rect x="19.123" y="3.71973" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.7489;"></rect><rect x="19.123" y="7.37793" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.6351;"></rect><rect x="19.123" y="11.0366" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.15" className="opacity: 0.6491;"></rect><rect x="19.123" y="14.6953" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.15" className="opacity: 0.6022;"></rect><rect x="19.123" y="18.3535" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.7283;"></rect><rect x="19.123" y="22.0122" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.6122;"></rect><rect x="23.5137" y="0.0610352" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.816;"></rect><rect x="23.5137" y="3.71973" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.7463;"></rect><rect x="23.5137" y="7.37793" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.7685;"></rect><rect x="23.5137" y="11.0366" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.5247;"></rect><rect x="23.5137" y="14.6953" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.15" className="opacity: 0.6555;"></rect><rect x="23.5137" y="18.3535" width="2.92683" height="2.92683" rx="0.4" fillOpacity="0.15" className="opacity: 0.9565;"></rect><rect x="23.5137" y="22.0122" width="2.92683" height="2.92683" rx="0.4" className="opacity: 0.4208;"></rect></svg>
      </div>
    </div>
  </div>
};
const Words = () => {
  return <h1 className={`${Aeo.className}   w-[80%] lg:w-[55%] lg:text-[5.4172767204vw] flex flex-wrap  leading-[100%]   gap-x-[.8125rem]  text-white text-[8.3333333333vw]`}>
    <div className="relative  inline-block">
      <div className=" relative inline-block">C</div>
      <div className=" relative inline-block">o</div>
      <div className=" relative inline-block">-</div>
      <div className=" relative inline-block">c</div>
      <div className=" relative inline-block">r</div>
      <div className=" relative inline-block">e</div>
      <div className=" relative inline-block">a</div>
      <div className=" relative inline-block">t</div>
      <div className=" relative inline-block">i</div>
      <div className=" relative inline-block">n</div>
      <div className=" relative inline-block">g</div>
    </div>
    <div className=" relative inline-block">
      <div className=" relative inline-block">t</div>
      <div className=" relative inline-block">h</div>
      <div className=" relative inline-block">e</div>
    </div>

    <div className=" relative inline-block"><div className=" relative inline-block">F</div><div className=" relative inline-block">u</div><div className=" relative inline-block">t</div><div className=" relative inline-block">u</div><div className=" relative inline-block">r</div><div className=" relative inline-block">e</div></div>

    <div className=" relative inline-block"><div className=" relative inline-block">o</div><div className=" relative inline-block">f</div></div>

    <div className=" relative inline-block"><div className=" relative inline-block">M</div><div className=" relative inline-block">o</div><div className=" relative inline-block">b</div><div className=" relative inline-block">i</div><div className=" relative inline-block">l</div><div className=" relative inline-block">i</div><div className=" relative inline-block">t</div><div className=" relative inline-block">y</div></div>

    <div className=" relative inline-block"><div className=" relative inline-block">E</div><div className=" relative inline-block">x</div><div className=" relative inline-block">p</div><div className=" relative inline-block">e</div><div className=" relative inline-block">r</div><div className=" relative inline-block">i</div><div className=" relative inline-block">e</div><div className=" relative inline-block">n</div><div className=" relative inline-block">c</div><div className=" relative inline-block">e</div><div className=" relative inline-block">s</div></div>

  </h1>
}
const Hero = () => {
  return <div className='bg-black relative w-full h-screen'>
    <video poster='/hello.png' autoPlay loop playsInline preload='auto' muted className='w-full object-cover h-full'>
      <source src='https://senhkgbpskpdrbaljzng.supabase.co/storage/v1/object/public/mymedias//main.mp4' />
    </video>
    <div className='w-full flex flex-col justify-between items-start absolute p-[1rem] top-0 left-0 right-0 bottom-0 h-full'>
      <div></div>
      <Words />
    </div>
  </div>
}

const Selector = ({ videoLinks, switchVid, currindex }: { currindex: number, switchVid: (index: number) => void, videoLinks: string[] }) => {
  return <div className='w-full z-30 h-fit flex justify-center items-center'>
    <div className='p-[.375rem]   bottom-[2rem] absolute rounded-[1.25rem]'>
      <div className='flex gap-1.5'>
        {videoLinks.map((_, index) => {
          return <div className={`${currindex === index && ' bg-white/70 '} transition-transform duration-500 ease-in-out h-[4rem] bg-white/50 backdrop-blur-xs rounded-[.3em] w-[5em]`} onClick={() => switchVid(index)} key={index}>
            <Image width={1000} height={1000} className={' w-full h-full object-cover'} alt='guy' src={`/car${index + 1}.png`} />
          </div>
        })}
      </div>
    </div>
  </div>
}

const CurrentInfo = ({ name, image, description, purePerformances }: carInf) => {
  return <div className='w-[94.3%] lg:top-[.5em] lg:w-[50%] lg:h-[258.16px] flex gap-[10px] p-[4px] border border-[#0000361a] rounded-[2px] absolute top-[.5rem]  backdrop-blur-[5px] bg-[#02000333] h-[204px]'>

    <div className='w-1/2 h-full flex flex-col justify-between'>
      <div id='curr' className='w-full  lg:h-[13.5106rem] h-[10.5rem]'>
        <Image className='w-full transition-all duration-700 ease-in-out h-full object-cover' width={500} key={image} height={500} alt={name} src={image} />
      </div>
      <div className='w-full flex items-center bg-white rounded-[.125rem]  lg:h-[1.7488rem] h-[1.4163rem]'>
        <p className={`${IMB.className} text-[.7142rem] lg:text-[.875rem]  w-full  px-[.3em]`}>PURCHASE</p>
      </div>
    </div>

    <div className='w-1/2 h-full gap-[4px] flex flex-col justify-between'>
      <div className='w-full  lg:h-[7.0869rem] h-[5.7394rem]'>
        <p id='scramble' className={`${Aeo.className} text-white lg:text-[1.125rem] text-[.8713rem] uppercase mb-[.3389rem]`}>zeekr {name}</p>
        <p key={description} id='desker' className={`${IMB.className} w-full h-fit lg:leading-[16.8px] lg:mb-[.875rem] lg:text-[.875rem] text-[#898989] leading-[13.713px] mb-[11.4275px] text-[.7142rem]`}>
          {description}

        </p>
      </div>
      <div className='w-full lg:mt-[.7em] flex flex-col gap-[.25rem]  lg:h-[8.1687rem] h-[6.8106rem]'>
        <p id='scramble' className={`${Aeo.className} text-white lg:text-[1.125rem] text-[.8713rem] uppercase`}>pure performance</p>
        {purePerformances.map(performance => <div id='whitish' key={performance} className={`${IMB.className} lg:text-[.875rem] lg:p-[.175rem] w-full bg-[#d9d9d9b3] text-white text-[.7142rem] p-[.2em]`}>O W OND (AWD)</div>
        )}
      </div>
    </div>
  </div>
}
const ShopSection = ({ params, isPending, data }: { params: URLSearchParams, isPending: boolean, data: Car[] | undefined }) => {
  const imageRefs = useRef<HTMLVideoElement[]>([]);
  const [currindex, setindex] = useState<number>(0);
  const [currentCarInfo, setCurrentCarInfo] = useState<carInf>({
    image: "/car1.webp",
    name: "x",
    description: "Golden ratio proportions Measuring 4,450mm long by 1,572mm high and with a 2,750mm wheelbase.",
    purePerformances: ["0-100km/hin 3.3sec(AWD)", "580kWPeak Power(AWD)", "750kmCLTC Range(RWD)"]
  })
  const VideoLinks: string[] = [
    "/car2.mp4",
    "/car1.mp4",
    "/car3.mp4"];
  const { currentInfo } = standard()
  gsap.registerPlugin(ScrambleTextPlugin, SplitText, Draggable);

  const switchVid = (index: number) => {
    if (index == currindex) return;
    setindex(index);
    setCurrentCarInfo(currentInfo[index]);

    gsap.from("#whitish", {
      opacity: 0,
      stagger: 0.2
    })
    gsap.from("#curr", {
      filter: "blur(2px)",
      opacity: 0.7,
      ease: "none",
    });




    const RemoveAnim = () => {
      gsap.set(imageRefs.current[currindex], {
        opacity: 0,
        ease: "power2.out",
      });
    }
    const Add = () => {
      gsap.set(imageRefs.current[index], {
        opacity: 1,
        ease: "power2.out"
      });
      imageRefs.current[index].play();
    }
    const tl = gsap.timeline();
    tl.call(RemoveAnim);
    tl.call(Add);
  }

  useEffect(() => {
    gsap.set(imageRefs.current[0], {
      opacity: 1
    });
    Draggable.create("#whitboy", {
      type: 'y',
      bounds: { minY: 0, maxY: window.innerHeight },
      onDrag: function () {
        if (this.y > 200) {
          gsap.fromTo("#whitboy", {
            y: this.y,
          }, {
            y: window.innerHeight,
            duration: 0.5,
            ease: "power2.in",
            onComplete: function () {
              gsap.set("#filter", {
                y: 900
              })
            }
          })
        } else {
          gsap.to("#whitboy", {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          })
        }
      }
    })
    const ScrambleGuys = document.querySelectorAll("#scramble");
    ScrambleGuys.forEach((guy) => {
      const tlForCi = gsap.timeline();
      tlForCi.to(guy, {
        duration: 1,
        scrambleText: {
          text: `${guy.textContent?.includes('zeekr') ? `zeekr ${currentCarInfo.name}` : 'PURE PERFORMANCES'}`,
          chars: "xnxd",
          revealDelay: 0.5,
        }
      })
    });
    const desker = document.getElementById('desker');
    const newText = new SplitText(desker, { type: 'lines' })
    gsap.from(newText.lines, { opacity: 0, stagger: 0.3 })
  }, [
    currentCarInfo
  ]);




  const { updateSearch } = search()

  const Search = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.value) {
      updateSearch(`${e.currentTarget.value}`)
      params.set('searchTerm', `${e.currentTarget.value}`);
    } else {
      params.delete('searchTerm')
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', newUrl);

  };

  const showFil = () => {
    gsap.timeline().set('#filter', { y: 0 }).fromTo('#whitboy', { y: 900 }, { y: 0, duration: 0.5 })

  }
  const { guys, addGuys } = showStuff();
  const handleDel = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = e.currentTarget.innerText;
    const currentTypes = params.getAll('type');
    const updatedTypes = currentTypes.includes(text)
      ? currentTypes.filter((type: string) => type !== text)
      : [...currentTypes, text];
    params.delete('type')
    updatedTypes.forEach((type: string) => params.append('type', type));
    addGuys([...updatedTypes])
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState(null, '', newUrl);
  }
  return <>
    <div className={`${Aeo.className} lg:mb-[1em] lg:pt-[5em] px-[1em] pt-[2em] `}>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Top Zeekr picks vehicle for you
      </h2>
      <p className="mt-2 text-sm md:text-base text-gray-600">
        Experience the epitome of amazing journey with our top picks.
      </p>
    </div>
    <div className={`${Aeo.className} lg:hidden h-[5em] p-[.7em] `}>
      <div className='w-full gap-[2em] flex justify-between items-center'>
        <input onChange={(e) => Search(e)} className="text-sm rounded-full px-[1em] py-[.5em] max-w-[24.5rem] outline-none w-[80%] border border-gray-200" title='search' placeholder='search' type="text" />

        <div onClick={showFil} className='flex items-center cursor-pointer gap-[.5em] px-[.5em] rounded-[4px] bg-gray-100'>
          <div className='w-[1em] h-full '>
            <svg className='h-full w-full' viewBox="0 -0.5 21 21" version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0">
              </g><g id="SVGRepo_tracerCarrier"
                strokeLinecap="round" strokeLinejoin="round">
              </g><g id="SVGRepo_iconCarrier">
                <defs> </defs>
                <g id="Page-1" stroke="none"
                  strokeWidth="1" fill="none"
                  fillRule="evenodd">
                  <g
                    transform="translate(-99.000000, -440.000000)"
                    fill="#000000">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M57.7,289 L54.55,289 L54.55,286 L52.45,286 L52.45,289 L49.3,289 L49.3,291 L52.45,291 L52.45,294 L54.55,294 L54.55,291 L57.7,291 L57.7,289 Z M55.6,280 L55.6,282 L61.9,282 L61.9,288 L64,288 L64,280 L55.6,280 Z M61.9,298 L55.6,298 L55.6,300 L64,300 L64,292 L61.9,292 L61.9,298 Z M45.1,292 L43,292 L43,300 L51.4,300 L51.4,298 L45.1,298 L45.1,292 Z M45.1,288 L43,288 L43,280 L51.4,280 L51.4,282 L45.1,282 L45.1,288 Z" > </path> </g> </g> </g> </g></svg></div>
          <p>filter</p>
        </div>

      </div>
      <div className='w-full my-[.5em] flex gap-[1em]'>
        {guys.map((type: string, index: number) => {
          if (type) return <div onClick={handleDel} key={index} className='w-fit flex items-center py-[.6em] rounded-[3px] text-sm px-[.5em] bg-gray-200 h-fit'>
            <p>{type}</p>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6L18 18" />
            </svg>
          </div>
        })}
      </div>
    </div>
    <div className='w-full lg:grid-cols-4 grid luke:grid-cols-3 gap-[1em] grid-cols-2 p-[1em] h-fit'>
      {!isPending ? data?.map((vehicle) => {
        return <SingleCar seats={vehicle.specifics.seats} stars={vehicle.specifics.stars} design={vehicle.specifics.design_sha} gearShift={vehicle.specifics.gearShift} price={vehicle.Price} Type={vehicle.Type} image_url={vehicle.image_url} Name={vehicle.Name} key={vehicle.id} />
      }) : <Skeletons />}


    </div>
    <div className='w-full h-screen relative'>
      {VideoLinks.map((link: string, i) => {
        return <video
          ref={(el) => { if (el) imageRefs.current[i] = el }}
          key={i} playsInline={true} preload='auto'
          muted={true}
          className='h-full opacity-0  w-full object-cover absolute top-0 left-0'
        >
          <source src={link} />
        </video>
      })}
      <div className='flex lg:justify-start lg:px-[.5em] justify-center items-center w-full'>
        {<CurrentInfo purePerformances={currentCarInfo.purePerformances} description={currentCarInfo.description} image={currentCarInfo.image} name={currentCarInfo.name} />
        }
      </div>
      <div className=" w-full h-full right-0 top-0 left-0">
        <Selector currindex={currindex} switchVid={switchVid} videoLinks={VideoLinks} />
      </div>




















    </div></>
}


const SingleCar = ({ Name, Type, image_url, gearShift, seats, design, stars, price }: { Name: string, Type: string, image_url: string, gearShift: string, seats: number, design: number, stars: number, price: number }) => {
  return <div className={`${Aeo.className}  max-w-sm  relative  md:max-w-md lg:max-w-sm bg-white text-white  overflow-hidden`}>
    <div className="absolute bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full top-2 left-2">
      {Type}
    </div>
    <div className='h-48 bg-gray-50 flex justify-center items-center w-full'>
      <img src={`${image_url}`} alt={Name} />

    </div>

    <div className="pt-[1em]">
      <h2 className="text-lg font-semibold text-gray-800">{Name}</h2>

      <div className="flex items-center text-sm text-gray-600 mt-1">
        <div className="w-4 h-4  rounded mr-2">
          <Image className='w-full h-full' src={'/gear.png'} width={1000} height={1000} alt='gear' />
        </div>
        {gearShift}
      </div>

      <div className="flex items-center space-x-4 mt-3 text-sm text-gray-700">
        <div className="flex items-center">
          <div className="w-4 h-4  rounded mr-1">
            <Image className='w-full h-full' src={'/carsit.png'} width={1000} height={1000} alt='car seat' />

          </div>
          {seats}
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4  rounded mr-1">
            <Image className='w-full h-full' src={'/fueller.png'} width={1000} height={1000} alt='fuel' />

          </div>
          {design}
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4  rounded mr-1">
            <Image className='w-full h-full' src={'/star.png'} width={1000} height={1000} alt='gear' />

          </div>
          {stars}
        </div>
      </div>

      <div className="mt-4">
        <span className="text-sm text-gray-500">Start from</span>
        <div className="text-xl font-bold text-gray-800">${Number(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} </div>
      </div>
    </div>
  </div>

}

const SingleFilt = ({ Text, params }: { Text: string, params: URLSearchParams }) => {
  const { addGuys, guys } = showStuff();

  const handledude = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault()
    const text = e.currentTarget.textContent;
    if (!text) return;


    const currentTypes = params.getAll('type');
    const updatedTypes = currentTypes.includes(text)
      ? currentTypes.filter((type: string) => type !== text)
      : [...currentTypes, text];
    params.delete('type')
    updatedTypes.forEach((type: string) => params.append('type', type));
    addGuys([...updatedTypes])
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState(null, '', newUrl);

  }

  return <label onClick={(e) => handledude(e)} className='w-full h-[4em] hover:cursor-pointer border-b border-gray-200 flex items-center gap-[.5em]'>
    <input checked={guys.includes(Text)} onChange={() => { }} className='w-5 checked:bg-black p-[.3em] accent-black border h-5 rounded-full appearance-none' title={Text} type="checkbox" name={Text} />
    <p className='text-[1.1875rem]'>{Text}</p>
  </label>
}

const MobileFilters = ({ params }: { params: URLSearchParams }) => {

  const closeFilt = () => {
    gsap.set('#filter', { y: 900 })
  }
  const types = ["suv", "Mininvan", "Hatchback"];
  return <div onClick={closeFilt} id='filter' className='w-full md:justify-center md:items-center   translate-y-[700px] flex flex-col justify-between  z-50 bg-[oklab(0 0 0/0.2)] backdrop-blur-[5px] h-screen top-0 bottom-0 left-0 right-0 fixed'>
    <div className='md:hidden'></div>
    <div onClick={(e) => e.stopPropagation()} id='whitboy' className='bg-white md:w-[50%] md:rounded-sm md:border rounded-t-lg border-t border-zinc-200 w-full h-[50%]'>
      <div className='w-full md:hidden flex pt-[1em] justify-center items-center'>
        <div className='w-[6em] h-[.6em] rounded bg-gray-400'></div>
      </div>
      <div className={`${Aeo.className} px-[2em] pt-[2em]   w-full h-full flex flex-col `}>
        <div className=''>
          <p className='font-bold mb-2 text-2xl'>Type</p>
          {types.map((type: string) => {
            return <SingleFilt params={params} key={type} Text={type} />
          })}
        </div>
      </div>

    </div>
  </div>
}
const Skeletons = () => {
  return <>
    {Array(8).fill('').map((arr, index) => <div key={index} className={`${Aeo.className}  animate-pulse  max-w-sm  relative  md:max-w-md lg:max-w-sm bg-white text-white  overflow-hidden`}>
      <div className="absolute  bg-gray-500 text-sm text-gray-700 px-3 py-1 rounded-full top-2 left-2">
        <p className='opacity-0'>hello</p>
      </div>
      <div className='h-48  bg-gray-300 flex justify-center items-center w-full'>
        {/* <img  src={`${image_url}`} alt={Name}  /> */}

      </div>

      <div className="pt-[1em]">
        <h2 className="text-lg w-fit bg-gray-300 rounded-full font-semibold text-gray-800">
          <p className='opacity-0'>how far fans me</p>
        </h2>

        <div className="flex items-center text-sm text-gray-600 mt-1">
          <div className="w-4 h-4 bg-gray-200  rounded mr-2">
            {/* <Image className='w-full h-full' src={'/gear.png'} width={1000} height={1000} alt='gear'/> */}
          </div>
          <p className='bg-gray-200 w-4 h-4 rounded'></p>
        </div>

        <div className='mt-[.5em]'>
          <h2 className="text-lg w-fit bg-gray-200 rounded-full font-semibold text-gray-800">
            <p className='opacity-0'>how far fans me</p>
          </h2>
        </div>

        <div className="mt-4">
          <div className="text-sm bg-gray-200 rounded w-fit text-gray-500"><p className='opacity-0'>start from</p></div>
          <div className="text-xl mt-[.5em] flex gap-[1em] font-bold text-gray-800">
            <div className="text-sm bg-gray-200 rounded w-fit text-gray-500"><p className='opacity-0'>start</p></div>
            <div className="text-sm bg-gray-200 rounded w-fit text-gray-500"><p className='opacity-0'>start</p></div>
          </div>
        </div>
      </div>
    </div>)}


  </>
}

export { Hero, ShopSection, Skeletons, Header, MobileFilters }
