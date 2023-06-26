import React, { Fragment } from "react";
import moment from 'moment';
function NameListItems(props) {

    return(
        <Fragment>

            <div className="list-group-item">
                <div className="row">
                    <div className="col"><img src={props.avatar} alt="sd" /></div>
                    <div className="col"><p>{props.name}</p>
                                <p>City - {props.city}</p>
                                {/* <p>{new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday)) }</p> */}
                                <p>Birthday - {moment(props.birthday).format('DD-MM-YYYY')}</p>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
    
}
export default NameListItems;