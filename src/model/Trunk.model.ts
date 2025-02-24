import { IBranch } from "./Branch.model";

export interface ITrunk {
    branches: IBranch[];
}

export class Trunk {
    trunk: ITrunk;

    constructor(trunk: ITrunk) {
        this.trunk = trunk;
    }

    // Method to add a branch to the trunk
    addBranch(branch: IBranch): void {
        this.trunk.branches.push(branch);
    }
}