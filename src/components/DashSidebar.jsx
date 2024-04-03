import { Sidebar } from 'flowbite-react';
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function DashSidebar() {
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
          <Link to='/dashboard?tab=dash'>
            <Sidebar.Item active='' icon={HiChartPie} as='div'>
              Mural
            </Sidebar.Item>
          </Link>
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item
              active=''
              icon={HiUser}
              label=/* {currentUser.isAdmin ? 'Admin' :  */ 'User' /* } */
              labelColor='dark'
              as='div'
            >
              Perfil
            </Sidebar.Item>
          </Link>
          <Link to='/dashboard?tab=posts'>
            <Sidebar.Item active='' icon={HiDocumentText} as='div'>
              Artigos
            </Sidebar.Item>
          </Link>
          <>
            <Link to='/dashboard?tab=users'>
              <Sidebar.Item active='' icon={HiOutlineUserGroup} as='div'>
                Usuários
              </Sidebar.Item>
            </Link>
            <Link to='/dashboard?tab=comments'>
              <Sidebar.Item active='' icon={HiAnnotation} as='div'>
                Comentários
              </Sidebar.Item>
            </Link>
          </>
          <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
            Sair
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
