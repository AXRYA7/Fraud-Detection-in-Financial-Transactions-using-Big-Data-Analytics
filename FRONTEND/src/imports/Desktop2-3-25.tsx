import svgPaths from "./svg-7iefl1yqzt";
import imgFrame52 from "figma:asset/f16d305d93865d214c9b8b6d4e64f547743529a0.png";

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
      <p className="absolute font-['Anonymous_Pro:Bold',sans-serif] leading-[normal] left-[68px] not-italic text-[68px] text-white top-[159px]">Fraud Detection in Financial Transactions</p>
      <p className="absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[normal] left-[68px] text-[36px] text-white top-[266px] w-[1367px] whitespace-pre-wrap">Upload your transaction data to analyze and identify potentially fraudulent financial transactions using a Big Data–driven machine learning model.</p>
      <Frame />
      <div className="absolute h-[1102px] left-[1762px] top-[-11px] w-[103px]" data-name="Frame 5 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame52} />
      </div>
    </div>
  );
}