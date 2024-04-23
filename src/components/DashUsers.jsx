import { Modal, Table, Button } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function DashUsers() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      <Table hoverable className='shadow-md'>
        <Table.Head>
          <Table.HeadCell>Data de criação</Table.HeadCell>
          <Table.HeadCell>Imagem</Table.HeadCell>
          <Table.HeadCell>Nome</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Admin</Table.HeadCell>
          <Table.HeadCell>Deletar</Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
            <Table.Cell>
              <img className='w-10 h-10 object-cover bg-gray-500 rounded-full' />
            </Table.Cell>{' '}
            <Table.Cell>
              <FaCheck className='text-green-500' />
              <FaTimes className='text-red-500' />
            </Table.Cell>
            <Table.Cell>
              <span
                onClick={() => {
                  setShowModal(true);
                }}
                className='font-medium text-red-500 hover:underline cursor-pointer'
              >
                Deletar
              </span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Realmente quer deletar esse usuário?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure'>Sim</Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                Não{' '}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
