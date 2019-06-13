import React from 'react'
import './home.css'
import { Columns, Column } from 'bloomer'

function Loading(){
    return(
        <Columns isCentered>
            <Column>
                <div class="lds-facebook"><div></div><div></div><div></div></div>
            </Column>
        </Columns>
    )
}

export default Loading;