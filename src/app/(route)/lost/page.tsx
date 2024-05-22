"use client";
// Lost.tsx
import { useState } from "react";
import Map from "./maps";
import LostList from "./list";

export default function Lost() {
  const components: Record<number, JSX.Element> = {
    0: <Map />,
    1: <LostList />,
  };

  const [selTab, setSelTab] = useState(0);

  const clickHandler = (idx: number) => {
    setSelTab(idx);
  };

  return (
    <div>
      <div className=" h-[50px]">
        <div className="flex h-full items-end">
          <button
            type="button"
            className={`w-[486px] border-gray-300 rounded-t-[12px] mr-[-1px] border ${selTab === 0 ? " h-[46px] text-green-500" : "bg-gray-50 h-[36px]"}`}
            onClick={() => clickHandler(0)}
          >
            맵
          </button>
          <button
            type="button"
            className={`w-[486px] border-gray-300 rounded-t-[12px] border ${selTab === 1 ? " h-[46px] text-green-500" : "bg-gray-50 h-[36px]"}`}
            onClick={() => clickHandler(1)}
          >
            리스트
          </button>
        </div>
      </div>
      <div>{components[selTab]}</div>
    </div>
  );
}
