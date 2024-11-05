import {Setting} from "./ui/components/Setting/Setting";
import {IncBlock} from "./ui/components/IncBlock/IncBlock";
import React from "react";

export const ViaRedux = () => {
    return(
        <div>

            <div className='App'>
                <Setting/>
            </div>

            <div className='App'>
                <IncBlock/>
            </div>

        </div>
    )
}