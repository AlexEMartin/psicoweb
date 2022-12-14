import { SideBarMenuCard } from '../../types/types';
import { classNames } from '../../util/classes';
import './SideBarMenuCardView.scss';

interface SideBarMenuCardViewProps {
    card: SideBarMenuCard;
    isOpen: boolean;
}

export const SideBarMenuCardView = ({ card, isOpen }: SideBarMenuCardViewProps) => {

    return (
        <div className="SideBarMenuCardView">
            <img className="profile" src={card.photoUrl} width="100%" alt={card.displayName} />
            <div className={classNames('profileInfo', isOpen ? '' : 'collapsed')}>
                <div className="name">{card.displayName}</div>
                <div className="title">{card.title}</div>
            </div>
        </div>
    )
}