// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract TrasferFunds {
    uint256 transactionCount;

    event TrasferEvent(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp
    );

    struct TransferFundsStruck{
        address sender;
        address receiver;
        uint256 amount;
        string  message;
        uint256 timestamp;
    }

    TransferFundsStruck[] transactions;

    function addDataToBlockchain(
        address payable receiver,
        uint256 amount,
        string memory message
        ) public {
            transactionCount += 1;
            transactions.push(
                TransferFundsStruck(
                    msg.sender,
                    receiver,
                    amount,
                    message,
                    block.timestamp
                )
            );

            emit TrasferEvent(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp
            );
        }

        function getAllTransactions()
        public 
        view 
        returns(TransferFundsStruck[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns(uint256){
        return transactionCount;
    }
}