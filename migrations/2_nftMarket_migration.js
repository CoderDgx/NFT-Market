/* eslint-disable no-undef */
/*
 * @Author: CoderDgx 1181571719@qq.com
 * @Date: 2022-09-28 15:45:10
 * @LastEditors: CoderDgx 1181571719@qq.com
 * @LastEditTime: 2022-09-28 15:45:24
 * @FilePath: /nft-market/migrations/2_nftMarket_migration.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const NftMarket = artifacts.require("NftMarket");

module.exports = function (deployer) {
  deployer.deploy(NftMarket);
};
