import * as classnames from "classnames";
import {Collapse} from "reactstrap";
import * as React from "react";
import {CSSProperties, useState} from "react";

export const TextDisclosurePanel: React.FunctionComponent<{
    text: string;
    textClassName?: string;
    textStyle?: CSSProperties;
    title: string;
}> = ({text, textClassName, textStyle, title}) => {
    const [state, setState] = useState<{ open: boolean }>({open: false});
    const {open} = state;
    const onToggle = () => setState((prevState) => ({open: !prevState.open}));

    return (
        <div>
            <a onClick={onToggle}>{title}</a>
            <div className="float-right">
                <a onClick={onToggle}>
                    <i className={classnames({
                        fas: true,
                        "fa-chevron-down": open,
                        "fa-chevron-right": !open
                    })}></i>
                </a>
            </div>
            <br/>
            <Collapse isOpen={open}>
                <div className={classnames("text-left", textClassName)} style={textStyle}>{text}</div>
            </Collapse>
        </div>
    );
}
