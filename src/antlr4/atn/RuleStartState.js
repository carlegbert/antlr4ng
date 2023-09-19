/*
 * Copyright (c) The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

import { ATNState } from "./ATNState.js";
import { ATNStateType } from "./ATNStateType.js";

export class RuleStartState extends ATNState {
    constructor() {
        super();
        this.isPrecedenceRule = false;
    }

    get stateType() {
        return ATNStateType.RULE_START;
    }

}
