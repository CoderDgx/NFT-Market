/*
 * @Author: CoderDgx 1181571719@qq.com
 * @Date: 2022-09-26 03:35:05
 * @LastEditors: CoderDgx 1181571719@qq.com
 * @LastEditTime: 2022-09-27 15:09:07
 * @FilePath: /nft-market/tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
