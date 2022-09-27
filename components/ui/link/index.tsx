/*
 * @Author: CoderDgx 1181571719@qq.com
 * @Date: 2022-09-27 14:44:20
 * @LastEditors: CoderDgx 1181571719@qq.com
 * @LastEditTime: 2022-09-27 15:05:19
 * @FilePath: /nft-market/components/link/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Link from "next/link";
import React, { FC, ReactElement } from "react";
import { useRouter } from "next/router";

type LinkProps = {
  href: string;
  children: ReactElement;
  activeClass: string;
};

const ActiveLink: FC<LinkProps> = (props) => {
  const { children, ...rest } = props;
  const { pathname } = useRouter();
  let className = children!.props.className || "";
  let _defaultClass = `${className} text-gray-100`;

  if (pathname === props.href) {
    className = `${className} text-indigo-400 ${props.activeClass}`;
  } else {
    className = _defaultClass;
  }

  return <Link {...rest}>{React.cloneElement(children, { className })}</Link>;
};

export default ActiveLink;
