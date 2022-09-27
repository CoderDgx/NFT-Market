/*
 * @Author: CoderDgx 1181571719@qq.com
 * @Date: 2022-09-26 17:18:44
 * @LastEditors: CoderDgx 1181571719@qq.com
 * @LastEditTime: 2022-09-26 17:32:19
 * @FilePath: /nft-market/components/layout/BaseLayout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FC } from "react";
import { NavBar } from "..";

const BaseLayout: FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="py-16 bg-gray-50 overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
