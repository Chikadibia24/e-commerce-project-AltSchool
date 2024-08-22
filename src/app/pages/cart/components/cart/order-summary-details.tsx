export default function OrderSummaryDetails({ height, text1, text2, text1Style, text2Style, }: { height: string; text1: string; text2: string; text1Style: string; text2Style: string; }){
  return (
    <div className={`flex justify-between w-[387px] ${height}`}>
      <div className="w-[139px] h-[22px]">
        <p className={`font-[500] ${text1Style}`}>{text1}</p>
      </div>

      <div className="w-[127px] h-[42px]">
        <p className={`font-[500] ${text2Style}`}>{text2}</p>
      </div>
    </div>
  );
}