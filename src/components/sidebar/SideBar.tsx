import { SideBarMenu } from './SideBarMenu';
import { SideBarMenuItem, SideBarMenuCard } from '../../types/types';
import { FcBusinessman, FcVideoCall, FcKindle } from 'react-icons/fc'
import profileImage from '../../images/alex.jpg'

export const SideBar = () => {

    const items:SideBarMenuItem[] = [
        {
          id: '1',
          label: 'Sobre Mí',
          icon: FcBusinessman,
          url: '/'
        },
        {
          id: '2',
          label: 'Psicoterapia Online',
          icon: FcVideoCall,
          url: '/'
        },
        {
          id: '3',
          label: 'Ebook',
          icon: FcKindle,
          url: '/'
        }
      ]
    
      const card:SideBarMenuCard = {
        id: 'Card01',
        displayName: 'Alex Martín',
        title: 'Psicólogo & Fullstack Developer',
        photoUrl: profileImage,
        url: '/'
      }

      return (
        <div>
          <SideBarMenu items={items} card={card} />
        </div>
      );

}