import { SideBarMenuItem } from "../../types/types";
import { classNames } from "../../util/classes";
import './SideBarMenuItemView.scss';
import { NavLink } from "react-router-dom";

interface SideBarMenuItemViewProps {
    item: SideBarMenuItem;
    isOpen: boolean;
}

export const SideBarMenuItemView = ({ item, isOpen }:SideBarMenuItemViewProps) => {

    return (
        <div className="SideBarMenuItemView">
            <NavLink to={item.url} className="linkBar">
                <div className={classNames('ItemContent', isOpen ? '' : 'collapsed')}>
                    <div className='icon'>
                        <item.icon size='32' />
                    </div>
                    <span className='label'>{item.label}</span>
                </div>
            </NavLink>
            {
                !isOpen ? <div className='tooltip'>{item.label}</div> : ''
            }
        </div>
    )
}