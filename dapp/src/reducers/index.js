import { combineReducers } from "redux";
import { alert } from "./alert.reducer";
import { web3 } from "./web3.reducer";
import { qrCode } from "./qrCode.reducer";
import { box } from "./3box.reducer";
import { contract } from "./contract.reducer";

const appReducer = combineReducers({
    alert,
    web3,
    qrCode,
    box,
    contract
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
