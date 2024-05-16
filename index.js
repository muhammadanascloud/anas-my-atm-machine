#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 0;
let isContinue = true;
let pinCode = 1234;
const message = "Welcome to Coder ATM";
let PIN = await inquirer.prompt({
    type: "number",
    name: "PINCODE",
    message: "Please enter your pin code."
});
if (PIN.PINCODE === 1234) {
    console.log("THATS CORRECT.");
    while (isContinue) {
        let ans = await inquirer.prompt({
            type: "list",
            name: "options",
            message: "Select any option",
            choices: ["DEPOSIT", "WITHDRAW", "FASTCASH", "BALANCE CHECK"],
        });
        // ----------------------DEPOSIT______________________//
        if (ans.options === "DEPOSIT") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "DEPOSIT_AMOUNT",
                message: "Please enter your amount!",
            });
            if (ans.DEPOSIT_AMOUNT > 0) {
                myBalance += ans.DEPOSIT_AMOUNT;
                console.log(myBalance);
            }
        }
        // ----------------------WITHDRAW______________________//
        else if (ans.options === "WITHDRAW") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "WITHDRAWAmount",
                message: "Please enter your amount",
            });
            if (ans.WITHDRAWAmount <= myBalance) {
                myBalance -= ans.WITHDRAWAmount;
                console.log(myBalance);
            }
            else if (ans.WITHDRAWAmount > myBalance) {
                console.log("You have insuficient Balance!");
            }
        }
        // ----------------------FASTCASH______________________//
        if (ans.options === "FASTCASH") {
            let ans = await inquirer.prompt({
                type: "list",
                name: "FASTCASHAmount",
                message: "Please enter your amount",
                choices: ["500", "1000", "5000", "10000"],
            });
            if (ans.FASTCASHAmount <= myBalance) {
                if (ans.FASTCASHAmount == 500) {
                    myBalance -= ans.FASTCASHAmount;
                    console.log(`Please collect your cash.\nYour remaining account balance is ${myBalance}`);
                }
                else if (ans.FASTCASHAmount == 1000) {
                    myBalance -= ans.FASTCASHAmount;
                    console.log(`Please collect your cash.\nYour remaining account balance is ${myBalance}`);
                }
                else if (ans.FASTCASHAmount == 5000) {
                    myBalance -= ans.FASTCASHAmount;
                    console.log(`Please collect your cash.\nYour remaining account balance is ${myBalance}`);
                }
                else if (ans.FASTCASHAmount == 10000) {
                    console.log(`Please wait for your cash`);
                }
                else {
                    console.log(`Please collect your cash.\nYour remaining account balance is ${myBalance}`);
                }
            }
        }
        // ----------------------CHECK BALANCE______________________//
        if (ans.options === "BALANCE CHECK") {
            console.log(myBalance);
        }
        // ----------------------WHILE CONDITION______________________//
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "shouldnotcontinue",
            message: "Do you want to continue?",
        });
        if (!while_ans.shouldnotcontinue) {
            isContinue = false;
        }
    }
}
else {
    console.log("Your pin code is invalid");
}
