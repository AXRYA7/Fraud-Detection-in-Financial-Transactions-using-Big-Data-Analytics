import svgPaths from "./svg-7b8f42f8tb";
import imgImage4 from "figma:asset/f59be9d2cbb2aa4a7ba396dce83793d49fa164c8.png";

function Frame1() {
  return (
    <div className="absolute left-[1764px] size-[100px] top-[274px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g clipPath="url(#clip0_1_71)" id="Frame 2">
          <rect fill="var(--fill-0, #FF0000)" height="100" id="Rectangle 3" style={{ fill: "color(display-p3 1.0000 0.0000 0.0000)", fillOpacity: "1" }} width="100" />
          <path d={svgPaths.p3ddd8500} fill="var(--fill-0, white)" id="Rectangle 5" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p2f0dca60} fill="var(--fill-0, white)" id="Rectangle 11" style={{ fill: "white", fillOpacity: "1" }} />
          <rect fill="var(--fill-0, white)" height="106.392" id="Rectangle 6" style={{ fill: "white", fillOpacity: "1" }} transform="rotate(41.7814 61.8877 -8)" width="12.3455" x="61.8877" y="-8" />
          <rect fill="var(--fill-0, white)" height="148.412" id="Rectangle 7" style={{ fill: "white", fillOpacity: "1" }} transform="rotate(41.7814 92.0908 -8.22501)" width="12.3455" x="92.0908" y="-8.22501" />
          <rect fill="var(--fill-0, white)" height="142.746" id="Rectangle 8" style={{ fill: "white", fillOpacity: "1" }} transform="rotate(41.7814 104.11 9)" width="12.3455" x="104.11" y="9" />
          <rect fill="var(--fill-0, white)" height="142.746" id="Rectangle 9" style={{ fill: "white", fillOpacity: "1" }} transform="rotate(41.7814 117.11 25)" width="12.3455" x="117.11" y="25" />
          <rect fill="var(--fill-0, white)" height="91.0506" id="Rectangle 10" style={{ fill: "white", fillOpacity: "1" }} transform="rotate(41.7814 119.279 53.2412)" width="12.3455" x="119.279" y="53.2412" />
        </g>
        <defs>
          <clipPath id="clip0_1_71">
            <rect fill="white" height="100" style={{ fill: "white", fillOpacity: "1" }} width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[656px] left-[1764px] top-[424px] w-[100px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 656">
        <g clipPath="url(#clip0_1_62)" id="Frame 3">
          <rect fill="var(--fill-0, #FF0000)" height="656" id="Rectangle 4" style={{ fill: "color(display-p3 1.0000 0.0000 0.0000)", fillOpacity: "1" }} width="100" />
          <path d={svgPaths.p399e0e0} id="Line 6" stroke="var(--stroke-0, white)" strokeWidth="4" style={{ stroke: "white", strokeOpacity: "1" }} />
          <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="4" style={{ stroke: "white", strokeOpacity: "1" }} x1="-3.81711" x2="101.183" y1="135.175" y2="88.1745" />
          <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="4" style={{ stroke: "white", strokeOpacity: "1" }} x1="-2.81711" x2="102.183" y1="215.175" y2="168.175" />
          <line id="Line 3" stroke="var(--stroke-0, white)" strokeWidth="4" style={{ stroke: "white", strokeOpacity: "1" }} transform="matrix(0.912733 0.408557 0.408557 -0.912733 0 222)" x2="115.039" y1="-2" y2="-2" />
          <line id="Line 4" stroke="var(--stroke-0, white)" strokeWidth="4" style={{ stroke: "white", strokeOpacity: "1" }} x1="1.74846e-07" x2="100" y1="336" y2="336" />
          <line id="Line 5" stroke="var(--stroke-0, white)" strokeWidth="4" style={{ stroke: "white", strokeOpacity: "1" }} x1="1.74846e-07" x2="100" y1="365" y2="365" />
        </g>
        <defs>
          <clipPath id="clip0_1_62">
            <rect fill="white" height="656" style={{ fill: "white", fillOpacity: "1" }} width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[530px] top-[440px]">
      <div className="absolute bg-black h-[81px] left-[530px] rounded-[8px] top-[440px] w-[404px]" />
      <p className="absolute font-['GRIFTER:Bold',sans-serif] leading-[normal] left-[547px] not-italic text-[34px] text-white top-[466px]">Analyze Transaction</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[600px] left-[68px] top-[403px] w-[1463px]">
      <div className="-translate-x-1/2 absolute bg-[#fcfcfc] border-4 border-[#ff9090] border-solid h-[600px] left-1/2 rounded-[8px] top-0 w-[1463px]" />
      <Group />
      <p className="-translate-x-1/2 absolute font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%+0.5px)] text-[30px] text-black text-center top-[545px] w-[1278px] whitespace-pre-wrap">**This is a prototype interface for academic demonstration purposes only.</p>
      <p className="-translate-x-1/2 absolute font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-0.5px)] text-[30px] text-black text-center top-[378px] w-[1278px] whitespace-pre-wrap">Supported Formats: CSV</p>
      <p className="-translate-x-1/2 absolute font-['Quicksand:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%+0.5px)] text-[26px] text-black text-center top-[89px] w-[1278px] whitespace-pre-wrap">
        {`Upload a CSV file containing transaction records to identify potential fraudulent `}
        <br aria-hidden="true" />
        transactions in your banking experience.
      </p>
      <p className="-translate-x-1/2 absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+0.5px)] text-[30px] text-black text-center top-[29px] w-[1278px] whitespace-pre-wrap">Upload Transaction Data</p>
      <div className="-translate-x-1/2 absolute bg-[#f5f5f5] h-[177px] left-[calc(50%+0.5px)] top-[177px] w-[1182px]">
        <div aria-hidden="true" className="absolute border-4 border-black border-dashed inset-[-4px] pointer-events-none" />
      </div>
      <div className="-translate-x-1/2 absolute bottom-[57.17%] left-[calc(50%+0.5px)] top-[32.17%] w-[64px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <path d={svgPaths.p321c9180} fill="var(--fill-0, #6F6F6F)" id="Vector" style={{ fill: "color(display-p3 0.4337 0.4337 0.4337)", fillOpacity: "1" }} />
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+0.5px)] text-[30px] text-black text-center top-[266px] w-[1278px] whitespace-pre-wrap">Drag and Drop CSV file here</p>
      <p className="-translate-x-1/2 absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+0.5px)] text-[#006eff] text-[20px] text-center top-[305px] w-[1278px] whitespace-pre-wrap">or click anywhere to browse</p>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-black relative size-full" data-name="Desktop - 2">
      <div className="absolute bg-[red] h-[224px] left-[1764px] top-0 w-[100px]" />
      <Frame1 />
      <Frame2 />
      <p className="absolute font-['Anonymous_Pro:Bold',sans-serif] leading-[normal] left-[1788px] not-italic text-[58px] text-white top-[166px]">07</p>
      <p className="absolute font-['GRIFTER:Bold',sans-serif] leading-[normal] left-[68px] not-italic text-[68px] text-white top-[159px]">Fraud Detection in Financial Transactions</p>
      <p className="absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[normal] left-[68px] text-[36px] text-white top-[266px] w-[1367px] whitespace-pre-wrap">Upload your transaction data to analyze and identify potentially fraudulent financial transactions using a Big Data–driven machine learning model.</p>
      <Frame />
      <div className="absolute h-[291px] left-[1763px] top-[789px] w-[101px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[197.26%] left-[-177.62%] max-w-none top-[-12.21%] w-[454.64%]" src={imgImage4} />
        </div>
      </div>
    </div>
  );
}