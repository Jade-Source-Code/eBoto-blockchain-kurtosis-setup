const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ChipToken", function () {
    beforeEach(async function () {
        this.ChipToken = await ethers.getContractFactory("ChipToken");
        this.chips = await this.ChipToken.deploy();
        await this.chips.waitForDeployment();
        [this.owner, this.user1] = await ethers.getSigners();
    });

    it("should store and retrieve data in the ledger", async function () {
        const testData = "Test entry for the ledger";

        // Store data
        await this.chips.connect(this.user1).storeData(testData);

        // Retrieve data
        const storedData = await this.chips.retrieveData(this.user1.address);

        console.log("Retrieved Data:", storedData);
        expect(storedData).to.equal(testData);
    });
});
