import React from "react";
import './cartwidget.css';

// get our fontawesome imports
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartWidget() {
    return <button type="button" class="btn btn-default dropdown-toggle dropdownCart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon className="iconCart" icon={faShoppingCart} /></button>;
}
