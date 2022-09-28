/*
 * @Author: CoderDgx 1181571719@qq.com
 * @Date: 2022-09-28 15:43:46
 * @LastEditors: CoderDgx 1181571719@qq.com
 * @LastEditTime: 2022-09-28 15:44:39
 * @FilePath: /nft-market/contracts/Migrations.sol
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
  address public owner = msg.sender;
  uint public last_completed_migration;

  modifier restricted() {
    require(
      msg.sender == owner,
      "This function is restricted to the contract's owner"
    );
    _;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }
}